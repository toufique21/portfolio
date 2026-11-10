"use client";

import { useState, type FormEvent } from "react";

import { ArrowUpRightIcon } from "@/components/icons";
import { profile, projectTypes } from "@/data/portfolio";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const type = String(data.get("type") ?? "General enquiry");
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Project enquiry — ${type} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject: ${type}\n\n${message}`,
    );

    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-[#05080f]/45 p-5 backdrop-blur-xl sm:p-6"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
        Project brief
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="field"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="type" className="field-label">
            Project type
          </label>
          <select
            id="type"
            name="type"
            required
            defaultValue=""
            className="field appearance-none"
          >
            <option value="" disabled>
              Select a system
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            What are you powering?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Site details, load, timeline — anything useful."
            className="field resize-none"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-5 w-full">
        Send the brief
        <ArrowUpRightIcon />
      </button>

      <p
        aria-live="polite"
        className="mt-3 text-center text-[11px] leading-5 text-white/35"
      >
        {sent
          ? "Opening your email client with the details filled in."
          : "This opens your email app with the details filled in — no data is stored here."}
      </p>
    </form>
  );
}
