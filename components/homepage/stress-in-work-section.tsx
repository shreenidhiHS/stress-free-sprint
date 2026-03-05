export function StressInWorkSection() {
  return (
    <section
      id="stress-in-work"
      className="border-y border-border bg-chart-4/10 px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 border-l-4 border-chart-4 pl-4 text-2xl font-semibold text-primary sm:text-3xl">
          Stress in IT & corporate work
        </h2>
        <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tight deadlines, constant connectivity, and the pressure to deliver
          can make stress feel like a normal part of the job. When it
          builds up, it doesn&apos;t stay at the desk—it affects your health,
          relationships, and how you show up every day. You&apos;re not alone in feeling it.
        </p>
        <ul className="space-y-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chart-4" aria-hidden />
            <span><strong className="text-foreground">Burnout & exhaustion</strong> — Always-on culture and long hours leave little time to recover, leading to chronic fatigue and reduced motivation.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chart-4" aria-hidden />
            <span><strong className="text-foreground">Hidden stress</strong> — We often ignore or normalize stress until it shows up as sleep issues, irritability, or physical symptoms.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chart-4" aria-hidden />
            <span><strong className="text-foreground">Impact on life</strong> — Stress spills into personal time, affecting relationships, focus, and the ability to pause and recharge.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
