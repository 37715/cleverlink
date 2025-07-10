import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { formData } = await req.json()
    
    // Get environment variables
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    if (!RESEND_API_KEY) {
      throw new Error('Missing Resend API key')
    }

    // Send confirmation email to user
    const confirmationEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'CleverLink <hello@cleverlink.uk>',
        to: [formData.email],
        subject: 'thank you for your interest in cleverlink',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - CleverLink</title>
            <style>
              body { 
                font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
                font-weight: 250;
                line-height: 1.6; 
                color: #333; 
                margin: 0; 
                padding: 0; 
                background-color: #ffffff;
              }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                padding: 40px 20px; 
                background-color: #ffffff;
              }
              .header { 
                text-align: center; 
                margin-bottom: 40px; 
                border-bottom: 1px solid #f0f0f0;
                padding-bottom: 30px;
              }
              .logo { 
                font-size: 28px; 
                font-weight: 300; 
                color: #000; 
                text-decoration: none;
                letter-spacing: 2px;
              }
              .content { 
                margin-bottom: 40px; 
                font-size: 16px;
                font-weight: 250;
              }
              .highlight { 
                background-color: #f8f9fa; 
                padding: 20px; 
                border-left: 3px solid #000;
                margin: 25px 0;
              }
              .footer { 
                text-align: center; 
                font-size: 14px; 
                color: #666; 
                border-top: 1px solid #f0f0f0;
                padding-top: 30px;
                font-weight: 250;
              }
              .footer a {
                color: #000;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">cleverlink</div>
              </div>
              
              <div class="content">
                <p>hello ${formData.name},</p>
                
                <p>thank you for your interest in transforming your business with ai solutions. we've received your inquiry and are excited about the possibility of working together.</p>
                
                <div class="highlight">
                  <strong>what happens next?</strong><br>
                  our team will review your submission and get back to you within 24 hours with a personalized proposal tailored to your specific needs.
                </div>
                
                <p>in the meantime, feel free to reach out if you have any immediate questions at <a href="mailto:cleverlink.ai@outlook.com">cleverlink.ai@outlook.com</a>.</p>
                
                <p>we look forward to helping you unlock the potential of artificial intelligence for your business.</p>
                
                <p style="margin-top: 30px;">
                  best regards,<br>
                  the cleverlink team
                </p>
              </div>
              
              <div class="footer">
                <p>cleverlink ai agency | hampshire, united kingdom</p>
                <p><a href="https://cleverlink.uk">cleverlink.uk</a> | <a href="mailto:cleverlink.ai@outlook.com">cleverlink.ai@outlook.com</a></p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    })

    // Send notification email to CleverLink
    const notificationEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'CleverLink Notifications <notifications@cleverlink.uk>',
        to: ['cleverlink.ai@outlook.com'],
        subject: `new form submission from ${formData.name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Form Submission - CleverLink</title>
            <style>
              body { 
                font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
                font-weight: 250;
                line-height: 1.6; 
                color: #333; 
                margin: 0; 
                padding: 0; 
                background-color: #ffffff;
              }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                padding: 40px 20px; 
                background-color: #ffffff;
              }
              .header { 
                text-align: center; 
                margin-bottom: 40px; 
                border-bottom: 1px solid #f0f0f0;
                padding-bottom: 30px;
              }
              .logo { 
                font-size: 28px; 
                font-weight: 300; 
                color: #000; 
                text-decoration: none;
                letter-spacing: 2px;
              }
              .content { 
                margin-bottom: 40px; 
                font-size: 16px;
                font-weight: 250;
              }
              .form-data { 
                background-color: #f8f9fa; 
                padding: 25px; 
                border-left: 3px solid #000;
                margin: 25px 0;
              }
              .form-field {
                margin-bottom: 15px;
                padding-bottom: 15px;
                border-bottom: 1px solid #e9ecef;
              }
              .form-field:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
              }
              .field-label {
                font-weight: 400;
                color: #000;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
              }
              .field-value {
                font-weight: 250;
                color: #333;
              }
              .footer { 
                text-align: center; 
                font-size: 14px; 
                color: #666; 
                border-top: 1px solid #f0f0f0;
                padding-top: 30px;
                font-weight: 250;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">cleverlink</div>
              </div>
              
              <div class="content">
                <p><strong>new form submission received</strong></p>
                
                <p>you have received a new inquiry through the cleverlink website. here are the details:</p>
                
                <div class="form-data">
                  <div class="form-field">
                    <div class="field-label">name</div>
                    <div class="field-value">${formData.name}</div>
                  </div>
                  
                  <div class="form-field">
                    <div class="field-label">email</div>
                    <div class="field-value">${formData.email}</div>
                  </div>
                  
                  <div class="form-field">
                    <div class="field-label">selected service</div>
                    <div class="field-value">${formData.selectedService}</div>
                  </div>
                  
                  ${formData.companyName ? `
                  <div class="form-field">
                    <div class="field-label">company</div>
                    <div class="field-value">${formData.companyName}</div>
                  </div>
                  ` : ''}
                  
                  <div class="form-field">
                    <div class="field-label">problems to solve</div>
                    <div class="field-value">${formData.problems}</div>
                  </div>
                  
                  ${formData.additionalInfo ? `
                  <div class="form-field">
                    <div class="field-label">additional information</div>
                    <div class="field-value">${formData.additionalInfo}</div>
                  </div>
                  ` : ''}
                </div>
                
                <p><strong>next steps:</strong> respond to ${formData.name} within 24 hours with a personalized proposal.</p>
              </div>
              
              <div class="footer">
                <p>cleverlink admin notification</p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    })

    const confirmationResult = await confirmationEmailResponse.json()
    const notificationResult = await notificationEmailResponse.json()

    return new Response(
      JSON.stringify({ 
        success: true, 
        confirmationEmail: confirmationResult,
        notificationEmail: notificationResult
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  } catch (error) {
    console.error('Error sending emails:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
}) 