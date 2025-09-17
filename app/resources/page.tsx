"use client";

import { motion } from "framer-motion";
import ResourceCard from "../../components/ResourceCard";
import { resources } from "../../lib/content";
import { fadeUp } from "../../components/animations";
import { Download, FileText } from "lucide-react";

const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

export default function ResourcesPage() {
  return (
    <div className="bg-background text-surface">
      <section className="pt-24 pb-12">
        <div className={container}>
          <motion.div {...fadeUp} className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Planning tools straight from our saddle bags</h1>
            <p className="text-lg opacity-80">
              Pack lighter, train smarter, and budget realistically. Everything here comes from real trips we’ve ridden.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-20">
        <div className={container}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
          <motion.div
            {...fadeUp}
            className="mt-16 rounded-3xl border border-primary/20 bg-surface/5 p-10 text-background"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-primary">
                  <Download className="h-4 w-4" /> Free starter kit
                </div>
                <h2 className="text-2xl font-semibold text-surface">Bikepacking 101 PDF</h2>
                <p className="opacity-80 text-sm text-surface/90">
                  A condensed guide covering gear, routing, nutrition, and checklists. Perfect if you love frameworks.
                </p>
              </div>
              <a
                href="/downloads/bikepacking-starter-kit.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-background px-5 py-3 text-sm font-semibold hover:bg-primary/80"
              >
                Grab it <FileText className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
