# Supabase Setup Instructions

## 1. Create Environment Variables

Create a file called `.env.local` in the `cleverlink` directory with the following content:

```env
VITE_SUPABASE_URL=https://vlqdsygwsqjigohinndg.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZscWRzeWd3c3FqaWdvaGlubmRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNjA0NTgsImV4cCI6MjA2NzczNjQ1OH0.RROoWnGcQzTd6rjWKp68SgMMAV7c1RS4oql0bRZ0_S0
```

## 2. Create Database Tables

1. Go to your Supabase dashboard: https://vlqdsygwsqjigohinndg.supabase.co
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase-setup.sql` 
4. Run the SQL script

This will create:
- `form_submissions` table for complete form data
- `email_signups` table for email addresses from the initialize button
- Proper indexes for performance
- Row Level Security policies

## 3. Database Schema

### form_submissions
- `id` (UUID, Primary Key)
- `name` (Text, Required)
- `email` (Text, Required) 
- `selected_service` (Text, Required) - One of: ai-agent, ai-phone-agent, email-automation, social-media-automation
- `company_name` (Text, Optional)
- `problems` (Text, Required)
- `additional_info` (Text, Optional)
- `created_at` (Timestamp)

### email_signups
- `id` (UUID, Primary Key)
- `email` (Text, Required)
- `created_at` (Timestamp)

## 4. How It Works

### Email Collection (Initialize Button)
- When users enter their email and click "initialize" on the landing page
- Email is saved to `email_signups` table
- User is redirected to the form with email pre-filled

### Form Submission
- Complete form data is saved to `form_submissions` table
- User sees success page after submission
- Form includes validation and error handling

## 5. Security

The tables use Row Level Security (RLS) with policies that:
- Allow public INSERT operations (for form submissions)
- Require authentication for SELECT/UPDATE/DELETE operations
- You can modify these policies in Supabase dashboard as needed

## 6. Testing

1. Start the development server: `npm run dev`
2. Enter an email on the landing page and click "initialize"
3. Fill out the complete form
4. Check your Supabase dashboard to see the data

## 7. Viewing Data

To view collected data:
1. Go to Supabase dashboard
2. Navigate to Table Editor
3. Select `form_submissions` or `email_signups` tables
4. View and export data as needed

## Next Steps

Consider adding:
- Email notifications when forms are submitted
- Admin dashboard to view submissions
- Data export functionality
- Automated follow-up emails 