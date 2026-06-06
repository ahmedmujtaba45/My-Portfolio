import { useState } from "react";
import { RevealSection } from "../components/ScrollReveal";
import { projects } from "../data/portfolio";
import { GitFork, ExternalLink, Terminal, Globe, Cpu, BookOpen } from "lucide-react";

const badgeIcons = {
  FYP: Terminal,
  "Web App": Globe,
  IoT: Cpu,
  Academic: BookOpen,
};

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm tracking-[0.2em] uppercase">03</span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-cream mb-3">
            Selected <span className="italic text-cream/40">Work</span>
          </h2>
          <div className="section-line" />
        </RevealSection>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const BadgeIcon = badgeIcons[project.badge] || Terminal;
            const isHovered = hovered === project.id;

            return (
              <RevealSection key={project.id} delay={i * 100}>
                <div
                  className={`relative group border border-white/10 bg-card overflow-hidden cursor-default transition-all duration-500 hover:border-white/20`}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Gradient top bar */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${project.color} transition-all duration-500`}
                    style={{
                      background: `linear-gradient(to right, ${project.accent}60, transparent)`,
                      height: isHovered ? "3px" : "1px",
                    }}
                  />

                  <div className="p-7">
                    {/* Badge + number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <BadgeIcon size={14} style={{ color: project.accent }} />
                        <span
                          className="font-mono text-xs font-medium tracking-widest uppercase"
                          style={{ color: project.accent }}
                        >
                          {project.badge}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-cream/20">
                        #{String(project.id).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-cream mb-4 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm text-cream/60 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 bg-white/5 text-cream/50 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-cream/50 hover:text-cream transition-colors duration-300"
                        >
                          <GitFork size={16} />
                          <span className="font-body">GitHub</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm font-body text-cream/20">
                          <GitFork size={16} />
                          Private
                        </span>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 ml-auto"
                          style={{ color: project.accent + "99" }}
                        >
                          <span className="font-body">Live Demo</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute bottom-0 right-0 w-16 h-16 opacity-10"
                    style={{
                      background: `radial-gradient(circle at bottom right, ${project.accent}, transparent)`,
                    }}
                  />
                </div>
              </RevealSection>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <RevealSection delay={400}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/ahmedmujtaba45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 text-cream/60 px-8 py-4 font-body text-sm font-medium hover:border-accent/60 hover:text-accent transition-all duration-300"
            >
              <GitFork size={18} />
              View all projects on GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
