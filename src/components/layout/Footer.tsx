import { ArrowUp } from "lucide-react";
import { siteConfig, socials } from "@/data/portfolio";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-fg/10 hover:text-fg"
            >
              <SocialIcon icon={s.icon} className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-full bg-fg/5 text-body transition hover:-translate-y-1 hover:bg-accent hover:text-white"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
