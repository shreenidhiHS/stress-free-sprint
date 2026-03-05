import Link from "next/link";

export function OneSmallStepSection() {
  return (
    <section
      className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-20"
      aria-labelledby="one-small-step-heading"
    >
      <h2 id="one-small-step-heading" className="sr-only">
        One small step
      </h2>
      <div className="rounded-2xl border border-border bg-muted/50 p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8">
        <p className="text-lg font-medium text-foreground sm:text-xl">
          One small step
        </p>
        <p className="mt-3 text-muted-foreground sm:text-lg">
          Before you open your inbox tomorrow, take three slow breaths.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          No app, no sign-up—just a moment for you.
        </p>
        <Link
          href="#contact"
          className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Ready for more? Start here →
        </Link>
      </div>
    </section>
  );
}
