"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Compass, Play, Instagram, ExternalLink, Mountain, Download, PlayCircle, Users, Mail } from "lucide-react";
import TourCard from "../components/TourCard";
import ResourceCard from "../components/ResourceCard";
import { tours, resources } from "../lib/content";
import { fadeUp } from "../components/animations";

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <section className="relative min-h-[92vh] grid place-items-center overflow-hidden bg-background text-surface">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            src="/images/reel_small.mov"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero.jpg"
            aria-hidden
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-background/80" />
        </div>
        <motion.div {...fadeUp} className={`${container} relative z-20 text-center pt-24 pb-16`}>
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-wider text-primary">
              <Compass className="h-4 w-4" /> Two friends • Seven years • Countless roads
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">From Office Desks to Alpine Summits</h1>
            <p className="mt-4 text-base sm:text-lg opacity-90">
              Cinematic bike adventures + complete route guides. Download our GPS tracks, see where we sleep, and ride it yourself.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#tours" className="inline-flex items-center gap-2 rounded-2xl bg-primary text-surface px-6 py-3 font-semibold hover:bg-primary/80">
                Explore Tours <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=gqi_x4IFKJ4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-primary/40 px-6 py-3 hover:bg-primary/10"
              >
                <Play className="h-5 w-5 text-primary" /> Watch Showreel
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="tours" className="py-20 bg-surface text-ink">
        <div className={container}>
          <motion.div {...fadeUp} className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Tours</h2>
              <p className="mt-2 opacity-80 max-w-2xl">
                Real routes you can ride. We share GPS, accommodation, food stops, budgets and the behind-the-scenes stories that make them unforgettable.
              </p>
            </div>
            <a
              href="/tours"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-primary/40 px-4 py-2 text-sm hover:bg-primary/10"
            >
              All tours <ArrowRight className="h-4 w-4 text-primary" />
            </a>
          </motion.div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative overflow-hidden bg-background text-ink">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="h-full w-full bg-[radial-gradient(60%_40%_at_50%_0%,rgba(49,170,163,0.1),transparent)]" />
        </div>
        <div className={container}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp}>
              <div className="text-xs uppercase tracking-widest opacity-70">About Us</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Two friends, one tradition: a big ride every year.</h2>
              <p className="mt-4 opacity-80">
                We started with the classic Munich → Garda crossing, then took the spirit to Japan and beyond. Our goal isn’t to go the fastest — it’s to tell honest stories and give you everything you need to ride it yourself.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-primary/10 p-4 ring-1 ring-primary/20">
                  <div className="text-3xl font-bold text-primary">7+</div>
                  <div className="text-sm opacity-80">Years of trips</div>
                </div>
                <div className="rounded-2xl bg-primary/10 p-4 ring-1 ring-primary/20">
                  <div className="text-3xl font-bold text-primary">1,400+ km</div>
                  <div className="text-sm opacity-80">Across countries</div>
                </div>
                <div className="rounded-2xl bg-primary/10 p-4 ring-1 ring-primary/20">
                  <div className="text-3xl font-bold text-primary">∞</div>
                  <div className="text-sm opacity-80">Bad jokes & coffee</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="relative rounded-3xl overflow-hidden ring-1 ring-primary/20 bg-surface/10 min-h-[320px]"
            >
              <Image
                src="/images/about-us.jpg"
                alt="Marc and Marius taking a break during a ride"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="live" className="py-24 bg-surface text-ink">
        <div className={container}>
          <motion.div {...fadeUp} className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ride With Us (Live)</h2>
              <p className="mt-2 opacity-80 max-w-2xl">
                Track our current route, see daily updates, and join the journey on Instagram.
              </p>
            </div>
            <a
              href="https://instagram.com/"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-primary text-surface px-4 py-2 text-sm font-semibold hover:bg-primary/80"
            >
              <Instagram className="h-4 w-4" /> Follow on Instagram
            </a>
          </motion.div>
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <motion.div
              {...fadeUp}
              className="rounded-2xl overflow-hidden ring-1 ring-primary/20 bg-background/5 min-h-[320px]"
            >
              <div className="h-full w-full grid place-items-center">
                <span className="opacity-60 text-sm">Embed Mapbox / Komoot live tracker here</span>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="rounded-2xl ring-1 ring-primary/20 bg-background/5 p-6">
              <div className="flex items-center gap-3">
                <PlayCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Latest Reel</h3>
              </div>
              <a
                id="showreel"
                href="https://www.youtube.com/watch?v=gqi_x4IFKJ4"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block aspect-video w-full rounded-xl bg-deep/20 grid place-items-center text-ink hover:bg-deep/30 transition"
              >
                <span className="opacity-60 text-sm">Watch the showreel on YouTube</span>
              </a>
              <a
                href="https://instagram.com/"
                className="mt-4 inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 text-primary"
              >
                See more on Instagram <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="resources" className="py-24">
        <div className={container}>
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold">Resources</h2>
            <p className="mt-2 opacity-80 max-w-2xl">
              Actionable guides to help you plan, pack and ride your first (or next) epic tour.
            </p>
          </motion.div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-24 bg-surface text-ink">
        <div className={container}>
          <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ride it. Share it.</h2>
              <p className="mt-3 opacity-80">
                Download our GPS files, ride the tours your way, and tag us to get featured. We highlight community rides monthly.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-background/5 p-5 ring-1 ring-primary/20">
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <Download className="h-4 w-4 text-primary" /> Assets
                  </div>
                  <div className="mt-2 text-lg font-semibold">GPX + Packing Checklist</div>
                </div>
                <div className="rounded-2xl bg-background/5 p-5 ring-1 ring-primary/20">
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <Users className="h-4 w-4 text-primary" /> Feature
                  </div>
                  <div className="mt-2 text-lg font-semibold">Monthly Community Spotlight</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden ring-1 ring-primary/20 bg-background/5 min-h-[320px] grid place-items-center">
              <span className="opacity-60 text-sm">Show community photos grid / hashtag feed</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="newsletter" className="py-20">
        <div className={container}>
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-primary/20 bg-gradient-to-br from-surface/5 to-surface/10 px-6 py-10 md:px-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs uppercase tracking-widest opacity-70">Stay in the loop</div>
                <h3 className="mt-1 text-2xl md:text-3xl font-bold">Join the next ride (on your screen)</h3>
                <p className="mt-2 opacity-80">
                  Trip announcements, downloadable routes, and behind-the-scenes chaos — straight to your inbox.
                </p>
              </div>
              <form className="flex w-full gap-3">
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="flex-1 rounded-xl bg-background border border-primary/20 px-4 py-3 text-ink placeholder-deep/40 outline-none focus:border-primary/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary text-surface px-5 py-3 font-semibold hover:bg-primary/80"
                >
                  <Mail className="h-5 w-5" /> Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
