import { NextResponse } from "next/server";
import { Resend } from "resend";
import DOMPurify from "isomorphic-dompurify";

function escapeTelegramHTML(str: string = ""): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeEmailHTML(str: string = ""): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { method, name, email, subject, telegramUsername, message } = body;

    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    const cleanName = DOMPurify.sanitize(name.trim());
    const cleanMessage = DOMPurify.sanitize(message.trim());
    const cleanSubject = subject ? DOMPurify.sanitize(subject.trim()) : "";
    const cleanTelegramUser = telegramUsername
      ? DOMPurify.sanitize(telegramUsername.trim())
      : "";
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
      const formattedMessage = escapeEmailHTML(cleanMessage).replace(
        /\n/g,
        "<br />",
      );
      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "emil.kazimli93@gmail.com",
        replyTo: email,
        subject: subject || `Yeni mesaj - ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <h2>New Portfolio Message</h2>
            <p><strong>Name:</strong> ${escapeEmailHTML(cleanName)}</p>
            <p><strong>Email:</strong> ${escapeEmailHTML(email)}</p>
            <p><strong>Topic:</strong> ${
              cleanSubject ? escapeEmailHTML(cleanSubject) : "Qeyd olunmayıb"
            }</p>
            <hr style="border: none; border-top: 1px solid #ccc;" />
            <p><strong>Message:</strong></p>
            <p>${formattedMessage}</p>
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
      const safeName = escapeTelegramHTML(cleanName);
      const safeUsername = cleanTelegramUser
        ? escapeTelegramHTML(cleanTelegramUser)
        : "";
      const safeMessage = escapeTelegramHTML(cleanMessage);

      let text = `📩 <b>Yeni Portfolio Mesajı</b>\n\n`;
      text += `👤 <b>Ad:</b> ${safeName}\n`;
      if (safeUsername) {
        text += `💬 <b>Telegram:</b> @${safeUsername.replace(/^@/, "")}\n`;
      }
      text += `\n💬 <b>Mesaj:</b>\n${safeMessage}`;

      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
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
