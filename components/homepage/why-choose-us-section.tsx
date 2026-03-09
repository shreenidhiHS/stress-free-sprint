import { WHY_CHOOSE_US } from "./constants";

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2 className="mb-10 text-center text-2xl font-semibold text-primary sm:text-3xl">
        Why Professionals Trust Stress-Free Sprint
      </h2>
      <ul className="grid gap-6 sm:grid-cols-2">
        {WHY_CHOOSE_US.map(({ title, description }, i) => (
          <li
            key={title}
            className="rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
