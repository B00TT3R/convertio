"use client";
import { atom, useAtom } from "jotai";

const sidebarAtom = atom(false);

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useAtom(sidebarAtom);

  const toggle = () => setIsOpen((prev) => !prev);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  return { isOpen, toggle, show, hide };
};
