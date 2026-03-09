export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2 className="mb-8 border-l-4 border-chart-2 pl-4 text-2xl font-semibold text-primary sm:text-3xl">
        From Corporate Burnout to Stress-Free Living
      </h2>

      <div className="space-y-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <div>
          <h3 className="mb-3 font-semibold text-foreground">My story</h3>
          <p>
            For more than a decade, I worked in the demanding world of software testing as a Senior QA professional. I experienced firsthand the long hours, tight deadlines, and constant pressure that many professionals face every day.
          </p>
          <p className="mt-3">
            Over time, I realized that stress was not just affecting productivity — it was impacting health, relationships, and overall happiness. This realization led me on a deeper journey to understand stress, mindset, and emotional wellbeing.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-foreground">Credentials</h3>
          <p className="mb-3">
            To help people more effectively, I earned certifications including:
          </p>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-primary">
            Certificates received
          </p>
          <div className="mb-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border-2 border-chart-2 bg-chart-2/10 px-4 py-2 text-sm font-semibold text-chart-2">
              Certified Stress Management Strategist
            </span>
            <span className="inline-flex items-center rounded-full border-2 border-chart-3 bg-chart-3/10 px-4 py-2 text-sm font-semibold text-chart-3">
              Diploma in Spiritual Healing
            </span>
          </div>
          <p className="mt-3">
            By combining real corporate experience with professional stress management techniques, I help individuals create practical, sustainable change in their lives. I am also focused on spreading awareness about hidden stress and promoting digital well-being — so you can stay in control, not overwhelmed.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 text-card-foreground">
          <h3 className="mb-2 font-semibold text-primary">My mission</h3>
          <p className="text-muted-foreground">
            Help professionals thrive in their careers without sacrificing their peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
