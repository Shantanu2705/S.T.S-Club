"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "History", href: "/history" },
  { name: "Committee", href: "/committee" },
  { name: "Activities", href: "/activities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full bg-white flex items-center justify-center p-1 shadow-sm transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.jpeg"
                  alt="S.T.S Club Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className={`font-heading font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
                S.T.S Club
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    pathname === link.href
                      ? (isScrolled ? "text-primary" : "text-gold")
                      : (isScrolled ? "text-neutral-dark hover:text-primary" : "text-white/90 hover:text-gold")
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-primary text-white px-5 py-2 rounded-sm text-sm font-medium hover:bg-primary-light transition-colors shadow-sm"
              >
                Become a Member
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 -mr-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-neutral-100">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/logo.jpeg"
                  alt="S.T.S Club Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-heading font-bold text-lg text-primary">S.T.S Club</span>
              </Link>
              <button
                className="p-2 text-neutral-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-heading transition-colors ${
                    pathname === link.href ? "text-primary font-bold" : "text-neutral-dark"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-neutral-100">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-primary text-white px-6 py-4 rounded-sm text-lg font-medium hover:bg-primary-light transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Become a Member
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
