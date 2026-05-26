"use client";

import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useSite } from "./site-provider";

export function StickyPhoneBar() {
  const { openPhoneDialog } = useSite();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/20 bg-forest/95 px-4 py-3 shadow-2xl shadow-espresso/30 backdrop-blur-md safe-pb md:hidden">
      <Button
        type="button"
        onClick={openPhoneDialog}
        className="mx-auto h-12 w-full max-w-md rounded-2xl bg-terracotta px-5 text-base font-semibold text-white shadow-xl shadow-black/15 hover:bg-terracotta/90"
      >
        <Phone className="size-5" aria-hidden="true" />
        Commander par téléphone
      </Button>
    </div>
  );
}
