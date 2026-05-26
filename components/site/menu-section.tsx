"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  menuCategories,
  menuItems,
  type MenuCategory,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

import { AnimatedSection } from "./animated-section";
import { SectionLabel } from "./section-label";

gsap.registerPlugin(useGSAP);

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("plats");
  const listRef = useRef<HTMLUListElement>(null);

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  useGSAP(
    () => {
      const list = listRef.current;
      if (!list) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.from(list.children, {
        y: 16,
        opacity: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power2.out",
      });
    },
    { scope: listRef, dependencies: [activeCategory], revertOnUpdate: true },
  );

  return (
    <AnimatedSection id="carte" className="bg-white px-5 py-16 sm:px-6 md:py-24" delay={0.15}>
      <div className="mx-auto max-w-6xl">
        <SectionLabel>La Carte</SectionLabel>
        <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold text-balance text-espresso sm:text-4xl lg:text-5xl">
          Découvrez nos{" "}
          <span className="text-terracotta">spécialités</span>
        </h2>

        <div
          className="mt-6 -mx-1 flex snap-x gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Catégories du menu"
        >
          {menuCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <Button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "h-11 min-w-24 shrink-0 snap-start rounded-full px-5 text-sm font-semibold transition-all sm:min-w-28",
                  isActive
                    ? "bg-terracotta text-white shadow-md hover:bg-terracotta/90"
                    : "border border-border bg-white text-muted-foreground hover:bg-muted",
                )}
              >
                {category.label}
              </Button>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-cream shadow-sm lg:sticky lg:top-24">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src="/plat_africain_mix.png"
                alt="Grand plateau africain avec riz, plantains, patates douces, viande grillée et sauces"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  À partager
                </p>
                <p className="mt-1 font-heading text-2xl font-semibold sm:text-3xl">
                  Plateaux généreux, sauces maison
                </p>
              </div>
            </div>
          </div>

          <div>
            <ul ref={listRef} className="flex flex-col gap-3" role="tabpanel">
              {filteredItems.map((item) => (
                <li key={item.id}>
                  <Card className="border-border/60 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                    <CardContent className="flex items-start justify-between gap-3 pt-0 sm:gap-5">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-heading text-lg font-semibold text-espresso sm:text-xl">
                            {item.name}
                          </h3>
                          {item.popular ? (
                            <Badge
                              variant="outline"
                              className="border-terracotta/30 bg-terracotta/10 text-[0.65rem] font-bold uppercase tracking-wider text-terracotta"
                            >
                              Populaire
                            </Badge>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <p className="shrink-0 font-heading text-xl font-bold text-terracotta sm:text-2xl">
                        {item.price}
                      </p>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>

            <Button
              nativeButton={false}
              render={
                <a
                  href="#contact"
                  className="mt-6 flex h-12 w-full items-center justify-center rounded-2xl bg-forest px-5 text-base font-semibold text-white shadow-xl shadow-forest/15 hover:bg-forest/90 sm:h-13"
                />
              }
            >
              Voir toute la carte
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
