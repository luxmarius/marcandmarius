"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../components/animations";
import { Users, Download, Trophy } from "lucide-react";

const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

export default function CommunityPage() {
  return (
    <div className="bg-background text-ink">
      <section className="pt-24 pb-12">
        <div className={container}>
          <motion.div {...fadeUp} className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Ride it. Remix it. Share it.</h1>
            <p className="text-lg opacity-80">
              The marcandmarius community is where our routes come to life. Tag your rides, submit photos, and we’ll shout you out in the monthly spotlight.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-20">
        <div className={container}>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp}
              className="rounded-3xl bg-surface/10 ring-1 ring-primary/20 p-10 space-y-4 text-ink"
            >
              <div className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-primary">
                <Download className="h-4 w-4" /> Digital drop
              </div>
              <h2 className="text-2xl font-semibold text-ink">Download the media kit</h2>
              <p className="opacity-80 text-sm text-ink/90">
                Logos, typography, and overlays to make your recap reel pop. Perfect for Strava posts, Instagram stories, and YouTube thumbnails.
              </p>
              <a
                href="/downloads/media-kit.zip"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-surface px-5 py-3 text-sm font-semibold hover:bg-primary/80"
              >
                Media kit <Download className="h-4 w-4" />
              </a>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="rounded-3xl bg-surface/10 ring-1 ring-primary/20 p-10 space-y-6 text-ink"
            >
              <div className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-primary">
                <Trophy className="h-4 w-4" /> Monthly spotlight
              </div>
              <p className="opacity-80 text-sm text-ink/90">
                Submit your photos and trip notes using <span className="text-primary font-semibold">#marcandmarius</span>. Every month we pick a standout ride to feature in our newsletter and YouTube community post.
              </p>
              <a
                href="mailto:hello@marcandmarius.com"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-5 py-3 text-sm font-semibold hover:bg-primary/10"
              >
                Email your story <Users className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
