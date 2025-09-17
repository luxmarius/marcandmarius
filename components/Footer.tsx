import { Bike } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-ink">
        <div className="flex items-center gap-2 opacity-80">
          <Bike className="h-5 w-5 text-primary" />
          <span>© {new Date().getFullYear()} marcandmarius</span>
        </div>
        <div className="flex items-center gap-4 text-sm opacity-80">
          <a href="#">Privacy</a>
          <a href="#">Impressum</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
