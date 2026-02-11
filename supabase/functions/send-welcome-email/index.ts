import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, fullName } = await req.json();

    if (!email || !fullName) {
      return new Response(
        JSON.stringify({ error: 'email and fullName are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const firstName = fullName.trim().split(' ')[0] || fullName;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'NextBlock <info@nextblock.finance>',
        to: [email],
        subject: 'Thank you for your interest in NextBlock',
        html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1A1F2E;">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="font-size: 24px; color: #1B3A6B; margin: 0;">NextBlock</h1>
            </div>
            <p style="font-size: 16px; line-height: 1.6;">Dear ${firstName},</p>
            <p style="font-size: 16px; line-height: 1.6;">
              Thank you for joining the NextBlock waitlist. We're building the universal marketplace for insurance-linked assets, and we're thrilled to have you on board.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              You'll be among the first to receive exclusive updates on our progress, early access opportunities, and key milestones as we move toward launch.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              Stay tuned — exciting things are coming.
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-top: 32px;">
              Best regards,<br/>
              <strong>The NextBlock Team</strong>
            </p>
            <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 32px 0;" />
            <p style="font-size: 12px; color: #8A8A8A; text-align: center;">
              NextBlock &mdash; The Universal Marketplace for Insurance-Linked Assets<br/>
              <a href="https://nextblock.finance" style="color: #1B3A6B;">nextblock.finance</a>
            </p>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend error:', JSON.stringify(data));
      return new Response(
        JSON.stringify({ error: data.message || 'Failed to send email' }),
        { status: res.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
