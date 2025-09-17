"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mountain, Route, Clock, Flame } from "lucide-react";
import Link from "next/link";
import type { Tour } from "../lib/content";
import { fadeUp } from "./animations";

function Stat({ icon: Icon, label, value }: { icon: typeof Route; label: string; value: string | number }) {
  return (
    <div className="flex items-center gap-3 text-ink">
      <Icon className="h-5 w-5 text-primary" />
      <div className="text-sm">{label}</div>
      <div className="ml-auto font-semibold">{value}</div>
    </div>
  );
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <motion.div
      {...fadeUp}
      className="group relative overflow-hidden rounded-2xl bg-surface ring-1 ring-primary/20 hover:ring-primary/40 transition text-ink"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <div className="h-full w-full bg-deep/10 grid place-items-center">
          <span className="text-sm opacity-60">Image: {tour.thumbnail}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
          <Mountain className="h-4 w-4" />
          <span>{tour.year}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold">{tour.title}</h3>
        <p className="mt-2 text-sm opacity-80">{tour.blurb}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Stat icon={Route} label="Distance" value={tour.stats.distance} />
          <Stat icon={Mountain} label="Elevation" value={tour.stats.elevation} />
          <Stat icon={Clock} label="Days" value={tour.stats.days} />
          <Stat icon={Flame} label="Difficulty" value={tour.stats.difficulty} />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <a
            href={tour.gpxUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-surface px-4 py-2 text-sm font-semibold hover:bg-primary/80"
          >
            <Download className="h-4 w-4" /> GPX Download
          </a>
          <Link
            href={`/tours/${tour.id}`}
            className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-4 py-2 text-sm hover:bg-primary/10"
          >
            Details ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
