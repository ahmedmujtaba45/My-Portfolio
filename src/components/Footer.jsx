import { personal } from "../data/portfolio";
import { GitFork, Link2, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <p className="font-display text-xl font-semibold text-cream">
            AM<span className="text-accent">.</span>
          </p>
          <p className="font-mono text-xs text-cream/30 mt-1">
            Ahmed Mujtaba · BSE231092 · CUST
          </p>
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-cream/30 text-center">
          © {new Date().getFullYear()} Ahmed Mujtaba · Built with React + Tailwind CSS
        </p>

        {/* Social + Back to top */}
        <div className="flex items-center gap-4">
          {[
            { href: personal.github, Icon: GitFork },
            { href: personal.linkedin, Icon: Link2 },
            { href: `mailto:${personal.email}`, Icon: Mail },
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/30 hover:text-accent transition-colors duration-300"
            >
              <Icon size={16} />
            </a>
          ))}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-2 w-8 h-8 border border-white/10 flex items-center justify-center hover:border-accent/40 hover:text-accent text-cream/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
