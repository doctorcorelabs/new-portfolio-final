-- Add iframe_embed column to nucleus_posts table
ALTER TABLE public.nucleus_posts 
ADD COLUMN IF NOT EXISTS iframe_embed text;
