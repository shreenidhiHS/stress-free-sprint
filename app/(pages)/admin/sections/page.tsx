export default function AdminSectionsPage() {
  const sections = [
    { id: "hero", name: "Hero / Banner", description: "Headline, tagline, and CTA buttons." },
    { id: "pause", name: "Pause", description: "Pause. Breathe. Reset. moment." },
    { id: "about", name: "About", description: "About Me intro and bio." },
    { id: "stress", name: "Stress in work", description: "Stress in IT & corporate work content." },
    { id: "why", name: "Why stress relief", description: "Why stress relief matters and benefit cards." },
    { id: "step", name: "One small step", description: "Single actionable tip card." },
    { id: "affirmation", name: "Affirmation", description: "Quote / affirmation block." },
    { id: "services", name: "Services", description: "What I offer — service cards." },
    { id: "testimonials", name: "Testimonials", description: "Client testimonials." },
    { id: "contact", name: "Contact", description: "Let's connect and CTAs." },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Sections
        </h1>
        <p className="mt-1 text-muted-foreground">
          Manage homepage sections. Edit, reorder, or toggle visibility. (CMS coming soon.)
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <li
            key={section.id}
            className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="font-medium text-foreground">{section.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {section.description}
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                Edit (coming soon)
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
