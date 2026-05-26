"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  id,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(el, {
        y: 32,
        opacity: 0,
        duration: 0.75,
        delay,
        ease: "power2.out",
      });
    },
    { scope: ref, dependencies: [delay] },
  );

  return (
    <section ref={ref} id={id} className={cn(className)}>
      {children}
    </section>
  );
}
