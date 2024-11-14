import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "UMKM-Ku",
  description:
    "UMKM-Ku membantu pertumbuhan UMKM di Indonesia dengan mempertemukan mereka dengan para investor. Dengan mengedepankan platform yang mudah digunakan dan kemudahan bertransaksi, platform P2P lending “UMKM-Ku” tidak hanya menguntungkan platform yang meraup keuntungan, tetapi juga konsumen yang mendapatkan imbal hasil dan suku bunga yang kompetitif. Oleh karena itu, pemberi pinjaman diberikan kebebasan untuk memilih dalam mendanai UMKM dengan tingkat risiko yang telah ditentukan. Peminjam juga berhak meminjam dana sesuai dengan ketentuan yang telah ditetapkan.",
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
        {children}
      </body>
    </html>
  );
}
