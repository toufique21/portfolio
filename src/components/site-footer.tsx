import { BoltIcon, MailIcon } from "@/components/icons";
import { navLinks, profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-page flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl border border-mint/25 bg-mint/10 text-mint">
            <BoltIcon className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-white">
              TURJO
            </p>
            <p className="mt-0.5 text-[11px] text-white/40">{profile.role}</p>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-white"
          >
            <MailIcon className="size-3.5" />
            {profile.email}
          </a>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
            &copy; 2026 TURJO · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
