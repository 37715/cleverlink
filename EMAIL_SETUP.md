# Email Setup Guide

This guide will help you set up automated email functionality for your CleverLink website. When users submit the contact form, they'll receive a confirmation email and you'll receive a notification.

## Overview

The email system consists of:
- **Confirmation emails** sent to users who submit the form
- **Notification emails** sent to `cleverlink.ai@outlook.com` for each form submission
- Beautiful, responsive email templates matching your brand

## Prerequisites

- Supabase project with CLI access
- Domain access (cleverlink.uk)

## Step 1: Set up Resend Account

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create a free account (includes 100 emails/day, 3,000/month)

2. **Add your domain**
   - In Resend dashboard, go to "Domains"
   - Add `cleverlink.uk` as your domain
   - Follow the DNS verification instructions:
     - Add the provided TXT and MX records to your domain DNS settings
     - Wait for verification (usually takes a few minutes)

3. **Get your API key**
   - Go to "API Keys" in Resend dashboard
   - Create a new API key with "Sending access"
   - Copy the key (starts with `re_...`)

## Step 2: Deploy Supabase Edge Function

1. **Install Supabase CLI** (if not already installed)
   ```bash
   npm install -g supabase
   ```

2. **Login to Supabase**
   ```bash
   supabase login
   ```

3. **Link your project**
   ```bash
   cd cleverlink
   supabase link --project-ref YOUR_PROJECT_REF
   ```
   
   Find your project ref in your Supabase dashboard URL:
   `https://supabase.com/dashboard/project/YOUR_PROJECT_REF`

4. **Set environment variables**
   ```bash
   supabase secrets set RESEND_API_KEY=your_resend_api_key_here
   ```

5. **Deploy the function**
   ```bash
   supabase functions deploy send-emails
   ```

## Step 3: Configure Email Sending Domains

In your Resend dashboard:

1. **Verify your domain ownership**
   - Ensure `cleverlink.uk` is verified and active

2. **Set up email addresses**
   The function uses these email addresses:
   - **From (confirmation emails)**: `hello@cleverlink.uk`
   - **From (notifications)**: `notifications@cleverlink.uk`
   - **To (notifications)**: `cleverlink.ai@outlook.com`

## Step 4: Test the Email System

1. **Test form submission**
   - Visit your website's contact form
   - Submit a test form with your email address
   - Check that you receive:
     - Confirmation email in your inbox
     - Notification email at `cleverlink.ai@outlook.com`

2. **Check Supabase function logs**
   ```bash
   supabase functions logs send-emails
   ```

3. **Check Resend dashboard**
   - View sent emails in your Resend dashboard
   - Monitor delivery status and any errors

## Step 5: DNS Configuration (Required)

Add these DNS records to your `cleverlink.uk` domain:

**For email sending (provided by Resend):**
```
Type: TXT
Name: @
Value: [Resend will provide this]

Type: MX
Name: @
Value: [Resend will provide this]
Priority: 10
```

**For receiving emails at cleverlink.ai@outlook.com:**
Make sure your Outlook email is properly configured to receive emails.

## Troubleshooting

### Common Issues

1. **Emails not sending**
   - Check Supabase function logs for errors
   - Verify Resend API key is correctly set
   - Ensure domain is verified in Resend

2. **Domain verification fails**
   - DNS changes can take up to 24 hours to propagate
   - Double-check DNS record values
   - Contact your domain registrar if needed

3. **Function deployment fails**
   - Ensure you're logged into Supabase CLI
   - Check your project reference is correct
   - Verify you have proper permissions

### Checking Logs

1. **Supabase function logs**
   ```bash
   supabase functions logs send-emails --follow
   ```

2. **Browser console**
   - Open browser dev tools
   - Check console for any JavaScript errors during form submission

3. **Resend dashboard**
   - Monitor email delivery status
   - Check for bounce/failure notifications

## Email Template Customization

The email templates are in `supabase/functions/send-emails/index.ts`. You can customize:

- **Styling**: Update the CSS in the `<style>` sections
- **Content**: Modify the email copy and structure
- **Branding**: Adjust colors, fonts, and logos

After making changes, redeploy the function:
```bash
supabase functions deploy send-emails
```

## Production Considerations

1. **Email limits**
   - Resend free tier: 100 emails/day, 3,000/month
   - Upgrade if you expect higher volume

2. **Domain reputation**
   - Use proper SPF, DKIM, and DMARC records
   - Monitor bounce rates and spam complaints

3. **Error handling**
   - Form submission succeeds even if emails fail
   - Monitor logs for email delivery issues

## Security Notes

- API keys are stored as Supabase secrets (encrypted)
- CORS is properly configured for your domain
- Email addresses are validated before sending

## Cost Breakdown

- **Resend**: Free tier (100 emails/day) → $20/month (50,000 emails)
- **Supabase Edge Functions**: Free tier (500K function invocations/month)

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review Supabase and Resend documentation
3. Check community forums or contact support

Your email system is now ready! Users will receive professional confirmation emails, and you'll be notified of every form submission. 