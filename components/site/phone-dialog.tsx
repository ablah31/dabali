"use client";

import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { siteConfig } from "@/lib/site-config";

import { useSite } from "./site-provider";

export function PhoneDialog() {
  const { phoneDialogOpen, setPhoneDialogOpen } = useSite();

  return (
    <Dialog open={phoneDialogOpen} onOpenChange={setPhoneDialogOpen}>
      <DialogContent className="max-w-sm gap-6 rounded-3xl border-border p-6 sm:p-8">
        <DialogHeader className="items-center gap-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-terracotta/10">
            <Phone className="size-7 text-terracotta" aria-hidden="true" />
          </div>
          <DialogTitle className="font-heading text-2xl font-semibold text-espresso">
            Passez votre commande
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            par téléphone
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-2xl border border-border bg-cream px-6 py-5 text-center">
          <p className="font-heading text-3xl font-bold tracking-wide text-terracotta tabular-nums">
            {siteConfig.phone}
          </p>
        </div>

        <Button
          nativeButton={false}
          render={
            <a
              href={siteConfig.phoneHref}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-terracotta text-base font-semibold text-white hover:bg-terracotta/90"
            />
          }
        >
          <Phone className="size-5" aria-hidden="true" />
          Appeler maintenant
        </Button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          {siteConfig.hours.join(" · ")}
        </p>
      </DialogContent>
    </Dialog>
  );
}
