import Image from "next/image";
import { INSTAGRAM_URL } from "./constants";

export function BannerHero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden border-b border-border sm:min-h-[90vh]"
    >
      <Image
        src="/banner.png"
        alt=""
        fill
        className="object-cover blur-md"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/50" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 sm:py-28 md:py-32 lg:py-40">
        <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Break Free From Work Stress — Without Quitting Your Career
        </h1>
        <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both mt-6 text-lg text-muted-foreground delay-150 sm:text-xl md:mt-8 md:text-2xl">
          Practical stress management strategies designed for busy professionals, created by a Senior QA with 10+ years in the corporate world.
        </p>
        <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both mx-auto mt-4 max-w-2xl text-base text-muted-foreground delay-200 sm:text-lg">
          I understand the pressure of deadlines, releases, late nights and constant expectations. After a decade in the tech industry and deep training in stress management and spiritual healing, I now help professionals regain clarity, balance, and energy — without sacrificing their ambitions.
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both mt-12 flex flex-col items-center justify-center gap-4 delay-300 sm:flex-row md:mt-16 md:gap-6">
          <a
            href="#contact"
            className="inline-flex h-14 min-w-[180px] items-center justify-center rounded-lg bg-primary px-10 font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background md:h-16 md:px-12"
          >
            Get in touch
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 min-w-[180px] items-center justify-center rounded-lg border-2 border-primary bg-background px-10 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background md:h-16 md:px-12"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
