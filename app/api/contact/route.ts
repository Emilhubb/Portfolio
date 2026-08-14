import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { method, name, email, subject, telegramUsername, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (method === "email") {
      const resendApiKey = process.env.RESEND_API_KEY;

      if (!resendApiKey) {
        console.error("RESEND_API_KEY is missing");
        return NextResponse.json(
          { error: "Server configuration error" },
          { status: 500 },
        );
      }

      const resend = new Resend(resendApiKey);

      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "emil.kazimli93@gmail.com",
        replyTo: email,
        subject: subject || `Yeni mesaj - ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>New Portfolio Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Topic:</strong> ${subject || "Qeyd olunmayıb"}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 502 },
        );
      }

      return NextResponse.json({ success: true });
    } else {
      const token = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;

      if (!token || !chatId) {
        console.error("Telegram env variables are missing");
        return NextResponse.json(
          { error: "Server configuration error" },
          { status: 500 },
        );
      }

      const text = `
📩 *Yeni Portfolio Mesajı*

👤 *Ad:* ${name}
${telegramUsername ? `\n💬 *Telegram username:* ${telegramUsername}` : ""}
💬 *Mesaj:* 

${message}
  `;

      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
          }),
        },
      );

      if (!response.ok) {
        const errData = await response.text();
        console.error("Telegram API error:", errData);
        return NextResponse.json(
          { error: "Failed to send message" },
          { status: 502 },
        );
      }

      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
