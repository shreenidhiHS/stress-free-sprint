export function PauseSection() {
  return (
    <section
      className="border-b border-border bg-chart-3/5 px-6 py-16 sm:py-20 md:py-24"
      aria-label="Pause moment"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-2xl font-medium tracking-wide text-primary/90 sm:text-3xl md:text-4xl">
          Pause. Breathe. Reset.
        </p>
        <div className="mt-8 flex justify-center gap-2" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-chart-3/60" />
          <span className="h-2 w-2 rounded-full bg-chart-3/80" />
          <span className="h-2 w-2 rounded-full bg-chart-3" />
        </div>
      </div>
    </section>
  );
}
