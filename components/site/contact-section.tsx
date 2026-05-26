import { Clock, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

import { AnimatedSection } from "./animated-section";
import { Logo } from "./logo";

export function ContactSection() {
  return (
    <>
      <AnimatedSection
        id="contact"
        className="bg-espresso px-6 py-16 text-cream"
        delay={0.25}
      >
        <div className="mx-auto max-w-lg">
          <div className="flex items-center gap-4">
            <Logo size="md" linked={false} />
            <div>
              <p className="font-heading text-xl font-semibold text-white">
                {siteConfig.name}
              </p>
              <p className="text-sm text-cream/70">{siteConfig.tagline}</p>
            </div>
          </div>

          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin
                className="mt-0.5 size-5 shrink-0 text-terracotta"
                aria-hidden="true"
              />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone
                className="mt-0.5 size-5 shrink-0 text-terracotta"
                aria-hidden="true"
              />
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-gold hover:underline"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock
                className="mt-0.5 size-5 shrink-0 text-terracotta"
                aria-hidden="true"
              />
              <ul className="space-y-1 text-cream/80">
                {siteConfig.hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </AnimatedSection>

      <footer className="border-t border-white/10 bg-espresso px-6 py-6 text-center text-xs text-cream/50 safe-pb">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
        </p>
      </footer>
    </>
  );
}
