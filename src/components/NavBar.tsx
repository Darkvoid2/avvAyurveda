"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-emerald-100 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl sm:text-3xl text-emerald-900 hover:text-emerald-700 transition-colors flex items-center gap-2">
          <span className="text-3xl">🌿</span>
          <span className="font-bold">AVV Ayurveda</span>
        </Link>
        <button 
          aria-label="Toggle menu" 
          className="sm:hidden p-2 rounded-md hover:bg-emerald-50 transition-colors text-emerald-900"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
        <nav className="hidden sm:flex gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2
                  ${isActive 
                    ? "bg-emerald-600 text-white shadow-md" 
                    : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  }
                `}
              >
                <span className={`text-lg ${isActive ? "" : ""}`}>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      {open && (
        <nav className="sm:hidden px-4 pb-4 flex flex-col gap-2 bg-emerald-50/50 border-t border-emerald-100">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  py-3 px-4 rounded-lg transition-all border-l-4
                  ${isActive 
                    ? "bg-emerald-600 text-white border-emerald-800 shadow-md" 
                    : "border-transparent hover:bg-emerald-100 hover:border-emerald-300 text-gray-700"
                  }
                `}
              >
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}


