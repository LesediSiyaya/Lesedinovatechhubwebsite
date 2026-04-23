import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-e72b99af/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-e72b99af/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, interest, message } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      return c.json({ error: "Missing required fields: name, email, and interest are required" }, 400);
    }

    // Create submission record
    const timestamp = new Date().toISOString();
    const submissionId = `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const submission = {
      id: submissionId,
      name,
      email,
      phone: phone || '',
      interest,
      message: message || '',
      timestamp,
      status: 'new'
    };

    // Save to KV store
    await kv.set(submissionId, submission);

    // Send email notification via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (!resendApiKey) {
      console.log('RESEND_API_KEY not configured - skipping email notification');
      return c.json({
        success: true,
        message: 'Form submitted successfully (email notification not configured)',
        submissionId
      });
    }

    try {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Lesedi NovaTech Hub <onboarding@resend.dev>',
          to: ['siyayales@gmail.com'],
          subject: `New ${interest} Inquiry - ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Submission ID:</strong> ${submissionId}</p>
            <p><strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString()}</p>
            <hr />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Interest:</strong> ${interest}</p>
            <p><strong>Message:</strong></p>
            <p>${message || 'No message provided'}</p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        console.error(`Email sending failed with status ${emailResponse.status}: ${errorData}`);
        return c.json({
          success: true,
          message: 'Form submitted successfully but email notification failed',
          submissionId,
          emailError: errorData
        });
      }

      const emailData = await emailResponse.json();
      console.log('Email sent successfully:', emailData);

      return c.json({
        success: true,
        message: 'Form submitted successfully and email notification sent',
        submissionId
      });

    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      return c.json({
        success: true,
        message: 'Form submitted successfully but email notification failed',
        submissionId,
        emailError: emailError.message
      });
    }

  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return c.json({
      error: 'Failed to process form submission',
      details: error.message
    }, 500);
  }
});

// Get all submissions (optional - for viewing submissions)
app.get("/make-server-e72b99af/submissions", async (c) => {
  try {
    const submissions = await kv.getByPrefix('submission_');
    return c.json({ submissions });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return c.json({ error: 'Failed to fetch submissions', details: error.message }, 500);
  }
});

Deno.serve(app.fetch);