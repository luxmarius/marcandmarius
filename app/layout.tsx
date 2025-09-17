import type { Metadata } from "next";
import { Delius } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const delius = Delius({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "marcandmarius",
  description: "Cinematic bike adventures, downloadable routes, and community stories from marcandmarius."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${delius.className} min-h-screen bg-background text-ink selection:bg-surface selection:text-ink`}>
        <NavBar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
