import {
  Navbar,
  BannerHero,
  PauseSection,
  AboutSection,
  WhoIWorkWithSection,
  ServicesSection,
  WhyChooseUsSection,
  BenefitsSection,
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
          <WhoIWorkWithSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ServicesSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <WhyChooseUsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <BenefitsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <TestimonialsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ContactSection />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
}
