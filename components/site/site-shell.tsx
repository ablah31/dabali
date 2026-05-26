"use client";

import type { ReactNode } from "react";

import { Header } from "./header";
import { PhoneDialog } from "./phone-dialog";
import { SiteProvider } from "./site-provider";
import { StickyPhoneBar } from "./sticky-phone-bar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SiteProvider>
      <Header />
      <main className="pb-24 md:pb-0">{children}</main>
      <StickyPhoneBar />
      <PhoneDialog />
    </SiteProvider>
  );
}
