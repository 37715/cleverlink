-- CleverLink Database Setup
-- Run this SQL in your Supabase SQL Editor to create the necessary tables

-- Create table for full form submissions
CREATE TABLE form_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    selected_service TEXT NOT NULL,
    company_name TEXT,
    problems TEXT NOT NULL,
    additional_info TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create table for email signups (from initialize button)
CREATE TABLE email_signups (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX idx_form_submissions_email ON form_submissions(email);
CREATE INDEX idx_form_submissions_created_at ON form_submissions(created_at);
CREATE INDEX idx_form_submissions_service ON form_submissions(selected_service);

CREATE INDEX idx_email_signups_email ON email_signups(email);
CREATE INDEX idx_email_signups_created_at ON email_signups(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts (for form submissions)
-- Note: These policies allow anyone to INSERT data, but only authenticated users can read/update/delete
-- Adjust according to your security needs

-- Policy for form_submissions
CREATE POLICY "Allow public insert on form_submissions" ON form_submissions
    FOR INSERT WITH CHECK (true);

-- Policy for email_signups  
CREATE POLICY "Allow public insert on email_signups" ON email_signups
    FOR INSERT WITH CHECK (true);

-- Optional: Add policies for authenticated users to read data
-- Uncomment these if you want to query the data from your app later

-- CREATE POLICY "Allow authenticated read on form_submissions" ON form_submissions
--     FOR SELECT USING (auth.role() = 'authenticated');

-- CREATE POLICY "Allow authenticated read on email_signups" ON email_signups
--     FOR SELECT USING (auth.role() = 'authenticated');

-- Add some helpful comments
COMMENT ON TABLE form_submissions IS 'Stores complete form submissions from the contact form';
COMMENT ON TABLE email_signups IS 'Stores email addresses collected from the initialize button';

COMMENT ON COLUMN form_submissions.selected_service IS 'The AI service selected: ai-agent, ai-phone-agent, email-automation, or social-media-automation';
COMMENT ON COLUMN form_submissions.problems IS 'Business problems the client wants to solve';
COMMENT ON COLUMN form_submissions.additional_info IS 'Additional details provided by the client';

-- View the table structures
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name IN ('form_submissions', 'email_signups')
ORDER BY table_name, ordinal_position; 