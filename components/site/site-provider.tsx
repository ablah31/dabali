"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SiteContextValue = {
  phoneDialogOpen: boolean;
  setPhoneDialogOpen: (open: boolean) => void;
  openPhoneDialog: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [phoneDialogOpen, setPhoneDialogOpen] = useState(false);

  const openPhoneDialog = useCallback(() => {
    setPhoneDialogOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      phoneDialogOpen,
      setPhoneDialogOpen,
      openPhoneDialog,
    }),
    [phoneDialogOpen, openPhoneDialog],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return context;
}
