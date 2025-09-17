"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../components/animations";
import { Instagram, MapPin, Radio } from "lucide-react";

const container = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

export default function LivePage() {
  return (
    <div className="bg-background text-surface">
      <section className="pt-24 pb-16">
        <div className={container}>
          <motion.div {...fadeUp} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Where we’re riding right now</h1>
            <p className="text-lg opacity-80">
              Track the current trip, catch daily stories, and download the GPX as we publish each stage.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-20">
        <div className={container}>
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              {...fadeUp}
              className="rounded-3xl bg-surface/5 ring-1 ring-primary/20 min-h-[360px] grid place-items-center text-sm opacity-70"
            >
              Map embed placeholder
            </motion.div>
            <motion.div {...fadeUp} className="space-y-6">
              <div className="rounded-2xl bg-surface/10 ring-1 ring-primary/20 p-6">
                <div className="inline-flex items-center gap-2 text-sm text-primary uppercase tracking-wide">
                  <Radio className="h-4 w-4" /> Daily check-ins
                </div>
                <p className="mt-3 opacity-80">
                  Follow Instagram stories for real-time updates and absurd snack reviews from the saddle.
                </p>
                <a
                  href="https://instagram.com/"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary text-background px-5 py-2 text-sm font-semibold hover:bg-primary/80"
                >
                  Watch stories <Instagram className="h-4 w-4" />
                </a>
              </div>
              <div className="rounded-2xl bg-surface/10 ring-1 ring-primary/20 p-6">
                <div className="inline-flex items-center gap-2 text-sm text-primary uppercase tracking-wide">
                  <MapPin className="h-4 w-4" /> Route drop
                </div>
                <p className="mt-3 opacity-80">
                  We’ll upload the GPX once we’ve ridden each stage. Expect messy notes, honest feedback, and a few coffee recommendations along the way.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
