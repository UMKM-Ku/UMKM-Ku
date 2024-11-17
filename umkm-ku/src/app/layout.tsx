import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import LandingNavigation from "@/views/pages/landing-pages/landing-navigation";
// import FooterLandingPage from "@/views/pages/landing-pages/footer-landing-pages";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UMKM-ku",
  description: "Pendanaan & Investasi lebih inklusif untuk semua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <LandingNavigation /> */}
        {children}
        {/* <FooterLandingPage /> */}
      </body>
    </html>
  );
}
