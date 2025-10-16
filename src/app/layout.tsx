import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BuildCraft Construction - Premium Construction Services",
    template: "%s | BuildCraft Construction"
  },
  description: "Professional construction company specializing in residential, commercial, and industrial projects. 25+ years of excellence in building dreams to reality with quality materials and expert craftsmanship.",
  keywords: [
    "construction company",
    "residential construction",
    "commercial construction",
    "industrial construction",
    "home builders",
    "construction services",
    "building contractors",
    "construction projects",
    "custom homes",
    "renovation services"
  ],
  authors: [{ name: "BuildCraft Construction" }],
  creator: "BuildCraft Construction",
  publisher: "BuildCraft Construction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://buildcraft-construction.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildcraft-construction.com",
    title: "BuildCraft Construction - Premium Construction Services",
    description: "Professional construction company specializing in residential, commercial, and industrial projects. 25+ years of excellence in building dreams to reality.",
    siteName: "BuildCraft Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BuildCraft Construction - Professional Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildCraft Construction - Premium Construction Services",
    description: "Professional construction company specializing in residential, commercial, and industrial projects.",
    images: ["/twitter-image.jpg"],
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
