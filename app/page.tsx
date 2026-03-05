import {
  Navbar,
  BannerHero,
  PauseSection,
  AboutSection,
  StressInWorkSection,
  WhyStressReliefSection,
  OneSmallStepSection,
  AffirmationSection,
  ServicesSection,
  TestimonialsSection,
  ContactSection,
  Footer,
  AnimateOnScroll,
} from "@/components/homepage";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main>
        <BannerHero />
        <AnimateOnScroll>
          <PauseSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <AboutSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <StressInWorkSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <WhyStressReliefSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <OneSmallStepSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <AffirmationSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ServicesSection />
        </AnimateOnScroll>
        {/* <AnimateOnScroll>
          <TestimonialsSection />
        </AnimateOnScroll> */}
        <AnimateOnScroll>
          <ContactSection />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
}
