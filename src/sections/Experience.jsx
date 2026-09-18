import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import { RevealSection } from "../components/ScrollReveal";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm tracking-[0.2em] uppercase">03</span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-cream mb-3">
            Work <span className="italic text-cream/40">Experience</span>
          </h2>
          <div className="section-line" />
        </RevealSection>

        <div className="space-y-5">
          {experience.map((item, index) => (
            <RevealSection key={`${item.role}-${item.company}`} delay={index * 120}>
              <article className="relative border border-white/10 bg-card p-6 lg:p-8 hover:border-accent/30 transition-colors duration-500">
                <div className="absolute left-0 top-0 h-full w-px bg-accent/60" />
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <BriefcaseBusiness size={20} className="text-accent mt-1 shrink-0" />
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-cream mb-1">
                        {item.role}
                      </h3>
                      <p className="font-body text-sm text-accent">{item.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-cream/40 tracking-wide lg:pt-1">
                    <CalendarDays size={14} className="text-accent/70" />
                    {item.period}
                  </div>
                </div>
                <p className="font-body text-sm text-cream/60 leading-relaxed mt-6 lg:ml-9 max-w-4xl">
                  {item.description}
                </p>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}