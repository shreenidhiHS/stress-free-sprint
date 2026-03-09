import { SERVICES } from "./constants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-y border-border bg-chart-3/10 px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-2xl font-semibold text-primary sm:text-3xl">
          Practical Solutions for Real-World Stress
        </h2>
        <ul className="grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const { title, description } = service;
            const list = "learn" in service ? service.learn : "outcomes" in service ? service.outcomes : service.benefits;
            const listLabel = "learn" in service ? "You will learn" : "outcomes" in service ? "Key outcomes" : "Benefits";
            const borderColor = ["chart-1", "chart-2", "chart-3"][i];
            const textColor = ["chart-1", "chart-2", "chart-3"][i];
            return (
              <li
                key={title}
                className={`rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                  borderColor === "chart-1"
                    ? "border-t-4 border-t-chart-1"
                    : borderColor === "chart-2"
                      ? "border-t-4 border-t-chart-2"
                      : "border-t-4 border-t-chart-3"
                }`}
              >
                <h3
                  className={`mb-3 font-semibold ${
                    textColor === "chart-1"
                      ? "text-chart-1"
                      : textColor === "chart-2"
                        ? "text-chart-2"
                        : "text-chart-3"
                  }`}
                >
                  {title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {listLabel}
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {list.map((item: string) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
