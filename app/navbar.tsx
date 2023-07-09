import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Image src="/logo.svg" alt="Steamology Logo" width={40} height={40} />
        <h1 className="font-heading text-lg">The Steamology Project</h1>
      </div>

      {/* Links */}
      {[
        { name: "Home", href: "/home" },
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
    </div>
  );
}
