"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      reason: formData.get("reason"),
      healthConcerns: formData.get("healthConcerns") || "",
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (_err) { // eslint-disable-line @typescript-eslint/no-unused-vars
      setStatus("error");
      setErrorMessage("Something went wrong. Please try emailing directly.");
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-serif text-4xl text-teal-800 mb-2">Contact Us</h1>
      <p className="text-lg text-black/70 mb-8">
        Have questions? We&#39;d love to hear from you. Fill out the form below or reach us directly.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-teal-800 mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a href="mailto:avvayurveda@gmail.com" className="text-teal-700 hover:underline">
                avvayurveda@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Office Hours</h3>
              <p className="text-black/70">By appointment only</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "success" && (
            <div className="rounded border border-teal-200 bg-teal-50 text-teal-800 p-4">
              Thank you! Your message has been sent. We&#34;ll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="rounded border border-red-200 bg-red-50 text-red-900 p-4">
              {errorMessage || "Something went wrong. Please try emailing directly."}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-black/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-black/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-black/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium mb-1">
              Reason for Contacting <span className="text-red-500">*</span>
            </label>
            <select
              id="reason"
              name="reason"
              required
              className="w-full border border-black/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white"
            >
              <option value="">Please select...</option>
              <option value="Consultation">Ayurvedic Consultation</option>
              <option value="Panchakarma">Panchakarma Treatment</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Follow-up">Follow-up Appointment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="healthConcerns" className="block text-sm font-medium mb-1">
              What health concerns would you like to address in your appointment?
            </label>
            <textarea
              id="healthConcerns"
              name="healthConcerns"
              rows={4}
              placeholder="Please describe any health concerns or issues you'd like to discuss..."
              className="w-full border border-black/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-y"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full border border-black/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-md bg-teal-700 text-white px-6 py-3 hover:bg-teal-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
