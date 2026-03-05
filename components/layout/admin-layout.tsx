"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SIDEBAR_LINKS = [
  { label: "Dashboard", href: "/admin" },
  { label: "Sections", href: "/admin/sections" },
] as const;

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-border bg-card">
        <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground hover:bg-muted md:hidden"
              aria-label="Toggle sidebar"
              onClick={() => setSidebarOpen((o) => !o)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link
              href="/admin"
              className="text-lg font-semibold text-foreground"
            >
              Stress Free Sprint CMS
            </Link>
            <span className="hidden rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground sm:inline">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              View site →
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar - desktop */}
        <aside className="hidden w-56 shrink-0 border-r border-border bg-card md:block">
          <nav className="flex flex-col gap-0.5 p-3" aria-label="Admin navigation">
            {SIDEBAR_LINKS.map(({ label, href }) => {
              const isActive =
                href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Sidebar - mobile overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-foreground/20 md:hidden"
              aria-hidden
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed inset-y-0 left-0 z-50 w-56 border-r border-border bg-card pt-14 md:hidden">
              <nav className="flex flex-col gap-0.5 p-3" aria-label="Admin navigation">
                {SIDEBAR_LINKS.map(({ label, href }) => {
                  const isActive =
                    href === "/admin"
                      ? pathname === "/admin"
                      : pathname.startsWith(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setSidebarOpen(false)}
                      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </aside>
          </>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
