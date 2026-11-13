"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { WEBSITE_NAME } from "@/config/site";
import { GetKeyButton } from "./ExternalButtons";
import NexusLogo from "./NexusLogo";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navigation.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-nx-primary/25 bg-nx-bg/70 backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Navigasi utama">
        <a href="#home" className="flex items-center gap-2" aria-label={WEBSITE_NAME}>
          <NexusLogo className="h-10 w-10" />
          <span className="font-display text-xl font-extrabold italic tracking-wide">NEXUS</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`block py-5 text-sm font-medium transition-colors ${
                    isActive ? "text-nx-neon" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-nx-neon shadow-glow-sm"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <GetKeyButton label="Get Key" className="!px-4 !py-2" />
          <button
            type="button"
            className="rounded-lg border border-nx-primary/40 p-2 md:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-nx-primary/20 px-4 pb-3 md:hidden"
          >
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base ${
                    active === item.id ? "bg-nx-primary/15 text-nx-neon" : "text-white/80"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
