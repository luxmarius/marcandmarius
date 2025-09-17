import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernweh Riders",
  description: "Cinematic bike adventures, downloadable routes, and community stories."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background text-ink selection:bg-surface selection:text-ink`}>
        <NavBar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
