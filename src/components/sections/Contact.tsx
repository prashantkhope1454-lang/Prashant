import { Mail, MapPin, Phone } from "lucide-react";
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

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      subtitle="Have a role, an event or a partnership in mind? I'd love to hear from you."
    >
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {contactItems.map(({ icon: Icon, label, value, href }, i) => {
            const content = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent-2/20 text-white transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-gray-500">
                    {label}
                  </span>
                  <span className="block text-gray-200 [overflow-wrap:anywhere]">{value}</span>
                </span>
              </>
            );
            const cls =
              "glass group flex h-full items-center gap-4 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40";
            return (
              <Reveal key={label} delay={i * 0.08}>
                {href ? (
                  <a href={href} className={cls}>
                    {content}
                  </a>
                ) : (
                  <div className={cls}>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="glass rounded-3xl p-6 text-center">
          <p className="mb-4 text-sm text-gray-400">Find me on</p>
          <div className="flex flex-wrap justify-center gap-3">
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
        </Reveal>
      </div>
    </Section>
  );
}
