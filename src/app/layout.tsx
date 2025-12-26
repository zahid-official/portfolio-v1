import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      <body className={`${suisse.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
