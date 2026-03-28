// app/layout.tsx — Root layout: sets metadata, imports fonts, wraps the app
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AvatarGuide from "@/components/AvatarGuide";
import CustomCursor from "@/components/CustomCursor";
import LightBackground from "@/components/LightBackground";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Juan Manuel Cordoba Florez — Portafolio",
  description: "Portafolio de Juan Manuel Cordoba Florez, estudiante de Ingenieria de Software en la Universidad Cooperativa de Colombia, campus Pasto. Desarrollo frontend y backend.",
  keywords: ["portafolio", "desarrollador", "frontend", "software", "Pasto", "Colombia"],
  authors: [{ name: "Juan Manuel Cordoba Florez" }],
  openGraph: {
    title: "Juan Manuel Cordoba Florez — Portafolio",
    description: "Estudiante de Ingenieria de Software apasionado por el desarrollo web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} dark`}>
      <body className="relative cursor-none">
        <div className="fixed inset-0 -z-10" style={{ background: "var(--overlay)" }} />
        <LightBackground />
        <CustomCursor />
        {children}
        <AvatarGuide />
        <ScrollToTop />
      </body>
    </html>
  );
}
