"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { inquiryTypes, profile } from "@/lib/data";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const inquiryType = String(data.get("inquiryType") || "").trim();
    const details = String(data.get("message") || "").trim();

    if (!name || !email || !inquiryType) {
      setState("error");
      setMessage("Please complete your name, email, and inquiry type.");
      return;
    }

    const subject = `Website inquiry: ${inquiryType} from ${name}`;
    const body = [
      "Matthew,",
      "",
      "A visitor submitted the contact form on your personal website.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Inquiry type: ${inquiryType}`,
      "",
      "Details:",
      details || "No additional details provided.",
      "",
      "Compliance note: The form instructs visitors not to include confidential, proprietary, ITAR-controlled, CUI, export-controlled, customer-sensitive, or company-sensitive information."
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setState("success");
    setMessage("Your email client should open with the message prefilled to Matthew. Review it, then press send.");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="border border-white/10 bg-white/[0.04] p-6 shadow-panel md:p-8">
      <div className="mb-7">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">Contact form</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-frost">
          Start a technical conversation.
        </h2>
        <p className="mt-3 leading-7 text-silver/66">
          Use this for advisory, consulting, speaking, recruiting, board, collaboration, or media inquiries.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-frost">
          Name
          <input name="name" required autoComplete="name" className="border border-white/10 bg-void px-4 py-3 text-frost" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-frost">
          Email
          <input type="email" name="email" required autoComplete="email" className="border border-white/10 bg-void px-4 py-3 text-frost" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-frost md:col-span-2">
          Inquiry type
          <select name="inquiryType" required defaultValue="" className="border border-white/10 bg-void px-4 py-3 text-frost">
            <option value="" disabled>Select inquiry type</option>
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-semibold text-frost">
        Context
        <textarea
          name="message"
          rows={6}
          className="border border-white/10 bg-void px-4 py-3 text-frost"
        />
      </label>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-signal px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-void transition hover:bg-silver disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : "Contact Matthew"}
      </button>

      <p className="mt-4 text-xs leading-6 text-silver/46">
        This opens your email client with the form details prefilled. Do not send confidential, proprietary, ITAR-controlled, CUI, export-controlled, customer-sensitive, or company-sensitive information.
      </p>

      {message ? (
        <p role="status" className="mt-4 border border-signal/25 bg-signal/10 px-4 py-3 text-sm text-silver">
          {message}
        </p>
      ) : null}
    </form>
  );
}
