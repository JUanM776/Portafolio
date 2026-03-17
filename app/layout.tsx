// app/layout.tsx — Root layout: sets metadata, imports fonts, wraps the app
import type { Metadata } from "next";
import { Monsieur_La_Doulaise, DM_Mono } from "next/font/google";
import "./globals.css";
import AvatarGuide from "@/components/AvatarGuide";

const monsieurLaDoulaise = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Juan Manuel Cordoba — Portfolio",
  description: "Estudiante de Ingeniería de Software apasionado por el frontend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monsieurLaDoulaise.variable} ${dmMono.variable}`}>
      <body className="relative">
        <div className="fixed inset-0 bg-black/60 -z-10" />
        {children}
        <AvatarGuide />
      </body>
    </html>
  );
}
