"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig, socials } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SocialIcon from "@/components/ui/SocialIcon";

const contactItems = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, label: "Location", value: siteConfig.location },
];

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-accent focus:bg-white/[0.05] focus:ring-2 focus:ring-accent/30";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend needed: opens the visitor's email app with the message pre-filled.
  // To send from the site instead, POST the form data to a service like Formspree or Resend.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(
      `Hi ${siteConfig.name.split(" ")[0]},\n\n${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      subtitle="Have a role, an event or a partnership in mind? I'd love to hear from you."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-4">
          {contactItems.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent-2/20 text-white transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-gray-500">
                    {label}
                  </span>
                  <span className="block truncate text-gray-200">{value}</span>
                </span>
              </>
            );
            const cls =
              "glass group flex items-center gap-4 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40";
            return href ? (
              <a key={label} href={href} className={cls}>
                {content}
              </a>
            ) : (
              <div key={label} className={cls}>
                {content}
              </div>
            );
          })}

          <div className="glass rounded-3xl p-5">
            <p className="mb-4 text-sm text-gray-400">Find me on</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-accent hover:bg-accent/10 hover:text-white"
                >
                  <SocialIcon icon={s.icon} className="h-4 w-4" /> {s.name}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass space-y-5 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-gray-300">Name</span>
                <input name="name" required placeholder="Your name" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-gray-300">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm text-gray-300">Subject</span>
              <input name="subject" placeholder="What's this about?" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-gray-300">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a little about your project or role..."
                className={`${inputClass} resize-none`}
              />
            </label>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-3 px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40 sm:w-auto"
            >
              Send Message
              <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            {sent && (
              <p className="text-sm text-emerald-400" role="status">
                Your email app should open with the message ready to send. Thanks!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
