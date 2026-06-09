import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | India Tech Bulletin",
    default: "India Tech Bulletin - The Forefront of Technology News",
  },
  description: "The premier source for trending technology news, controversial tech updates, AI summits, and startup events in India and globally.",
  keywords: ["Tech news India", "Agentic AI", "Bharat Mandapam tech events", "Startup School Bangalore", "IIT Delhi Tech Fest", "Google updates 2026"],
  authors: [{ name: "India Tech Bulletin" }],
  openGraph: {
    title: "India Tech Bulletin",
    description: "Trending tech news spanning AI, startups, and major tech events.",
    url: "https://indiatechbulletin.com",
    siteName: "India Tech Bulletin",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <header>
          <div className="nav-container">
            <Link href="/" className="logo">
              India <span>Tech</span> Bulletin
            </Link>
            <nav>
              <Link href="/">Home</Link>
              <a href="#latest">Latest News</a>
              <a href="mailto:indiatechbulletin.contact@gmail.com">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} India Tech Bulletin. All rights reserved.</p>
            <div className="socials">
              <a href="https://instagram.com/indiatechbulletin" target="_blank" rel="noopener noreferrer">Instagram: @indiatechbulletin</a>
              <a href="mailto:indiatechbulletin.contact@gmail.com">indiatechbulletin.contact@gmail.com</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
