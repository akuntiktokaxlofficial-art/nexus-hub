import { CalendarDays } from "lucide-react";
import { changelog } from "@/config/changelog";
import Reveal from "./Reveal";

export default function Updates() {
  return (
    <section id="updates" aria-label="Latest Updates" className="py-6">
      <Reveal className="h-full">
        <div className="glass h-full p-5 sm:p-6">
          <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
            <span className="accent-bar" aria-hidden="true" />
            Latest Updates
          </h2>

          <ol className="mt-5 space-y-4">
            {changelog.map((u, i) => (
              <li
                key={u.version}
                className={`flex flex-col gap-4 sm:flex-row ${i > 0 ? "border-t border-nx-primary/20 pt-4" : ""}`}
              >
                <div
                  className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-nx-primary/40 bg-[radial-gradient(ellipse_at_30%_40%,rgba(139,43,255,.6),#0c0720_75%)] font-display font-extrabold italic ${
                    i === 0 ? "h-24 text-3xl sm:w-48" : "h-14 text-xl sm:w-48"
                  }`}
                >
                  {u.version}
                  {i === 0 && (
                    <span className="absolute right-2 top-2 rounded-md bg-nx-primary px-2 py-0.5 text-[10px] font-bold not-italic tracking-wide shadow-glow-sm">
                      NEW
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold">
                    {u.version} – {u.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-white/80">{u.description}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-nx-muted">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {u.date}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
