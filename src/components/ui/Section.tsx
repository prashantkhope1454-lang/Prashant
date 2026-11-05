import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent-2">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold text-fg sm:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
