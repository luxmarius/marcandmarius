import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Mountain, Route, Clock, Flame } from "lucide-react";
import { tours } from "../../../lib/content";

const container = "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8";

type Params = {
  tourId: string;
};

export function generateStaticParams() {
  return tours.map((tour) => ({ tourId: tour.id }));
}

export default function TourDetailPage({ params }: { params: Params }) {
  const tour = tours.find((item) => item.id === params.tourId);

  if (!tour) {
    notFound();
  }

  return (
    <div className="bg-background text-ink min-h-[60vh]">
      <section className="pt-24 pb-12">
        <div className={container}>
          <Link href="/tours" className="inline-flex items-center gap-2 text-sm text-primary">
            <ArrowLeft className="h-4 w-4" /> All tours
          </Link>
          <div className="mt-6 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{tour.title}</h1>
            <p className="opacity-80 max-w-2xl">{tour.blurb}</p>
            <div className="flex flex-wrap gap-3 text-sm text-ink">
              <Stat icon={Route} label="Distance" value={tour.stats.distance} />
              <Stat icon={Mountain} label="Elevation" value={tour.stats.elevation} />
              <Stat icon={Clock} label="Days" value={tour.stats.days} />
              <Stat icon={Flame} label="Difficulty" value={tour.stats.difficulty} />
            </div>
            <a
              href={tour.gpxUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-surface px-5 py-2 text-sm font-semibold hover:bg-primary/80"
            >
              <Download className="h-4 w-4" /> Download GPX
            </a>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className={container}>
          <div className="rounded-3xl bg-surface/5 ring-1 ring-primary/20 p-10 text-ink space-y-4">
            <h2 className="text-2xl font-semibold text-ink">What to expect</h2>
            <p className="text-sm opacity-80 text-ink/90">
              Swap in photos, stage breakdowns, and a day-by-day itinerary here. The structure is ready for you to drop in real content as you document the ride.
            </p>
            <p className="text-sm opacity-80 text-ink/90">
              Until then, use the stats as a guide: this route mixes high mountain passes, lakeside recoveries, and back-alley espresso missions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Route;
  label: string;
  value: string | number;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-surface/50 px-3 py-1 text-xs uppercase tracking-wide text-ink/80">
      <Icon className="h-4 w-4 text-primary" />
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
