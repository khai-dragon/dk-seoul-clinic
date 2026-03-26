"use client";

import Link from "next/link";
import { useState } from "react";
import { menuData } from "@/lib/menu-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-lg border-b border-border-color/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-3xl font-semibold text-primary italic tracking-tight">DK</span>
            <div className="w-px h-6 bg-border-color" />
            <span className="text-[13px] font-medium tracking-[0.08em] text-foreground/90 uppercase">Seoul Clinic</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0">
            {menuData.map((item) => (
              <div key={item.name} className="nav-item relative">
                <Link
                  href={item.href}
                  className="px-5 py-2 text-[13px] font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
                <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-white rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-border-color/60 p-5 min-w-[220px]">
                    <p className="text-[11px] font-medium tracking-[0.12em] text-accent uppercase mb-3">{item.name}</p>
                    <div className="w-6 h-px bg-accent/40 mb-3" />
                    <div className="flex flex-col gap-0.5">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="px-3 py-2 text-[13px] text-text-muted hover:text-foreground hover:bg-section-bg/60 rounded-sm transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-2.5 bg-primary text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-primary-light transition-colors"
            >
              Reservation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-5 h-5 text-foreground/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border-color/50 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 space-y-1">
            {menuData.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => setOpenSub(openSub === item.name ? null : item.name)}
                  className="flex items-center justify-between w-full px-3 py-3 text-[13px] font-medium text-foreground/80 hover:text-foreground tracking-wide"
                >
                  {item.name}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform text-text-muted ${openSub === item.name ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSub === item.name && (
                  <div className="pl-4 space-y-0.5 pb-3 border-l border-accent/20 ml-3">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2 text-[13px] text-text-muted hover:text-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-border-color">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3.5 bg-primary text-white text-[12px] font-medium tracking-[0.1em] uppercase"
                onClick={() => setMobileOpen(false)}
              >
                Reservation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
