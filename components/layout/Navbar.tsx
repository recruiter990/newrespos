"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
              DM
            </div>
            <span className="text-xl font-heading font-bold text-dark dark:text-light">
              Digital Agency
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  pathname === link.href
                    ? "text-primary"
                    : "text-dark dark:text-light hover:text-primary"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full",
                    pathname === link.href && "w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" || !theme) ? (
                <Sun className="h-5 w-5 text-dark dark:text-light" />
              ) : (
                <Moon className="h-5 w-5 text-dark dark:text-light" />
              )}
            </button>
            <Button asChild size="sm">
              <Link href="/contact">Contatti</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" || !theme) ? (
                <Sun className="h-5 w-5 text-dark dark:text-light" />
              ) : (
                <Moon className="h-5 w-5 text-dark dark:text-light" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-dark dark:text-light" />
              ) : (
                <Menu className="h-6 w-6 text-dark dark:text-light" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-strong border-t border-white/10">
          <div className="container-custom py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-dark dark:text-light hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contatti
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

