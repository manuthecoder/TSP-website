"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const Links = ({ isMobile = false }) => {
    return [
      { name: "Home", href: "/" },
      { name: "Magazine", href: "/magazine" },
      { name: "Blog", href: "/blog" },
      { name: "Start a Chapter", href: "https://forms.gle/CyhVa3TCHqi3aBTu8" },
      { name: "About us", href: "/about" },
      { name: "Support us", href: "/donate-now" },
    ].map(({ name, href }) => (
      <Link
        key={href}
        className="navbar__link"
        href={href}
        style={{
          ...(isMobile && { display: "flex!important" }),
        }}
      >
        {name}
      </Link>
    ));
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo" onClick={() => router.push("/")}>
          <Image src="/logo.svg" alt="Steamology Logo" width={40} height={40} />
          <h1 className="font-heading text-lg">
            <span className="hidden sm:inline">The Steamology Project</span>
            <span className="inline sm:hidden">TSP</span>
          </h1>
        </div>

        {/* Links */}
        <Links />

        {/* Search */}
        <input type="text" placeholder="Search..." className="navbar__search" />
        {!mobileOpen && (
          <div className="navbar__mobileButton">
            <span className="material-symbols-outlined">search</span>
          </div>
        )}
        <div
          className={`navbar__mobileButton ${mobileOpen && "active"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </div>
      </div>
      {mobileOpen && <div className="overlay" />}
      {mobileOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="navbar__menu"
        >
          <Links isMobile />
          <input
            type="text"
            placeholder="Search..."
            className="navbar__search"
            style={{ display: "block!important" }}
          />
        </motion.div>
      )}
    </>
  );
}
