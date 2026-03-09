"use client";

import { useState } from "react";
import { EMAIL, CONTACT_PHONE, INSTAGRAM_URL } from "./constants";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-border bg-primary/10 px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-xl">
        <h2 className="mb-4 text-center text-2xl font-semibold text-primary sm:text-3xl">
          Let&apos;s Begin Your Stress-Free Journey Today
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          If you&apos;re feeling overwhelmed, exhausted, or stuck in constant pressure, you&apos;re not alone. Reach out today and take the first step toward a more balanced and fulfilling life.
        </p>

        {submitted ? (
          <p className="rounded-lg border border-border bg-card p-6 text-center text-muted-foreground">
            Thank you for reaching out. We&apos;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:w-auto sm:px-8"
            >
              Submit
            </button>
          </form>
        )}

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-10 sm:flex-row sm:justify-center">
          {CONTACT_PHONE ? (
            <a
              href={`tel:${(CONTACT_PHONE as string).replace(/\D/g, "")}`}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Call: {CONTACT_PHONE}
            </a>
          ) : (
            <span className="text-sm text-muted-foreground">
              Call: My Airtel number
            </span>
          )}
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Contact: {EMAIL}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Let&apos;s connect
          </a>
        </div>
      </div>
    </section>
  );
}
