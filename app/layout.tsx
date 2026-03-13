import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veilcode.studio"),
  title: {
    default: "VeilCode Digital Solutions Agency - AI, Web development, Data Analytics, Mobile Applications Development & Automation",
    template: "%s | VeilCode"
  },
  description: "VeilCode builds high-performance web applications,and Mobile Applications,  AI automation systems, Data Analytics and Digital Marketing",

  keywords: [
    "Next.js development",
    "AI automation",
    "web development",
    "software engineering",
    "LangGraph AI agents",
    "Website development",
    "Data Analysis Services",
    "Social Media Marketing",
    "Mobile Applications development"
  ],

  openGraph: {
    title: "VeilCode - Digital Solutions agency - builds high performance digital products - Websites and Web applications, Mobile Apps, Data Analytics tools, AI Automated systems, and Digital Marketing.",
    description: "VeilCode - Digital Solutions agency - builds high performance digital products - Websites and Web applications, Mobile Apps, Data Analytics tools, AI Automated systems, and Digital Marketing.",
    url: "https://veilcode.studio",
    siteName: "VeilCode",
    images: [
      {
        url: "/assets/logo.png",
        width: 100,
        height: 100
      },
      {
        url: "/assets/nexus-project/image-client-1.jpg",
        width: 1200,
        height: 630
      },
      {
        url: "/assets/agridata-project/image-1.jpg",
        width: 1200,
        height: 630
      },
      {
        url: "/assets/brewed-coffee-project/image-1.png",
        width: 1200,
        height: 630
      }
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VeilCode Agency",
    description: "VeilCode builds high-performance web applications,and Mobile Applications,  AI automation systems, Data Analytics and Digital Marketing",
    images: ["/assets/logo.png", "/assets/health-pulse-app/image-1.jpg", "/assets/nexus-project/image-1.jpg"]
  },
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
        <Nav />
        <main>
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
