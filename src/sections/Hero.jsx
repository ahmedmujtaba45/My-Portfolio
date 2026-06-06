import { useEffect, useState } from "react";
import { Download, ArrowDown, GitFork, Link2, Mail } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#C8A96E 1px, transparent 1px),
            linear-gradient(90deg, #C8A96E 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text Content */}
          <div>
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className={`font-display text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-cream mb-4 transition-all duration-700 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Ahmed
              <br />
              <span className="italic text-accent">Mujtaba</span>
            </h1>

            {/* Title */}
            <p
              className={`font-body text-xl text-cream/50 font-medium tracking-wide mb-6 transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {personal.title} &nbsp;·&nbsp; CUST, Islamabad
            </p>

            {/* Intro */}
            <p
              className={`font-body text-base lg:text-lg text-cream/70 leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {personal.intro}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap items-center gap-4 mb-10 transition-all duration-700 delay-[400ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 bg-accent text-ink px-7 py-3.5 font-body font-semibold text-sm tracking-wide rounded-none hover:bg-cream transition-colors duration-300"
              >
                Get in Touch
                <Mail size={16} />
              </a>
              <a
                href={personal.resume}
                download
                className="group inline-flex items-center gap-2 border border-cream/20 text-cream/80 px-7 py-3.5 font-body font-medium text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center gap-5 transition-all duration-700 delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { href: personal.github, Icon: GitFork, label: "GitHub" },
                { href: personal.linkedin, Icon: Link2, label: "LinkedIn" },
                { href: `mailto:${personal.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/40 hover:text-accent transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Photo placeholder */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-accent/20 rounded-none" />
              <div className="absolute -inset-2 border border-accent/10 rounded-none" />

              {/* Photo container */}
              <div className="relative w-72 h-80 bg-surface overflow-hidden">
                {/* Replace with your actual photo */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-card">
                  <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <span className="font-display text-2xl text-accent font-bold">AM</span>
                  </div>
                  <p className="font-mono text-xs text-cream/30 tracking-widest">
                    your-photo.jpg
                  </p>
                  <p className="font-body text-xs text-cream/20 text-center px-8">
                    Replace this with your professional photo in{"/public/photo.jpg"}
                    <code className="text-accent/60">/public/photo.jpg</code>
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-accent/60" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-accent/60" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-accent/60" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-accent/60" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 bg-accent text-ink px-4 py-2">
                <p className="font-mono text-xs font-bold tracking-widest">BSE231092</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-mono text-xs text-cream/30 tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="text-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
