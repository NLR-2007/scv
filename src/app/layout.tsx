import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "SureCure Visit | Healthcare at Your Doorstep",
  description: "India's next-generation home healthcare platform. Book verified doctors who visit your home for professional, convenient, and trusted medical consultations. Backed by NLR GROUP OF COMPANIES.",
  keywords: [
    "doctor home visit",
    "healthcare at doorstep",
    "SureCure Visit",
    "verified doctors India",
    "home consultation Bangalore",
    "NLR Group of Companies",
    "home health app"
  ],
  authors: [{ name: "NLR GROUP OF COMPANIES" }],
  robots: "index, follow",
  openGraph: {
    title: "SureCure Visit | Healthcare at Your Doorstep",
    description: "Book verified doctors who visit your home. Professional clinical consultations, live doctor tracking, and secure digital prescriptions.",
    type: "website",
    locale: "en_IN",
    siteName: "SureCure Visit"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
