import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./ExternalButtons";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Community() {
  return (
    <section id="community" aria-label="Community" className="py-6">
      <Reveal className="h-full">
        <div className="glass relative h-full overflow-hidden p-5 sm:p-6">
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
            <span className="accent-bar" aria-hidden="true" />
            {siteConfig.community.title}
          </h2>

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="max-w-sm">
              <p className="text-[15px] leading-relaxed text-white/85">
                {siteConfig.community.description}
              </p>
              <WhatsAppButton label="JOIN WHATSAPP CHANNEL" className="mt-5 !py-2.5 text-xs sm:text-sm" />
            </div>

            <div className="relative mx-auto h-32 w-40 shrink-0 sm:mx-0 sm:h-36 sm:w-44" aria-hidden="true">
              <div className="absolute inset-0 rounded-full bg-nx-primary/30 blur-2xl" />
              <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full overflow-visible">
                <ellipse cx="100" cy="60" rx="96" ry="28" transform="rotate(-18 100 60)" fill="none" stroke="#B45CFF" strokeWidth="2.5" strokeOpacity=".8" />
              </svg>
              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-float items-center justify-center rounded-3xl border border-white/30 bg-gradient-to-br from-nx-neon to-nx-primary shadow-glow">
                <WhatsAppIcon className="h-11 w-11 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
