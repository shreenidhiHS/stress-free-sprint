import { BENEFITS } from "./constants";

export function BenefitsSection() {
  return (
    <section className="border-y border-border bg-chart-5/10 px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-8 text-2xl font-semibold text-primary sm:text-3xl">
          What You Can Achieve
        </h2>
        <p className="mb-8 text-muted-foreground">
          After working together, you may experience:
        </p>
        <ul className="mx-auto flex max-w-md flex-col items-center space-y-3 text-center">
          {BENEFITS.map((item) => (
            <li key={item} className="flex items-center justify-center gap-3 text-foreground">
              <span className="text-chart-3" aria-hidden>✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
