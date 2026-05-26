import { CateringSection } from "@/components/site/catering-section";
import { ContactSection } from "@/components/site/contact-section";
import { HeroSection } from "@/components/site/hero-section";
import { MenuSection } from "@/components/site/menu-section";
import { ServicesSection } from "@/components/site/services-section";
import { SiteShell } from "@/components/site/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ServicesSection />
      <MenuSection />
      <CateringSection />
      <ContactSection />
    </SiteShell>
  );
}
