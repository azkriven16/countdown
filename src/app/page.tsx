"use client";

import { fadeInUp } from "@/animation/fade-in-up";
import { Countdown } from "@/components/countdown";
import { Button } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Highlighter } from "@/components/ui/highlighter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Particles } from "@/components/ui/particles";
import { TextEffect } from "@/components/ui/text-effect";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground relative">
      <HeroHighlight className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative mt-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-foreground hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-2"
          )}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300">
            ✨ Newest Product Launch
          </div>
        </motion.div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-center leading-tight sm:leading-tight md:leading-snug lg:leading-snug">
          <TextEffect per="char" preset="fade-in-blur" className="inline-block">
            Get Ready for Something
          </TextEffect>
          <br />
          <motion.span variants={fadeInUp} initial="hidden" animate="visible">
            <Highlighter action="highlight" color="#F9A825">
              <TextEffect
                per="line"
                preset="slide"
                className="inline-block"
                delay={1}
              >
                Extraordinary!
              </TextEffect>
            </Highlighter>
          </motion.span>
        </h1>

        <Countdown />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl flex flex-col items-center gap-6"
        >
          <form
            onSubmit={() => {}}
            className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 p-4 shadow-2xl rounded-2xl bg-secondary"
          >
            <div className="w-full sm:flex-1">
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="h-16 sm:h-20 text-xl sm:text-2xl placeholder:text-lg sm:placeholder:text-2xl px-4 sm:px-6 rounded-2xl cursor-target"
              />
            </div>

            <Button
              type="submit"
              variant="default"
              className="w-full sm:w-auto h-16 sm:h-20 px-6 sm:px-10 text-xl sm:text-2xl font-semibold rounded-2xl cursor-target"
            >
              Get Early Updates
            </Button>
          </form>
          <TextEffect
            per="line"
            delay={0.8}
            preset="fade-in-blur"
            className="text-sm sm:text-base md:text-xl text-muted-foreground font-medium text-center leading-relaxed px-2 text-balance mb-2 bg-background p-2 rounded-2xl"
          >
            Give me a heads-up when it&apos;s ready. No spam, no pressure.
            Unsubscribe anytime.
          </TextEffect>
        </motion.div>
      </HeroHighlight>

      <Particles
        className="absolute inset-0 z-0 hidden lg:block"
        quantity={250}
        ease={40}
        color="#ffffff"
        refresh
      />
    </div>
  );
}
