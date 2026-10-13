"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-tight"
        >
          NAMARATHA
        </a>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
  type="button"
  onClick={() => setMenuOpen((open) => !open)}
  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 ${
    menuOpen
      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
      : "border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
  }`}
  aria-expanded={menuOpen}
  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
>
  {menuOpen ? <X size={19} strokeWidth={1.8} /> : <Menu size={19} strokeWidth={1.8} />}
</button>
        </div>
      </div>

      {/* Compact Menu */}
      {menuOpen && (
        <div className="absolute right-6 top-[4.25rem] z-50 w-56 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3 shadow-2xl lg:right-10">
          <div className="grid gap-1">
            <a
  href="/#top"
  onClick={closeMenu}
  className="rounded-xl px-4 py-3 text-sm transition hover:bg-[var(--surface)] hover:text-[var(--accent)]"
>
  Home
</a>
            <a
              href="/#work"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm transition hover:bg-[var(--surface)] hover:text-[var(--accent)]"
            >
              Projects
            </a>

            <a
              href="/#about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm transition hover:bg-[var(--surface)] hover:text-[var(--accent)]"
            >
              About
            </a>

            <a
              href="/#experience"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm transition hover:bg-[var(--surface)] hover:text-[var(--accent)]"
            >
              Work
            </a>

            <a
              href="/#contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm transition hover:bg-[var(--surface)] hover:text-[var(--accent)]"
            >
              Contact
            </a>

            <div className="my-2 border-t border-[var(--border)]" />

            <a
              href="/resume/Namaratha_Karanth_Data_Analytics_V3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm transition hover:bg-[var(--surface)] hover:text-[var(--accent)]"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}