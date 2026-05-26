"use client";

import {
  Briefcase,
  Cake,
  Heart,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cateringTags } from "@/lib/site-config";

import { AnimatedSection } from "./animated-section";
import { SectionLabel } from "./section-label";
import { useSite } from "./site-provider";

const tagIconMap: Record<(typeof cateringTags)[number]["icon"], LucideIcon> = {
  heart: Heart,
  briefcase: Briefcase,
  cake: Cake,
};

export function CateringSection() {
  const { openPhoneDialog } = useSite();

  return (
    <AnimatedSection
      id="traiteur"
      className="relative overflow-hidden bg-forest px-5 py-16 pattern-rings sm:px-6 md:py-24"
      delay={0.2}
    >
      <Image
        src="/image_site_africain.png"
        alt=""
        fill
        className="object-cover opacity-[0.18] mix-blend-luminosity"
        sizes="100vw"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest/92 via-forest/84 to-forest/96"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionLabel className="text-gold/80 [&>span]:bg-gold">
          Service Traiteur
        </SectionLabel>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
          Votre événement, notre{" "}
          <span className="text-gold">passion</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          Mariages, anniversaires, séminaires… Nous créons des buffets
          africains sur mesure pour sublimer vos moments précieux à Toulouse
          et ses environs.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {cateringTags.map((tag) => {
            const Icon = tagIconMap[tag.icon];
            return (
              <li key={tag.label}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-cream backdrop-blur-sm">
                  <Icon className="size-4 text-gold" aria-hidden="true" />
                  {tag.label}
                </span>
              </li>
            );
          })}
        </ul>

        <Button
          type="button"
          onClick={openPhoneDialog}
          className="mt-8 h-12 w-full rounded-2xl bg-gold px-5 text-base font-semibold text-espresso shadow-xl shadow-black/15 hover:bg-gold/90 sm:h-13 sm:max-w-sm"
        >
          Demander un devis
        </Button>
      </div>
    </AnimatedSection>
  );
}
