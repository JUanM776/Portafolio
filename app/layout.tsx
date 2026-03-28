// app/layout.tsx — Root layout: sets metadata, imports fonts, wraps the app
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AvatarGuide from "@/components/AvatarGuide";
import CustomCursor from "@/components/CustomCursor";
import LightBackground from "@/components/LightBackground";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";

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
  icons: {
    icon: "/logos/Logo_profesional.svg",
  },
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
        <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:rounded-md" style={{ background: "var(--accent)", color: "var(--ink)" }}>
          Ir al contenido principal
        </a>
        <div className="fixed inset-0 -z-10" style={{ background: "var(--overlay)" }} />
        <LightBackground />
        <CustomCursor />
        <SplashScreen>
        {children}
        </SplashScreen>
        <AvatarGuide />
        <ScrollToTop />
      </body>
    </html>
  );
}
