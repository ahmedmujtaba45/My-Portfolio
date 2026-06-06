import { RevealSection } from "../components/ScrollReveal";
import { about } from "../data/portfolio";
import { GraduationCap, Target, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm tracking-[0.2em] uppercase">02</span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-cream mb-3">
            About <span className="italic text-cream/40">Me</span>
          </h2>
          <div className="section-line" />
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Background */}
          <RevealSection delay={100}>
            <p className="font-body text-base lg:text-lg text-cream/70 leading-relaxed mb-8">
              {about.background}
            </p>

            {/* Career Goals */}
            <div className="border border-white/10 p-6 mb-8 relative group hover:border-accent/40 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-8 h-px bg-accent" />
              <div className="flex items-start gap-4">
                <Target size={20} className="text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-body font-semibold text-cream mb-2 tracking-wide">
                    Career Goals
                  </h3>
                  <p className="font-body text-sm text-cream/60 leading-relaxed">
                    {about.goals}
                  </p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-accent" />
                <h3 className="font-body font-semibold text-cream text-sm tracking-widest uppercase">
                  Interests
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="font-mono text-xs text-accent/80 border border-accent/30 px-3 py-1.5 hover:bg-accent/10 transition-colors duration-300 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Education */}
          <RevealSection delay={200}>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={18} className="text-accent" />
              <h3 className="font-body font-semibold text-cream text-sm tracking-widest uppercase">
                Education
              </h3>
            </div>

            {about.education.map((edu, i) => (
              <div
                key={i}
                className="relative pl-6 border-l border-accent/40 pb-8 last:pb-0"
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent" />
                <div className="bg-card border border-white/10 p-6">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase">
                    {edu.period}
                  </span>
                  <h4 className="font-display text-xl font-semibold text-cream mt-2 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="font-body text-sm text-cream/60 mb-2">
                    {edu.institution}
                  </p>
                  <p className="font-mono text-xs text-cream/30">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "4+", label: "Projects" },
                { value: "6+", label: "Technologies" },
                { value: "IEEE", label: "VP Member" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center border border-white/10 p-4 hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="font-display text-3xl font-bold text-accent mb-1">
                    {value}
                  </div>
                  <div className="font-mono text-xs text-cream/40 tracking-widest uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
