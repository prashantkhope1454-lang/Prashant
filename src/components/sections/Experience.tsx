import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { education, experience } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Education"
      title="My journey so far"
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-accent via-accent-3 to-transparent sm:left-1/2" />

        <ol className="space-y-10 sm:space-y-12">
          {experience.map((job, i) => {
            const right = i % 2 === 1;
            return (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span className="absolute top-6 left-4 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-accent/50 bg-bg text-accent-2 shadow-lg shadow-accent/30 sm:left-1/2">
                  <Briefcase size={16} />
                </span>

                <Reveal
                  y={30}
                  className={
                    right
                      ? "ml-11 sm:ml-[calc(50%+2.5rem)]"
                      : "ml-11 sm:mr-[calc(50%+2.5rem)] sm:ml-0"
                  }
                >
                  <div className="glass group rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-6">
                    <span className="inline-block rounded-full bg-accent-2/10 px-3 py-1 text-xs font-semibold text-accent-2">
                      {job.period}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-fg">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                      <span className="font-medium text-accent-fg">{job.company}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </span>
                    </p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-3" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
        {education.map((edu) => (
          <Reveal
            key={edu.degree}
            className="glass relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:border-accent/40 sm:p-8"
          >
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-white">
                <GraduationCap size={26} />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-2">
                  Education
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-fg sm:text-2xl">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-body">{edu.institution}</p>
                <p className="text-sm text-subtle">{edu.university}</p>
              </div>
              <span className="text-sm font-medium text-muted">{edu.period}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
