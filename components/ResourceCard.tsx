"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Mountain } from "lucide-react";
import type { Resource } from "../lib/content";
import { BackpackIcon, CalculatorIcon } from "./CustomIcons";
import { fadeUp } from "./animations";

const iconMap = {
  Backpack: BackpackIcon,
  Mountain,
  Calculator: CalculatorIcon,
  Flame
} as const;

export default function ResourceCard({ item }: { item: Resource }) {
  const Icon = iconMap[item.icon];
  return (
    <motion.a
      {...fadeUp}
      href={item.href}
      className="group rounded-2xl bg-surface ring-1 ring-primary/20 p-6 hover:ring-primary/40 transition block text-background"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />
        <h4 className="font-semibold text-lg">{item.title}</h4>
      </div>
      <p className="mt-2 text-sm opacity-80">{item.desc}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm opacity-80 group-hover:opacity-100 text-primary">
        Read more <ArrowRight className="h-4 w-4" />
      </div>
    </motion.a>
  );
}
