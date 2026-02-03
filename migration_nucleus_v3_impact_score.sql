-- Add impact_score column to nucleus_posts table
ALTER TABLE public.nucleus_posts 
ADD COLUMN IF NOT EXISTS impact_score integer DEFAULT 60;
