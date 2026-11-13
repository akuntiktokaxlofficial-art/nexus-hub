import { ArrowUpRight } from "lucide-react";
import { aboutHighlights } from "@/config/about";
import { siteConfig } from "@/config/site";
import NexusLogo from "./NexusLogo";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-label="About" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr_0.8fr] lg:items-center">
          {/* Ilustrasi */}
          <div className="glass relative flex h-56 items-center justify-center overflow-hidden sm:h-64 lg:h-full lg:min-h-[220px]" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(139,43,255,.5),transparent_70%)]" />
            <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-1/3 w-full">
              <polygon points="0,120 50,60 110,90 190,20 260,80 330,40 400,90 400,120" fill="#12082a" stroke="#8B2BFF" strokeOpacity=".6" />
            </svg>
            <NexusLogo orbit className="relative h-full max-h-[240px] w-auto animate-float" />
          </div>

          {/* Teks */}
          <div>
            <span className="inline-block rounded-lg border border-nx-neon/60 bg-nx-primary/10 px-3 py-1 text-xs font-semibold text-nx-neon">
              Tentang Kami
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold italic sm:text-4xl">
              {siteConfig.about.title}
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/85">
              {siteConfig.about.description}
            </p>
            <a href="#features" className="btn-outline mt-5 !py-2.5 text-nx-neon">
              Learn More
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Poin ringkas (tanpa statistik) */}
          <ul className="glass divide-y divide-nx-primary/20 px-5">
            {aboutHighlights.map((h) => (
              <li key={h.title} className="flex items-center gap-4 py-4">
                <h.icon className="h-8 w-8 shrink-0 text-nx-neon drop-shadow-[0_0_8px_rgba(180,92,255,.8)]" strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <p className="font-semibold">{h.title}</p>
                  <p className="text-sm text-nx-muted">{h.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
