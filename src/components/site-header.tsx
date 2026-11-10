"use client";

import { useEffect, useState } from "react";

import { ArrowUpRightIcon, BoltIcon } from "@/components/icons";
import { navLinks } from "@/data/portfolio";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 16);
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-hidden rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:px-4 ${
          scrolled
            ? "border-white/15 bg-[#070b13]/80 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
            : "border-white/10 bg-white/[0.035] backdrop-blur-xl"
        }`}
      >
        <a
          href="#home"
          aria-label="TURJO — back to top"
          className="group flex items-center gap-2.5"
        >
          <span className="grid size-9 place-items-center rounded-xl border border-mint/25 bg-mint/10 text-mint shadow-[0_0_24px_-8px_rgba(125,255,206,0.6)] transition-colors duration-300 group-hover:bg-mint/15">
            <BoltIcon className="size-4" />
          </span>
          <span className="text-[13px] font-semibold tracking-[0.24em] text-white">
            TURJO
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-0.5 md:flex"
        >
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-full px-3.5 py-2 text-[13px] transition-colors duration-300 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn btn-primary hidden px-4 py-2 text-xs sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRightIcon />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              aria-hidden="true"
              className={`block h-px w-4 bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden="true"
              className={`mt-1 block h-px w-4 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <span
          aria-hidden="true"
          className="absolute inset-x-4 bottom-0 h-px overflow-hidden bg-white/5"
        >
          <span
            className="block h-full origin-left bg-[linear-gradient(90deg,rgba(125,255,206,0.9),rgba(159,196,255,0.9))] transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </span>
      </div>

      {open ? (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-6xl md:hidden">
          <div className="glass rounded-2xl p-2">
            <nav aria-label="Mobile" className="grid gap-1">
              {navLinks.map((link) => {
                const id = link.href.slice(1);

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "location" : undefined}
                    className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                      active === id
                        ? "bg-white/10 text-white"
                        : "text-white/65 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full"
            >
              Start a project
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
