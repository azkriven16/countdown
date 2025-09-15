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
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground relative">
      <HeroHighlight className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative mt-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-center leading-tight sm:leading-tight md:leading-snug lg:leading-snug">
          <motion.span variants={fadeInUp} initial="hidden" animate="visible">
            Get Ready for Something
          </motion.span>
          <br />
          <motion.span variants={fadeInUp} initial="hidden" animate="visible">
            <Highlighter action="highlight" color="#F9A825">
              <Highlighter action="box" color="#FFFF00" strokeWidth={2}>
                Extraordinary!
              </Highlighter>
            </Highlighter>
          </motion.span>
        </h1>

        <Countdown />
        <div className="w-full max-w-4xl flex flex-col items-center gap-6">
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
        </div>
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
