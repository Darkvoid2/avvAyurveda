"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ayurveda/consultations", label: "Consultations" },
  { href: "/ayurveda/panchakarma", label: "Panchakarma" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl">AVV Ayurveda</Link>
        <button aria-label="Toggle menu" className="sm:hidden" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
        <nav className="hidden sm:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-emerald-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="sm:hidden px-4 pb-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 border-b border-black/5">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}


