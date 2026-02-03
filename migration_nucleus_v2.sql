-- Add new columns to nucleus_posts table
ALTER TABLE public.nucleus_posts 
ADD COLUMN IF NOT EXISTS category text DEFAULT 'Announcement',
ADD COLUMN IF NOT EXISTS is_published boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS views integer DEFAULT 0;

-- Create storage bucket for images (run this in SQL editor or use Supabase Dashboard > Storage)
-- Note: You may need to create the bucket manually in Supabase Dashboard > Storage > New Bucket
-- Bucket name: nucleus-images
-- Public: true
