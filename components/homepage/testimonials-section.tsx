"use client";

import { useState } from "react";
import { TESTIMONIALS } from "./constants";

const MAX_WORDS = 100;

export function TestimonialsSection() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const overLimit = wordCount > MAX_WORDS;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (overLimit || !text.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="testimonials"
      className="bg-chart-5/10 px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-2xl font-semibold text-primary sm:text-3xl">
          Real Stories from Professionals Who Transformed Their Stress
        </h2>

        <ul className="mb-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, author }, i) => (
            <li
              key={i}
              className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="mb-2 flex gap-0.5 text-chart-5" aria-hidden>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-card-foreground">
                <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground">
                  &ldquo;{quote}&rdquo;
                </p>
                <cite className="not-italic text-primary font-medium">
                  {author}
                </cite>
              </blockquote>
            </li>
          ))}
        </ul>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
          <h3 className="mb-4 font-semibold text-foreground">
            Share your experience
          </h3>
          {submitted ? (
            <p className="text-muted-foreground">
              Thank you for sharing your story. We appreciate your feedback.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="testimonial-rating" className="mb-2 block text-sm font-medium text-foreground">
                  Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="text-2xl text-muted-foreground transition-colors hover:text-chart-5 focus:outline-none focus:ring-2 focus:ring-ring"
                      aria-label={`${star} star${star > 1 ? "s" : ""}`}
                    >
                      {star <= rating ? "★" : "☆"}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="testimonial-text" className="mb-2 block text-sm font-medium text-foreground">
                  Your story (max {MAX_WORDS} words)
                </label>
                <textarea
                  id="testimonial-text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  maxLength={600}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Share how Stress-Free Sprint helped you..."
                />
                <p className={`mt-1 text-xs ${overLimit ? "text-destructive" : "text-muted-foreground"}`}>
                  {wordCount} / {MAX_WORDS} words
                </p>
              </div>
              <button
                type="submit"
                disabled={overLimit || !text.trim()}
                className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
