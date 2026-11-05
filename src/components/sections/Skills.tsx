"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Wrench } from "lucide-react";
import { skills, type SkillGroup } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const icons: Record<SkillGroup["icon"], React.ElementType> = {
  briefcase: Briefcase,
  users: Users,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I bring to the table"
      subtitle="A blend of people skills, commercial sense and operational discipline."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, gi) => {
          const Icon = icons[group.icon];
          return (
            <Reveal
              key={group.title}
              delay={gi * 0.1}
              className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 sm:p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent-2/20 text-fg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-xl font-semibold text-fg">{group.title}</h3>
              </div>

              <ul className="space-y-5">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-2 flex justify-between gap-3 text-sm">
                      <span className="text-body">{skill.name}</span>
                      <span className="text-subtle">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-fg/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-accent via-accent-3 to-accent-2"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
