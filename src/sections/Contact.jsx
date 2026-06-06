import { useState } from "react";
import { RevealSection } from "../components/ScrollReveal";
import { personal } from "../data/portfolio";
import { Mail, GitFork, Link2, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Link2,
      label: "LinkedIn",
      value: "linkedin.com/in/ahmed-mujtaba-222954369",
      href: personal.linkedin,
    },
    {
      icon: GitFork,
      label: "GitHub",
      value: "github.com/ahmedmujtaba45",
      href: personal.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm tracking-[0.2em] uppercase">06</span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-cream mb-3">
            Let's <span className="italic text-cream/40">Connect</span>
          </h2>
          <div className="section-line" />
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <RevealSection delay={100}>
            <p className="font-body text-lg text-cream/60 leading-relaxed mb-10">
              I'm actively looking for internship and graduate opportunities. Whether
              you have a project in mind, want to collaborate, or just want to say
              hello — my inbox is always open.
            </p>

            <div className="space-y-5">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-accent/40 transition-colors duration-300 shrink-0">
                    <Icon size={16} className="text-accent/70" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-cream/30 tracking-widest uppercase mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-cream/70 hover:text-accent transition-colors duration-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-body text-sm text-cream/70">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* Right — Contact Form */}
          <RevealSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-mono text-xs text-cream/40 tracking-widest uppercase block mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full bg-card border border-white/10 text-cream font-body text-sm px-4 py-3 placeholder:text-cream/20 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="font-mono text-xs text-cream/40 tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-card border border-white/10 text-cream font-body text-sm px-4 py-3 placeholder:text-cream/20 focus:outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-3 bg-accent text-ink font-body font-semibold text-sm py-4 hover:bg-cream transition-colors duration-300"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Opening your email client...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
