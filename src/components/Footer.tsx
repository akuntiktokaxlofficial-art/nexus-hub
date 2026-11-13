import { Heart } from "lucide-react";
import { navigation } from "@/config/navigation";
import { WEBSITE_NAME, WHATSAPP_URL, siteConfig } from "@/config/site";
import NexusLogo from "./NexusLogo";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-nx-primary/25 bg-black/40 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div>
          <a href="#home" className="inline-flex items-center gap-2" aria-label={WEBSITE_NAME}>
            <NexusLogo className="h-10 w-10" />
            <span className="font-display text-xl font-extrabold italic">NEXUS</span>
          </a>
          <p className="mt-3 text-sm text-nx-muted">
            © {new Date().getFullYear()} {WEBSITE_NAME}. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
          {navigation.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="transition-colors hover:text-nx-neon">
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-nx-neon">
              WhatsApp Channel
            </a>
          </li>
        </ul>

        <p className="flex items-center gap-2 text-sm text-white/85 md:justify-end">
          {siteConfig.footerNote}
          <Heart className="h-4 w-4 fill-nx-neon text-nx-neon" aria-hidden="true" />
        </p>
      </div>
    </footer>
  );
}
