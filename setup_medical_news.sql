-- Create table for Medical News
create table if not exists medical_news (
  id uuid default gen_random_uuid() primary key,
  title text not null unique, -- Prevent duplicates
  link text not null,
  pub_date timestamptz not null,
  source text not null,
  created_at timestamptz default now()
);

-- Enable RLS
alter table medical_news enable row level security;

-- Policy: Allow everyone to read news
create policy "Allow public read access"
  on medical_news for select
  using (true);

-- Policy: Allow everyone (anon) to insert/update news
-- (Required for client-side auto-update mechanism to keep DB active)
create policy "Allow public insert/update access"
  on medical_news for insert
  with check (true);

create policy "Allow public update access"
  on medical_news for update
  using (true);
  
-- Create index for sorting
create index if not exists medical_news_pub_date_idx on medical_news (pub_date desc);
