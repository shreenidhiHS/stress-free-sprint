import { WHO_I_WORK_WITH } from "./constants";

export function WhoIWorkWithSection() {
  return (
    <section
      id="who-i-work-with"
      className="border-y border-border bg-muted/30 px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-2xl font-semibold text-primary sm:text-3xl">
          This Is For You If
        </h2>
        <p className="mb-8 text-muted-foreground">
          You are in the right place when you recognise yourself here:
        </p>
        <ul className="mx-auto flex max-w-lg flex-col items-center space-y-3 text-center">
          {WHO_I_WORK_WITH.map((item) => (
            <li
              key={item}
              className="flex items-center justify-center gap-2 text-foreground"
            >
              <span className="text-chart-2" aria-hidden>•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
