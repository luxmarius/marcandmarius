import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-background text-surface grid place-items-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="opacity-70">Looks like that trail is still under construction.</p>
        <Link href="/" className="inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </div>
  );
}
