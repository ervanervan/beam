import type { Metadata } from "next";
import "../../styles/global.css";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Beam",
  description: "Beam - Modern Design Website Landing Page",
};

type Locale = "en" | "fr" | "id"; // Sesuaikan dengan routing.locales

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale }; // Tipe params.locale lebih spesifik
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = params;

  // Pastikan locale ada dalam routing.locales
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="relative font-sans bg-background-whitebg antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
