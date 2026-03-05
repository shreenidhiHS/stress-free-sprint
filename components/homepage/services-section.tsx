import { SERVICES } from "./constants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-y border-border bg-chart-3/10 px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-2xl font-semibold text-primary sm:text-3xl">
          What I offer
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description }, i) => {
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
                  className={`mb-2 font-semibold ${
                    textColor === "chart-1"
                      ? "text-chart-1"
                      : textColor === "chart-2"
                        ? "text-chart-2"
                        : "text-chart-3"
                  }`}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
