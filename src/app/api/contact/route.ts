import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, healthConcerns, message } = body;

    if (!name || !email || !reason || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Formspree integration - sends email to avvayurveda@gmail.com
    const formspreeResponse = await fetch("https://formspree.io/f/xbddjrjk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Not provided",
        reason,
        healthConcerns: healthConcerns || "Not provided",
        message,
        _subject: `New Contact Form: ${reason} - from ${name}`,
      }),
    });

    if (!formspreeResponse.ok) {
      throw new Error("Formspree submission failed");
    }


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
