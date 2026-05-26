"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { Phone, UtensilsCrossed } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

import { useSite } from "./site-provider";

gsap.registerPlugin(useGSAP);

const HERO_IMAGE = "/image_site_restau_africain.png";

export function HeroSection() {
  const { openPhoneDialog } = useSite();
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = contentRef.current;
      if (!el) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.from(el.children, {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    { scope: contentRef },
  );

  return (
    <section
      id="accueil"
      className="relative min-h-[88vh] overflow-hidden"
    >
      <Image
        src={HERO_IMAGE}
        alt="Assiette africaine généreuse avec riz, poulet grillé, plantains et sauces"
        fill
        priority
        className="object-cover object-[62%_center]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/55 to-espresso/95"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(232,177,67,0.22),transparent_32%),linear-gradient(90deg,rgba(26,22,20,0.82),rgba(26,22,20,0.18)_62%,rgba(26,22,20,0.78))]"
        aria-hidden="true"
      />

      <div
        ref={contentRef}
        className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-28 pt-24 sm:px-6 md:pb-24 lg:justify-center"
      >
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          Restaurant &amp; Traiteur
        </p>

        <h1 className="max-w-xl font-heading text-5xl font-bold leading-[1.05] text-balance text-white sm:text-6xl lg:text-7xl">
          Dabali{" "}
          <span className="text-terracotta">d&apos;Afrique</span>
        </h1>

        <p className="mt-4 max-w-sm font-heading text-lg italic text-gold/95 sm:text-xl">
          {siteConfig.tagline}
        </p>

        <div className="mt-8 grid w-full gap-3 sm:max-w-md sm:grid-cols-2">
          <Button
            type="button"
            onClick={openPhoneDialog}
            className="h-12 w-full rounded-2xl bg-terracotta px-5 text-base font-semibold text-white shadow-xl shadow-terracotta/20 hover:bg-terracotta/90 sm:h-13"
          >
            <Phone className="size-5" aria-hidden="true" />
            Commander
          </Button>
          <Button
            nativeButton={false}
            render={
              <Link
                href="#carte"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-white/80 bg-white/5 px-5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 sm:h-13"
              />
            }
          >
            <UtensilsCrossed className="size-5" aria-hidden="true" />
            Voir la Carte
          </Button>
        </div>
      </div>
    </section>
  );
}
