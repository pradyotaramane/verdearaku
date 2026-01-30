import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface EnquiryRequest {
  type: "contact" | "bot";
  name: string;
  email: string;
  phone?: string;
  company?: string;
  category: string;
  message: string;
  pageUrl?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const data: EnquiryRequest = await req.json();

    if (!data.name || !data.email || !data.message || !data.category) {
      throw new Error("Missing required fields");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid email format");
    }

    const isBot = data.type === "bot";
    const subject = isBot
      ? `Bot Enquiry - ${data.category} - ${data.name}`
      : `Website Enquiry - ${data.category} - ${data.name}`;

    const emailBody = `
      <h2>${isBot ? "Bot" : "Website"} Enquiry from Verde Araku</h2>
      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      <h3>Enquiry Details</h3>
      <p><strong>Category:</strong> ${data.category}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
      ${data.pageUrl ? `<p><strong>Page URL:</strong> ${data.pageUrl}</p>` : ""}
    `;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "Verde Araku <noreply@verdearaku.com>",
        to: ["support@verdearaku.com"],
        subject,
        html: emailBody,
      });
      console.log("Email sent successfully");
    } else {
      console.log("RESEND_API_KEY not configured. Enquiry logged:", data.name, data.category);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Enquiry received" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
