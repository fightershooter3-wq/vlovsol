import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garvit More Things - Content Creator & YouTuber",
  description: "Welcome to Garvit More Things! Creating diverse, entertaining, and engaging content. From trailers to lifestyle videos, I bring you 'Any Thing! You Want' on my channel.",
  keywords: "Garvit Sharma, Garvit More Things, YouTube, Content Creator, Videos, Entertainment, Lifestyle, Trailers, AI Chatbots",
  authors: [{ name: "Garvit Sharma" }],
  creator: "Garvit Sharma",
  publisher: "Garvit Sharma",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://garvitmorethings.com",
    title: "Garvit More Things - Content Creator & YouTuber",
    description: "Creating diverse, entertaining, and engaging content. From trailers to lifestyle videos, I bring you 'Any Thing! You Want' on my channel.",
    siteName: "Garvit More Things",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Garvit More Things",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garvit More Things - Content Creator & YouTuber",
    description: "Creating diverse, entertaining, and engaging content. Any Thing! You Want.",
    creator: "@FighterSho97816",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Replace with your AdSense Publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Google Analytics (Optional but recommended for tracking) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
