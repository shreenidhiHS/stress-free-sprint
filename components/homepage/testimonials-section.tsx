import { TESTIMONIALS } from "./constants";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-chart-5/10 px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-2xl font-semibold text-primary sm:text-3xl">
          Testimonials
        </h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, author }, i) => (
            <li
              key={i}
              className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <blockquote className="text-card-foreground">
                <span
                  className={`mb-2 block text-2xl font-bold ${
                    i === 0 ? "text-chart-4" : i === 1 ? "text-chart-5" : "text-chart-2"
                  }`}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground">
                  {quote}
                </p>
                <cite className="not-italic text-primary font-medium">
                  {author}
                </cite>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
