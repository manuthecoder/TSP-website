import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Steamology Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="shortcut icon" href="/logo.svg" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Ubuntu+Condensed&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <title>The Steamology Project</title>
        <meta name="title" content="The Steamology Project" />
        <meta
          name="description"
          content="A community of students and educators who are passionate about STEAM"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thesteamologyproject.org/" />
        <meta property="og:title" content="The Steamology Project" />
        <meta
          property="og:description"
          content="A community of students and educators who are passionate about STEAM"
        />
        <meta property="og:image" content="/opengraph.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://thesteamologyproject.org/"
        />
        <meta property="twitter:title" content="The Steamology Project" />
        <meta
          property="twitter:description"
          content="A community of students and educators who are passionate about STEAM"
        />
        <meta property="twitter:image" content="/opengraph.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
