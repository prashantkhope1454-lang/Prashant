import { Heart } from "lucide-react";
import { about } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Who I am">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="glass rounded-3xl p-8 sm:p-10">
          <div className="space-y-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-white/5 pt-6">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
              <Heart size={16} className="text-accent-3" /> Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {about.interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {about.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="glass group flex flex-col justify-center rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <p className="text-gradient font-display text-4xl font-bold sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
