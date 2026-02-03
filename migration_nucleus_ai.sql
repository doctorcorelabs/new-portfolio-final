-- Migration to add AI summary and translation columns to nucleus_posts

ALTER TABLE nucleus_posts 
ADD COLUMN IF NOT EXISTS ai_summary TEXT,
ADD COLUMN IF NOT EXISTS ai_translation TEXT;
