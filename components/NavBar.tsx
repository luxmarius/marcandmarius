"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bike, Instagram } from "lucide-react";

const links = [
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/live", label: "Live" },
  { href: "/resources", label: "Resources" },
  { href: "/community", label: "Community" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-background/80 border-b border-primary/20 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Bike className="h-6 w-6 text-primary" />
          <span className="font-bold tracking-wide">Fernweh Riders</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-primary ${isActive ? "text-primary" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://instagram.com/"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-3 py-1.5 text-sm hover:bg-primary/20"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="h-4 w-4 text-primary" /> Follow
          </a>
          <a
            href="/#newsletter"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-primary text-surface px-3 py-1.5 text-sm font-semibold hover:bg-primary/80"
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
}
