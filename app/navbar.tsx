"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar">
      <div className="navbar__logo" onClick={() => router.push("/")}>
        <Image src="/logo.svg" alt="Steamology Logo" width={40} height={40} />
        <h1 className="font-heading text-lg">
          <span className="hidden sm:inline">The Steamology Project</span>
          <span className="inline sm:hidden">TSP</span>
        </h1>
      </div>

      {/* Links */}
      {[
        { name: "Home", href: "/" },
        { name: "Magazine", href: "/magazine" },
        { name: "Blog", href: "/blog" },
        { name: "Start a chapter", href: "/start-a-chapter" },
        { name: "About us", href: "/about" },
        { name: "Donate now", href: "/donate-now" },
      ].map(({ name, href }) => (
        <Link key={href} className="navbar__link" href={href}>
          {name}
        </Link>
      ))}

      {/* Search */}
      <input type="text" placeholder="Search..." className="navbar__search" />
      <div className="navbar__mobileButton">
        <span className="material-symbols-outlined">search</span>
      </div>
      <div className="navbar__mobileButton">
        <span className="material-symbols-outlined">menu</span>
      </div>
    </div>
  );
}
