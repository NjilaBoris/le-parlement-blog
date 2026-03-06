import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Parlementaire",
  description:
    "Le Parlementaire est un média d'information indépendant qui couvre l'actualité politique, économique et sociale en France et à l'international. Nous nous engageons à fournir une information de qualité, rigoureuse et accessible à tous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${ibmPlexSerif.variable} ${monaSans.variable} relative font-sans antialiased`}
        >
          <Nav />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
