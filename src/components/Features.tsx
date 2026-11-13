import { features } from "@/config/features";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section id="features" aria-label="Features" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08} className="h-full">
            <article className="glass glass-hover group flex h-full flex-col items-center px-4 py-6 text-center">
              <f.icon
                className="h-9 w-9 text-nx-neon drop-shadow-[0_0_10px_rgba(180,92,255,.9)] transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm leading-snug text-nx-muted">{f.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
