import { RevealSection } from "../components/ScrollReveal";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm tracking-[0.2em] uppercase">04</span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-cream mb-3">
            Tech <span className="italic text-cream/40">Stack</span>
          </h2>
          <div className="section-line" />
        </RevealSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <RevealSection key={group.category} delay={i * 100}>
              <div className="border border-white/10 bg-card p-6 h-full group hover:border-accent/30 transition-all duration-500">
                {/* Icon + Category */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                  <span className="font-mono text-lg text-accent">{group.icon}</span>
                  <h3 className="font-body font-semibold text-cream text-sm tracking-wide">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Items */}
                <ul className="space-y-2.5">
                  {group.items.map((skill, j) => (
                    <li key={skill} className="flex items-center gap-3">
                      <div
                        className="h-px bg-accent/40 transition-all duration-500 group-hover:bg-accent/70"
                        style={{ width: `${30 + ((j * 17 + i * 11) % 40)}%` }}
                      />
                      <span className="font-body text-sm text-cream/70">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Proficiency visual */}
        <RevealSection delay={400}>
          <div className="mt-12 border border-white/10 bg-card p-8">
            <h3 className="font-body font-semibold text-cream text-sm tracking-widest uppercase mb-6">
              Core Proficiencies
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { skill: "HTML/CSS", pct: 95 },
                { skill: "React / JavaScript", pct: 85 },
                { skill: "Python", pct: 50 },
                { skill: "Java", pct: 78 },
                { skill: "AWS / Azure", pct: 65 },
                { skill: "C# / PHP", pct: 75 },
                { skill: "MySQL", pct: 80 },
              ].map(({ skill, pct }) => (
                <div key={skill}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body text-sm text-cream/70">{skill}</span>
                    <span className="font-mono text-xs text-accent">{pct}%</span>
                  </div>
                  <div className="h-px bg-white/10 relative overflow-hidden">
                    <div
                      className="h-full bg-accent/60 transition-all duration-1000"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
