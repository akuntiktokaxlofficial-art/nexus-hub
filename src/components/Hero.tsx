"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { GetKeyButton, WhatsAppButton } from "./ExternalButtons";
import NexusLogo from "./NexusLogo";

function Crystal({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden="true">
      <polygon points="20,2 38,18 20,46 2,18" fill="rgba(139,43,255,.25)" stroke="#B45CFF" strokeWidth="1.5" />
      <polyline points="2,18 38,18 20,2 20,46" fill="none" stroke="#B45CFF" strokeOpacity=".5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate pt-[68px]">
      {/* Latar: mountain + clouds */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-24 top-0 h-[80%] w-[75%] bg-[radial-gradient(ellipse_at_60%_40%,rgba(139,43,255,.5),transparent_62%)]" />
        <div className="absolute bottom-0 right-0 h-[45%] w-full bg-[radial-gradient(ellipse_at_80%_100%,rgba(139,43,255,.55),transparent_65%)] blur-xl" />
        <svg viewBox="0 0 800 260" preserveAspectRatio="xMaxYMax slice" className="absolute bottom-0 right-0 h-[48%] w-full lg:w-[62%]">
          <defs>
            <linearGradient id="mtn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2a0f55" />
              <stop offset="1" stopColor="#080611" />
            </linearGradient>
          </defs>
          <polygon points="0,260 60,170 130,205 230,110 310,190 400,140 470,210 560,70 650,180 720,120 800,190 800,260" fill="url(#mtn)" />
          <polyline points="0,260 60,170 130,205 230,110 310,190 400,140 470,210 560,70 650,180 720,120 800,190" fill="none" stroke="#8B2BFF" strokeOpacity=".7" strokeWidth="1.5" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-nx-bg to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 pb-10 pt-10 sm:px-6 lg:min-h-[560px] lg:grid-cols-2 lg:pt-4">
        {/* Teks */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            SYSTEM ONLINE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-5xl font-extrabold italic leading-none tracking-tight sm:text-6xl lg:text-7xl"
          >
            NEXUS <span className="text-neon-gradient">HUB</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 font-display text-xl font-semibold italic sm:text-2xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <GetKeyButton className="px-7 py-3.5" />
            <WhatsAppButton className="px-7 py-3.5" />
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative h-[320px] sm:h-[430px] lg:h-[560px]" aria-hidden="true">
          <span className="pointer-events-none absolute left-1/2 top-[6%] -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-extrabold italic leading-none text-transparent [-webkit-text-stroke:1px_rgba(180,92,255,.22)] lg:text-[9rem]">
            NEXUS
          </span>
          <Crystal className="absolute left-[6%] top-[4%] h-14 w-12 animate-drift" />
          <Crystal className="absolute bottom-[26%] left-[14%] h-9 w-8 animate-float" />
          <Crystal className="absolute right-[8%] top-[52%] h-8 w-7 animate-drift" />

          <div className="absolute left-1/2 top-[46%] w-[min(88vw,480px)] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <NexusLogo orbit className="h-auto w-full drop-shadow-[0_0_40px_rgba(139,43,255,.55)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
