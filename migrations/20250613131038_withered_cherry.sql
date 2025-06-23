/*
  # Email Subscribers Table

  1. New Tables
    - `email_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `first_name` (text)
      - `last_name` (text)
      - `subscribed_at` (timestamp)
      - `status` (text, default 'active')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `email_subscribers` table
    - Add policy for service role access only
*/

CREATE TABLE IF NOT EXISTS email_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy for service role access only
CREATE POLICY "Service role can manage email subscribers"
  ON email_subscribers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_email_subscribers_email ON email_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_email_subscribers_status ON email_subscribers(status);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_email_subscribers_updated_at 
    BEFORE UPDATE ON email_subscribers 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();