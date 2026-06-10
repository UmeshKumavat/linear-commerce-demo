import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";
import "@/styles/cgpt-intro.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Linear Commerce — AI-Native Commerce Engineering Partner",
  description:
    "Linear Commerce designs, builds, and operates end-to-end commerce infrastructure for B2C, B2B, and D2C businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${robotoMono.variable} lenis h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-black text-[#EFEFE5]">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
