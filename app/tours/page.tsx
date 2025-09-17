"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, MapPinned } from "lucide-react";
import TourCard from "../../components/TourCard";
import { tours } from "../../lib/content";
import { fadeUp } from "../../components/animations";

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function ToursPage() {
  return (
    <div className="bg-background text-ink">
      <section className="py-24 bg-gradient-to-b from-deep/80 via-deep/40 to-background">
        <div className={container}>
          <motion.div {...fadeUp} className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-wider text-primary">
              <Compass className="h-4 w-4" /> Ride library
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Every adventure we’ve published</h1>
            <p className="opacity-80 text-lg">
              Each tour comes with a downloadable GPX, accommodations, food stops, and detailed notes on what we’d do differently next time.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-surface text-ink">
        <div className={container}>
          <motion.div {...fadeUp} className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Signature bikepacking routes</h2>
            <div className="inline-flex items-center gap-2 text-sm text-primary">
              <MapPinned className="h-4 w-4" />
              Drop us a DM for custom itineraries.
            </div>
          </motion.div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-16 rounded-3xl border border-primary/20 bg-background text-ink p-10">
            <h3 className="text-2xl font-semibold">Need a bespoke route?</h3>
            <p className="mt-3 opacity-80">
              We can help you adapt these rides to your timeframe, budget, and stoke level. From one-day gravel escapes to two-week odysseys.
            </p>
            <a
              href="mailto:hello@marcandmarius.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary text-surface px-5 py-3 text-sm font-semibold hover:bg-primary/80"
            >
              Say hi <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
