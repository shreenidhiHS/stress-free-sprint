import Image from "next/image";
import Link from "next/link";
import { EMAIL, INSTAGRAM_URL, NAV_LINKS } from "./constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary/15 px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="#home" className="shrink-0" aria-label="Stress Free Sprint home">
          <Image
            src="/logo2_t.png"
            alt="Stress Free Sprint"
            width={180}
            height={46}
            className="h-8 w-auto object-contain opacity-90"
          />
        </Link>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:items-end">
          <a
            href={`mailto:${EMAIL}`}
            className="transition-colors hover:text-chart-2"
          >
            {EMAIL}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-chart-2"
          >
            Instagram
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-muted-foreground">
        © {year} Stress Free Sprint. All rights reserved.
      </p>
    </footer>
  );
}
