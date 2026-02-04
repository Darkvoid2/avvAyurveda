"use client";
import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 bg-[#FAF8F3]/95 backdrop-blur-md border-b-2 border-teal-200/50 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/logo.png" 
            alt="AVV Ayurveda Logo" 
            width={60} 
            height={60} 
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            priority
          />
          <span className="font-serif text-xl sm:text-2xl text-teal-800 font-bold hidden sm:block">AVV Ayurveda</span>
        </Link>
        <button 
          aria-label="Toggle menu" 
          className="sm:hidden p-2 rounded-md hover:bg-teal-50 transition-colors text-teal-800"
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
                  relative px-4 py-2 rounded-lg transition-all duration-200
                  ${isActive 
                    ? "bg-teal-700 text-white shadow-md" 
                    : "text-slate-700 hover:bg-teal-50 hover:text-teal-800"
                  }
                `}
              >
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
        <nav className="sm:hidden px-4 pb-4 flex flex-col gap-2 bg-teal-50/50 border-t border-teal-200/50">
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
                    ? "bg-teal-700 text-white border-teal-900 shadow-md" 
                    : "border-transparent hover:bg-teal-100 hover:border-teal-400 text-slate-700"
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


