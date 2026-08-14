"use client";
import React, { useState, useEffect } from "react";

type ContactMethod = "email" | "telegram";

export function ContactContent() {
  const [method, setMethod] = useState<ContactMethod>("email");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    telegramUsername: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          method,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          telegramUsername: formData.telegramUsername,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          telegramUsername: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-auto text-center my-15 ">
        <p className="text-4xl italic">Say hello! My inbox is always open.</p>
      </div>
      <div className="relative max-w-2xl mx-auto rounded-2xl my-10  bg-transparent backdrop-blur-[6px] shadow-[0_2px_30px_rgba(59,130,246,0.2)] p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

        <form onSubmit={handleSubmit} className="relative space-y-4 text-left">
          <div className="flex gap-4 justify-center pb-2">
            <label
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer backdrop-blur-sm transition ${
                method === "email"
                  ? "border-blue-500/10 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  : "border-slate-800/60 bg-slate-900/40"
              }`}
            >
              <input
                type="checkbox"
                checked={method === "email"}
                onChange={() => setMethod("email")}
                className="accent-blue-500/10 w-4 h-4"
              />
              <span className="text-white text-sm font-medium">Via Email</span>
            </label>

            <label
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer backdrop-blur-sm transition ${
                method === "telegram"
                  ? "border-blue-500/10 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  : "border-slate-800/60 bg-slate-900/40"
              }`}
            >
              <input
                type="checkbox"
                checked={method === "telegram"}
                onChange={() => setMethod("telegram")}
                className="accent-blue-500 w-4 h-4"
              />
              <span className="text-white text-sm font-medium">
                Via Telegram
              </span>
            </label>
          </div>

          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition"
            />
          </div>

          {method === "email" ? (
            <>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition"
                />
              </div>
            </>
          ) : (
            <div>
              <input
                type="text"
                name="telegramUsername"
                placeholder="Telegram username (optional)"
                value={formData.telegramUsername}
                onChange={handleChange}
                className="w-full bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition"
              />
            </div>
          )}

          <div>
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              ✓ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              ✕ Error occured. Try again.
            </p>
          )}
        </form>
      </div>
    </>
  );
}
