import { RevealSection } from "../components/ScrollReveal";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm tracking-[0.2em] uppercase">05</span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-cream mb-3">
            Achievements <span className="italic text-cream/40">&</span> Awards
          </h2>
          <div className="section-line" />
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <RevealSection key={item.title} delay={i * 150}>
              <div className="relative border border-white/10 bg-card p-8 h-full group hover:border-accent/30 transition-all duration-500 overflow-hidden">
                {/* Year tag */}
                <div className="absolute top-0 right-0 bg-accent text-ink font-mono text-xs font-bold px-3 py-1">
                  {item.year}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                  {item.icon}
                </div>

                {/* Number */}
                <div className="font-mono text-xs text-cream/20 tracking-widest mb-3">
                  #{String(i + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-cream mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-cream/50 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-px bg-accent/0 group-hover:bg-accent/40 transition-all duration-500 w-full" />
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Quote / tagline */}
        <RevealSection delay={450}>
          <div className="mt-16 text-center border-t border-white/10 pt-12">
            <p className="font-display text-2xl lg:text-3xl italic text-cream/30 max-w-2xl mx-auto leading-relaxed">
              "Driven by curiosity. Grounded in engineering. Committed to impact."
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
