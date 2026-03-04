import {Metadata} from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "HyunGyeong's Portfolio",
  authors: [{
    name: "HyunGyeong",
    url: "https://portfolio-2026-hazel.vercel.app"
  }],
  openGraph: {
    title: "Portfolio",
    description: "HyunGyeong's Portfolio",
    url: "https://portfolio-2026-hazel.vercel.app"
  },
  twitter: {
    title: "Portfolio",
    description: "HyunGyeong's Portfolio",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
