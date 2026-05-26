import {
  PartyPopper,
  ShoppingBag,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/site-config";

import { AnimatedSection } from "./animated-section";
import { SectionLabel } from "./section-label";

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  utensils: Utensils,
  "shopping-bag": ShoppingBag,
  "party-popper": PartyPopper,
};

export function ServicesSection() {
  return (
    <AnimatedSection className="relative overflow-hidden px-5 py-16 sm:px-6 md:py-24" delay={0.1}>
      <div
        className="absolute inset-x-0 top-20 h-64 bg-[radial-gradient(circle_at_center,rgba(209,91,47,0.12),transparent_62%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>Nos Services</SectionLabel>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold text-balance text-espresso sm:text-4xl lg:text-5xl">
              Trois façons de savourer{" "}
              <span className="text-terracotta">l&apos;Afrique</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Une même cuisine généreuse, adaptée à votre moment : une table
              conviviale, un plat à emporter ou un buffet complet pour vos
              invités.
            </p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-espresso/10 bg-espresso shadow-2xl shadow-espresso/15">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4]">
                <Image
                  src="/image_site_africain.png"
                  alt="Épices, riz, mangue et textiles africains autour d'une carte de l'Afrique"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Saveurs &amp; épices
                  </p>
                  <p className="mt-1 max-w-xs font-heading text-2xl font-semibold leading-tight">
                    Des assiettes pensées pour être partagées.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-3 hidden size-24 rounded-full bg-gold/90 blur-2xl sm:block"
              aria-hidden="true"
            />
          </div>
        </div>

        <ul className="relative z-10 mt-6 grid gap-4 sm:grid-cols-3 lg:-mt-10 lg:px-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <li key={service.id}>
                <Card className="h-full border-border/80 bg-white/95 shadow-lg shadow-espresso/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col gap-4 pt-0">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-forest/10 sm:size-14">
                      <Icon
                        className="size-6 text-forest sm:size-7"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                        0{index + 1}
                      </p>
                      <h3 className="font-heading text-xl font-semibold text-espresso">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </AnimatedSection>
  );
}
