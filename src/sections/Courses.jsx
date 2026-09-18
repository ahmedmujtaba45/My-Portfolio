import { Award } from "lucide-react";
import { RevealSection } from "../components/ScrollReveal";
import { courses } from "../data/portfolio";

export default function Courses() {
  return (
    <section id="additional-courses" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm tracking-[0.2em] uppercase">05</span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-cream mb-3">
            Additional <span className="italic text-cream/40">Courses</span>
          </h2>
          <div className="section-line" />
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <RevealSection key={course.title} delay={index * 120}>
              <article className="border border-white/10 bg-card p-7 h-full hover:border-accent/30 transition-colors duration-500">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Award size={20} className="text-accent" />
                    <span className="font-mono text-xs text-accent tracking-widest uppercase">
                      Professional Certificate
                    </span>
                  </div>
                  <span className="font-mono text-xs text-cream/40">{course.year}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-cream mb-2">
                  {course.title}
                </h3>
                <p className="font-body text-sm text-accent mb-4">{course.provider}</p>
                <p className="font-body text-sm text-cream/60 leading-relaxed">
                  {course.description}
                </p>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}