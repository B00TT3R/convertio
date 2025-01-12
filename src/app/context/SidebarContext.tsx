"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
  show: () => void;
  hide: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(true);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, show, hide }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  return context;
};
