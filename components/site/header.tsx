"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import { useSite } from "./site-provider";

gsap.registerPlugin(useGSAP);

export function Header() {
  const { openPhoneDialog } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      if (!menuOpen || !navRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.from(navRef.current.children, {
        y: 24,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { dependencies: [menuOpen], scope: navRef },
  );

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header className="safe-pt sticky top-0 z-40 border-b border-border/60 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Logo />

          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={openPhoneDialog}
              className="h-10 rounded-xl bg-terracotta px-3 text-sm font-semibold text-white shadow-sm shadow-terracotta/20 hover:bg-terracotta/90 sm:px-5"
            >
              Réserver
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setMenuOpen(true)}
              className="size-10 rounded-xl border-espresso/20 bg-espresso text-white shadow-sm hover:bg-espresso/90 hover:text-white"
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="inset-0 h-full w-full max-w-none border-none bg-espresso p-0 sm:max-w-none"
        >
          <SheetTitle className="sr-only">Menu de navigation</SheetTitle>

          <div className="flex h-full flex-col safe-pt safe-pb">
            <div className="flex items-center justify-between px-6 py-4">
              <Logo />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(false)}
                className="size-10 rounded-full bg-white/10 text-cream hover:bg-white/20 hover:text-cream"
                aria-label="Fermer le menu"
              >
                <X className="size-5" aria-hidden="true" />
              </Button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center px-6">
              <ul ref={navRef} className="flex flex-col items-center gap-8">
                {siteConfig.nav.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className={cn(
                        "font-heading text-4xl font-semibold transition-colors",
                        index === 0 ? "text-gold" : "text-cream hover:text-gold",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-2 px-6 pb-8 text-center text-sm text-cream/70">
              <p className="flex items-center justify-center gap-2">
                <Phone className="size-4 text-terracotta" aria-hidden="true" />
                {siteConfig.phone}
              </p>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
