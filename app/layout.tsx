import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Agenzia Marketing Digitale | Trasformiamo il Tuo Business",
  description: "Social Media Marketing, Cold Email e Crescita Digitale per Business Locali ad Ancona. Più Clienti, Più Vendite, Più Crescita.",
  keywords: "marketing digitale, social media, email marketing, Ancona, business locale",
  authors: [{ name: "Digital Marketing Agency" }],
  openGraph: {
    title: "Agenzia Marketing Digitale | Trasformiamo il Tuo Business",
    description: "Social Media Marketing, Cold Email e Crescita Digitale per Business Locali",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

