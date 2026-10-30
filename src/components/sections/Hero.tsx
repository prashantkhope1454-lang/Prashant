"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { about, experience, hero, siteConfig, socials } from "@/data/portfolio";
import Button from "@/components/ui/Button";
import SocialIcon from "@/components/ui/SocialIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setTitleIndex((i) => (i + 1) % hero.rotatingTitles.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-16 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-gray-300 sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-lg text-gray-400"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl"
          >
            <span className="text-gradient">{hero.headline}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-5 h-9 overflow-hidden font-display text-xl font-semibold text-gray-200 sm:text-3xl"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="block"
              >
                {hero.rotatingTitles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 lg:justify-start"
          >
            <MapPin size={16} /> {siteConfig.location}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={6}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Button href="#contact">
              Let&apos;s Talk
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={siteConfig.resumeUrl} variant="ghost" download>
              <Download size={16} /> Download CV
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={7}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="glass grid h-11 w-11 place-items-center rounded-full text-gray-300 transition hover:-translate-y-1 hover:border-accent/60 hover:text-white"
              >
                <SocialIcon icon={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-full lg:max-w-md"
        >
          {/* Spinning gradient ring */}
          <div className="animate-spin-slow absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,var(--color-accent),var(--color-accent-3),var(--color-accent-2),var(--color-accent))] opacity-80 blur-sm" />
          <div className="absolute inset-1 rounded-full bg-ink-950" />
          <div className="absolute inset-3 overflow-hidden rounded-full">
            <Image
              src={siteConfig.photo}
              alt={`Portrait of ${siteConfig.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 20rem"
              unoptimized={siteConfig.photo.endsWith(".svg")}
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-4 bottom-10 rounded-2xl px-4 py-3 text-left shadow-xl sm:-left-8"
          >
            <p className="font-display text-2xl font-bold text-white">{about.stats[0].value}</p>
            <p className="text-xs text-gray-400">{about.stats[0].label}</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-2 top-10 rounded-2xl px-4 py-3 text-left shadow-xl sm:-right-6"
          >
            <p className="font-display text-sm font-bold text-white">{experience[0].role}</p>
            <p className="text-xs text-gray-400">{experience[0].company}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
