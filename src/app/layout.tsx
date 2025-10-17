import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Paraguay Tech - Comunidad de Desarrolladores y Tecnología",
    template: "%s | Paraguay Tech"
  },
  description: "Únete a la comunidad tech más activa de Paraguay. Conecta con desarrolladores, comparte conocimiento, encuentra oportunidades laborales y crece profesionalmente en el mundo de la tecnología.",
  keywords: [
    "Paraguay Tech",
    "comunidad desarrolladores Paraguay",
    "programadores Paraguay",
    "tecnología Paraguay",
    "desarrollo software Paraguay",
    "networking tech Paraguay",
    "programación Paraguay",
    "desarrolladores web Paraguay",
    "comunidad tech",
    "discord Paraguay",
    "carrera tecnología",
    "aprendizaje programación"
  ],
  authors: [{ name: "Paraguay Tech Community" }],
  creator: "Paraguay Tech Community",
  publisher: "Paraguay Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.paraguaytech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "https://www.paraguaytech.com",
    title: "Paraguay Tech - Comunidad de Desarrolladores y Tecnología",
    description: "Únete a la comunidad tech más activa de Paraguay. Conecta con desarrolladores, comparte conocimiento y crece profesionalmente.",
    siteName: "Paraguay Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paraguay Tech - Comunidad de Desarrolladores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paraguay Tech - Comunidad de Desarrolladores y Tecnología",
    description: "Únete a la comunidad tech más activa de Paraguay. Conecta con desarrolladores, comparte conocimiento y crece profesionalmente.",
    images: ["/og-image.jpg"],
    creator: "@paraguaytech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
