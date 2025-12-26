import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const suisse = localFont({
  variable: "--font-suisse",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/fonnts.com-SuisseIntl-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Suisse_Intl_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Suisse_Intl_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Suisse_Intl_SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Suisse_Intl_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zahid | Portfolio",
  description: "Zahid's personal portfolio showcasing projects, skills and contact information.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${suisse.variable} ${barlowCondensed.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors/>
        </ThemeProvider>
      </body>
    </html>
  );
}
