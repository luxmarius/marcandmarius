"use client";

import { motion } from "framer-motion";
import { Mountain, Coffee, Camera } from "lucide-react";
import { fadeUp } from "../../components/animations";

const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

export default function AboutPage() {
  return (
    <div className="bg-background text-ink">
      <section className="pt-24 pb-16">
        <div className={container}>
          <motion.div {...fadeUp} className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">We ride slow, document everything, and share the blueprint.</h1>
            <p className="text-lg opacity-80">
              marcandmarius started as a pact between Marc and Marius: once a year, drop work, pack the bikes, and chase a new line across a mountain range.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-surface text-ink">
        <div className={container}>
          <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-deep text-surface p-8 space-y-4 ring-1 ring-primary/20">
              <Mountain className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Alpine DNA</h2>
              <p className="text-sm opacity-70">
                From Munich to Lake Garda, the Alps are our training ground. We obsess over gradients, weather windows, and mid-climb espresso stops.
              </p>
            </div>
            <div className="rounded-3xl bg-deep text-surface p-8 space-y-4 ring-1 ring-primary/20">
              <Camera className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Story-first films</h2>
              <p className="text-sm opacity-70">
                Each tour becomes a short film and route guide. We break down logistics, where to sleep, and how to capture your own ride.
              </p>
            </div>
            <div className="rounded-3xl bg-deep text-surface p-8 space-y-4 ring-1 ring-primary/20">
              <Coffee className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Community fuel</h2>
              <p className="text-sm opacity-70">
                The best part is seeing others repeat (and remix) our adventures. Share your ride and we’ll add it to the community map.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16">
        <div className={container}>
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold">Meet Marc & Marius</h2>
              <p className="opacity-80">
                Marc handles the route planning and gear nerdery. Marius brings the storytelling and camera wizardry. Together we keep each other accountable to ride something wild every summer.
              </p>
              <p className="opacity-80">
                Want to collaborate, sponsor a ride, or invite us to speak at your event? We’re all ears — especially if there’s gravel involved.
              </p>
            </div>
            <motion.div
              {...fadeUp}
              className="rounded-3xl min-h-[320px] bg-surface/10 ring-1 ring-primary/20 grid place-items-center text-sm opacity-70"
            >
              Portraits go here
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
