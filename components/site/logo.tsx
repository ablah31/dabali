import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { className: "size-10", px: 40 },
  md: { className: "size-14", px: 56 },
  lg: { className: "size-20", px: 80 },
} as const;

type LogoProps = {
  size?: keyof typeof sizes;
  className?: string;
  linked?: boolean;
};

export function Logo({ size = "sm", className, linked = true }: LogoProps) {
  const { className: sizeClass, px } = sizes[size];

  const image = (
    <Image
      src="/logo_dabali_afrique.png"
      alt={siteConfig.name}
      width={px}
      height={px}
      className={cn("shrink-0 rounded-full object-cover", sizeClass, className)}
      priority={size === "sm"}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link
      href="#accueil"
      className="inline-flex shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
    >
      {image}
    </Link>
  );
}
