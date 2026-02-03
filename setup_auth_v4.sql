-- 1. Add author_id to nucleus_posts if it doesn't exist
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'nucleus_posts' AND column_name = 'author_id') THEN
        ALTER TABLE public.nucleus_posts ADD COLUMN author_id uuid references auth.users(id);
    END IF;
END $$;

-- 2. Create nucleus_profiles table (Role Management)
CREATE TABLE IF NOT EXISTS public.nucleus_profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text,
  role text default 'contributor' check (role in ('admin', 'contributor')),
  created_at timestamp with time zone default now()
);

-- 3. Enable RLS
ALTER TABLE public.nucleus_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nucleus_posts ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies for nucleus_profiles
-- Public can read profiles (needed to fetch role on client) or just authenticated
DROP POLICY IF EXISTS "Public profiles" ON public.nucleus_profiles;
CREATE POLICY "Public profiles" ON public.nucleus_profiles
  FOR SELECT USING (true);

-- Users can update their own profile (optional, mostly for username)
DROP POLICY IF EXISTS "Users can update own profile" ON public.nucleus_profiles;
CREATE POLICY "Users can update own profile" ON public.nucleus_profiles
  FOR UPDATE USING (auth.uid() = id);

-- 5. Create Trigger to handle new user registration
-- Automatically assigns 'admin' role if email is 'ddaiivan@nucleus.local', else 'contributor'
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.nucleus_profiles (id, username, role)
  VALUES (
    new.id, 
    new.raw_user_meta_data->>'username',
    CASE 
      WHEN new.email = 'ddaiivan@nucleus.local' THEN 'admin'
      ELSE 'contributor'
    END
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger definition
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 6. Update Policies on nucleus_posts
-- Drop insecure "Public Write" policy if it exists
DROP POLICY IF EXISTS "Allow Public Write Access" ON public.nucleus_posts;
DROP POLICY IF EXISTS "Allow Public Read Access" ON public.nucleus_posts;

-- Read: Public can read PUBLISHED posts
CREATE POLICY "Public Read Published" ON public.nucleus_posts
  FOR SELECT USING (is_published = true);

-- Read: Authenticated users (Admin/Contributor) can read ALL posts
CREATE POLICY "Auth Read All" ON public.nucleus_posts
  FOR SELECT TO authenticated USING (true);

-- Insert: Contributors and Admins
CREATE POLICY "Auth Insert" ON public.nucleus_posts
  FOR INSERT TO authenticated WITH CHECK (true);

-- Update: Admin can update ALL; Contributor can update OWN DRAFTS only
CREATE POLICY "Auth Update" ON public.nucleus_posts
  FOR UPDATE TO authenticated
  USING (
    (SELECT role FROM public.nucleus_profiles WHERE id = auth.uid()) = 'admin' OR
    (auth.uid() = author_id AND is_published = false)
  );

-- Delete: Admin ONLY
CREATE POLICY "Admin Delete" ON public.nucleus_posts
  FOR DELETE TO authenticated
  USING ((SELECT role FROM public.nucleus_profiles WHERE id = auth.uid()) = 'admin');
