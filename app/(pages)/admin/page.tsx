import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-muted-foreground">
          Overview of your Stress Free Sprint site.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-sm font-medium text-muted-foreground">
            Site status
          </h2>
          <p className="mt-2 text-2xl font-semibold text-foreground">Live</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Your site is published and visible to visitors.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-sm font-medium text-muted-foreground">
            Sections
          </h2>
          <p className="mt-2 text-2xl font-semibold text-foreground">8</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Homepage sections you can edit from Sections.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-sm font-medium text-muted-foreground">
            Last updated
          </h2>
          <p className="mt-2 text-2xl font-semibold text-foreground">Today</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Content is up to date.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">
          Quick actions
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>
            • Go to <Link href="/admin/sections" className="text-primary hover:underline">Sections</Link> to edit homepage content.
          </li>
          <li>
            • Use &quot;View site →&quot; in the top bar to open the public site in a new tab.
          </li>
        </ul>
      </div>
    </div>
  );
}
