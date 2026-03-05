import { EMAIL, INSTAGRAM_URL } from "./constants";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-primary/10 px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-2xl font-semibold text-primary sm:text-3xl">
          Let&apos;s connect
        </h2>
        <p className="mb-8 text-muted-foreground">
          No pressure—just a friendly conversation. Reach out when you&apos;re
          ready to start your stress-free sprint.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-12 flex-1 items-center justify-center rounded-lg bg-primary px-8 font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:flex-initial"
          >
            More Info
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 flex-1 items-center justify-center rounded-lg border-2 border-chart-2 bg-background px-8 font-medium text-chart-2 transition-colors hover:bg-chart-2 hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:flex-initial"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
