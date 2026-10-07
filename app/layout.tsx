// app/layout.tsx
import type { Metadata } from "next";
import { Black_Ops_One} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/beams";
import Navbar from "@/components/navbar components/Navbar";
import PortfolioCard from "@/components/about me components/PortfolioCard";
import BackToTop from "@/components/BackToTop";

const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-black-ops-one",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emilkazimovdev.vercel.app"),
  title: {
    default: "Emil Kazimov | Frontend Developer",
    template: "%s | Emil Kazimov",
  },
  description:
    "Frontend Developer portfolio specializing in React and Next.js. Discover my latest projects, skills, and contact information.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/roundedPhoto.png",
    apple: "/roundedPhoto.png",
  },
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Emil Portfolio",
    "Web Developer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  authors: [{ name: "Emil", url: "https://github.com/Emilhubb" }],
  creator: "Emil",
  openGraph: {
    title: "Emil | Frontend Developer Portfolio",
    description:
      "Discover my latest projects, skills, and contact information.",
    url: "/",
    siteName: "Emil Portfolio",
    images: [
      {
        url: "/portfolio.png",
        alt: "Emil Kazimov portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emil Kazimov | Frontend Developer",
    description:
      "Frontend Developer portfolio specializing in React and Next.js.",
    images: ["/portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full", "antialiased", blackOpsOne.variable, "font-sans")}
    >
      <body className="min-h-full relative bg-black">
        <div className="absolute inset-0 -z-30 pointer-events-none will-change-transform transform-gpu backface-hidden">
          <BackgroundBeams className="pointer-events-none -z-30" />
        </div>
        <div className="flex w-full min-h-screen md:flex-row max-sm:flex-col max-sm:px-5 sm:flex-col lg:p-4 sm:p-6 text-white animate-fade-up">
          <div className="flex flex-col justify-center md:justify-start md:flex-row items-center md:items-start gap-8">
            <PortfolioCard />
          </div>
          <div className="flex flex-col w-full h-fit gap-20 mt-5 ml-10 mr-10 max-md:m-0 max-md:my-15">
            <div className="border-2 border-(--border-color)">
              <Navbar />
            </div>
            <main className="border-2 border-(--border-color)">{children}</main>
          </div>
        </div>
        <div className="mt-8 p-4 border-t border-slate-800/80 w-full flex items-center justify-center text-xs max-md:text-xl max-sm:text-[15px] text-slate-400 select-none">
          <p>© 2026 Emil Kazımov</p>
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
