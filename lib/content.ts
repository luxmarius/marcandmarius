export type TourStatKey = "distance" | "elevation" | "days" | "difficulty";

export type Tour = {
  id: string;
  title: string;
  year: number;
  thumbnail: string;
  stats: Record<TourStatKey, string | number>;
  blurb: string;
  gpxUrl: string;
};

export type Resource = {
  title: string;
  desc: string;
  href: string;
  icon: "Backpack" | "Mountain" | "Calculator" | "Flame";
};

export const tours: Tour[] = [
  {
    id: "garda-2023",
    title: "Munich → Lake Garda",
    year: 2023,
    thumbnail: "/images/garda-hero.jpg",
    stats: { distance: "420 km", elevation: "7,800 m", days: 5, difficulty: "Hard" },
    blurb: "Classic Alpenüberquerung: Pässe, Gelato, und laaange Abfahrten.",
    gpxUrl: "/downloads/munich-garda.gpx"
  },
  {
    id: "japan-2022",
    title: "Osaka → Fukuoka",
    year: 2022,
    thumbnail: "/images/japan-ride.jpg",
    stats: { distance: "600 km", elevation: "5,200 m", days: 7, difficulty: "Medium" },
    blurb: "Küstenstraßen, Onsens und nächtliche Ramen Stops.",
    gpxUrl: "/downloads/osaka-fukuoka.gpx"
  },
  {
    id: "alps-2021",
    title: "Across the Alps: Wild West Line",
    year: 2021,
    thumbnail: "/images/alps-west.jpg",
    stats: { distance: "380 km", elevation: "8,300 m", days: 4, difficulty: "Hard" },
    blurb: "Schotter, Serpentinen und Panorama bis zum Horizont.",
    gpxUrl: "/downloads/alps-west.gpx"
  }
];

export const resources: Resource[] = [
  {
    title: "Packing List (Bikepacking)",
    desc: "Minimal, wetterfest, bewährt über 7 Jahre.",
    href: "/resources/packing-list",
    icon: "Backpack"
  },
  {
    title: "Alpen-Preparation Guide",
    desc: "Training, Höhenmeter-Mindset, Pässe-Etikette.",
    href: "/resources/alps-prep",
    icon: "Mountain"
  },
  {
    title: "Budget Calculator",
    desc: "Plane Kosten für Unterkünfte, Essen, Transport.",
    href: "/resources/budget",
    icon: "Calculator"
  },
  {
    title: "Top 10 Mistakes We Made",
    desc: "Damit du sie nicht wiederholst.",
    href: "/resources/mistakes",
    icon: "Flame"
  }
];
