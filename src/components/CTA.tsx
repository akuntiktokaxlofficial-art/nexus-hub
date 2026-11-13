import { Crown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GetKeyButton } from "./ExternalButtons";
import Reveal from "./Reveal";

function Rings({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 300 120" className={className} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <ellipse
          key={i}
          cx="150"
          cy="60"
          rx={140 - i * 22}
          ry={42 - i * 8}
          transform="rotate(-12 150 60)"
          fill="none"
          stroke="#B45CFF"
          strokeOpacity={0.7 - i * 0.2}
          strokeWidth={2.5 - i * 0.6}
        />
      ))}
    </svg>
  );
}

export default function CTA() {
  return (
    <section aria-label="Call to action" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-nx-neon/70 bg-gradient-to-r from-nx-panel via-[#1a0b3a] to-nx-primary/40 p-6 shadow-glow sm:p-8">
          <Rings className="pointer-events-none absolute -right-10 top-1/2 hidden h-48 w-[26rem] -translate-y-1/2 animate-drift sm:block" />
          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <Crown className="hidden h-14 w-14 shrink-0 text-nx-neon drop-shadow-[0_0_14px_rgba(180,92,255,.9)] md:block" strokeWidth={1.6} aria-hidden="true" />
            <div className="md:flex-1">
              <h2 className="font-display text-2xl font-extrabold italic sm:text-3xl">
                {siteConfig.cta.title}
              </h2>
              <p className="mt-1 text-white/85">{siteConfig.cta.description}</p>
            </div>
            <GetKeyButton className="w-full px-10 py-4 text-base sm:w-auto" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
