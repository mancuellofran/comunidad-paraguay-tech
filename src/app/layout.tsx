import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Paraguay Tech - Comunidad de Desarrolladores y Tecnología",
    template: "%s | Paraguay Tech"
  },
  description: "Comunidad tech de Paraguay. Conecta, aprende y crece profesionalmente. Discord, eventos, networking y mentoría en tecnología.",
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
    "aprendizaje programación",
    "hackathon Paraguay",
    "conferencia tecnología",
    "startups Paraguay",
    "crecimiento profesional tech",
    "cursos programación",
    "mentoría desarrollo",
    "colaboración tech",
    "innovación Paraguay"
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
    description: "Comunidad tech de Paraguay. Conecta, aprende y crece profesionalmente. Discord, eventos, networking y mentoría en tecnología.",
    siteName: "Paraguay Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paraguay Tech - Comunidad de Tecnologia en Paraguay",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paraguay Tech - Comunidad de Desarrolladores y Tecnología",
    description: "Comunidad tech de Paraguay. Conecta, aprende y crece profesionalmente. Discord, eventos, networking y mentoría en tecnología.",
    images: ["/og-image.jpg"],
    creator: "@paraguaytech",
    site: "@paraguaytech",
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
