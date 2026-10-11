"use client";

import { useState } from "react";
import { DICTS, HOME_PATH, type Lang } from "@/lib/i18n";
import Wordmark from "./Wordmark";

export default function Nav({ lang }: { lang: Lang }) {
  const t = DICTS[lang].nav;
  const other: Lang = lang === "en" ? "id" : "en";
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#beans", label: t.beans },
    { href: "#roastery", label: t.roastery },
    { href: "#bar", label: t.bar },
    { href: "#events", label: t.events },
    { href: "#wholesale", label: t.wholesale },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <a href={HOME_PATH[lang]} aria-label="Cloudline Coffee Roasters" className="shrink-0">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={HOME_PATH[other]}
            hrefLang={other}
            lang={other}
            aria-label={t.switchTo}
            className="grid h-10 min-w-10 place-items-center rounded-full border-2 border-ink px-2 text-sm font-semibold hover:bg-ink hover:text-paper"
          >
            {t.switchShort}
          </a>
          <button
            type="button"
            className="h-10 rounded-full border-2 border-ink bg-ink px-4 text-sm font-semibold text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t-2 border-ink px-4 pb-4 pt-2 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="display block py-2 text-4xl"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
