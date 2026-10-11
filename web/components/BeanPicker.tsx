"use client";

import { useRef, useState } from "react";
import { BEANS } from "@/lib/beans";
import { DICTS, type Lang } from "@/lib/i18n";
import { MARKETPLACES } from "@/lib/site";

// A bubble filled with the bean's label colours, drawn like the logo's letter bubbles.
function Swatch({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 rounded-full border-2 border-ink ${className}`}
      style={{ background: label }}
    />
  );
}

export default function BeanPicker({ lang }: { lang: Lang }) {
  const t = DICTS[lang].beans;
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const bean = BEANS[index];

  const select = (i: number) => {
    const next = (i + BEANS.length) % BEANS.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: BEANS.length - 1,
    };
    if (e.key in moves) {
      e.preventDefault();
      select(moves[e.key]);
    }
  };

  const specs: [string, string][] = [
    [t.process, bean.process[lang]],
    [t.origin, bean.origin],
    [t.variety, bean.variety],
    [t.altitude, bean.altitude],
    ...(bean.producer ? [[t.producer, bean.producer] as [string, string]] : []),
    [t.size, bean.roast ? `${bean.sizes}, ${bean.roast[lang].toLowerCase()}` : bean.sizes],
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-0">
      {/* The list of beans: chips that scroll sideways on small screens, a column of names on large ones. */}
      <div
        role="tablist"
        aria-label={t.title}
        onKeyDown={onKeyDown}
        className="shelf -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:col-span-2 lg:col-span-1 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {BEANS.map((b, i) => {
          const selected = i === index;
          return (
            <button
              key={b.slug}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`bean-tab-${b.slug}`}
              aria-selected={selected}
              aria-controls="bean-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className={`flex shrink-0 items-center gap-3 rounded-full border-2 border-ink py-1.5 pl-1.5 pr-4 text-left lg:rounded-none lg:border-0 lg:border-t-2 lg:py-4 lg:pl-0 lg:pr-0 lg:last:border-b-2 ${
                selected ? "bg-ink text-paper lg:bg-transparent lg:text-ink" : "text-ink lg:text-ink/70 lg:hover:text-ink"
              }`}
            >
              <Swatch label={b.label} className="size-7 lg:size-10" />
              <span className="flex min-w-0 flex-col">
                <span className="whitespace-nowrap font-semibold lg:whitespace-normal lg:font-display lg:text-[clamp(1.6rem,2.4vw,2.25rem)] lg:font-black lg:leading-[0.95] lg:tracking-[-0.035em] lg:[font-variation-settings:'wdth'_108]">
                  {b.name}
                </span>
                <span className="hidden text-sm lg:block">
                  {b.origin}, {b.process[lang].toLowerCase()}
                </span>
              </span>
              {/* Ties the selected name to its label across the gap. */}
              <span
                aria-hidden="true"
                className={`ml-2 hidden h-0.5 flex-1 self-center bg-ink lg:block ${selected ? "" : "invisible"}`}
              />
            </button>
          );
        })}
      </div>

      <div id="bean-panel" role="tabpanel" aria-labelledby={`bean-tab-${bean.slug}`} className="contents">
        {/* The printed bag label, in this bean's own colours. */}
        <div key={`label-${bean.slug}`} className="bean-swap lg:pr-10">
          <div
            className="flex aspect-[4/3] flex-col rounded-[4px] border-2 border-ink p-6 text-white sm:aspect-[5/4] md:aspect-[4/5]"
            style={{ background: bean.label }}
          >
            <span
              aria-hidden="true"
              className={`self-center text-center leading-none ${bean.nameAlign === "end" ? "text-ink-deep/80" : ""}`}
            >
              <span className="block text-xl font-extrabold tracking-[-0.045em]">cloudline</span>
              <span className="mt-0.5 block text-[0.5rem] font-semibold tracking-[0.24em]">COFFEE ROASTERS</span>
            </span>
            <p
              aria-hidden="true"
              className={`display text-[clamp(2.25rem,4.5vw,4rem)] [text-wrap:balance] ${
                bean.nameAlign === "center" ? "my-auto text-center" : "mt-auto"
              }`}
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {bean.name}
            </p>
            <span
              aria-hidden="true"
              className={`text-sm font-medium ${bean.nameAlign === "center" ? "text-center" : "mt-3"}`}
            >
              {bean.origin}
            </span>
          </div>
        </div>

        <div key={`info-${bean.slug}`} className="bean-swap flex flex-col">
          <h3 className="sr-only">{bean.name}</h3>
          {bean.notesWithMilk ? (
            <dl className="space-y-5">
              <div>
                <dt className="text-sm">{t.notesBlack}</dt>
                <dd className="mt-1 text-2xl font-semibold leading-snug sm:text-[1.75rem]">{bean.notes[lang]}</dd>
              </div>
              <div>
                <dt className="text-sm">{t.notesWithMilk}</dt>
                <dd className="mt-1 text-2xl font-semibold leading-snug sm:text-[1.75rem]">{bean.notesWithMilk[lang]}</dd>
              </div>
            </dl>
          ) : (
            <dl>
              <dt className="text-sm">{t.notes}</dt>
              <dd className="mt-1 text-2xl font-semibold leading-snug sm:text-[1.75rem]">{bean.notes[lang]}</dd>
            </dl>
          )}

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t-2 border-ink pt-5">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt className="text-sm">{k}</dt>
                <dd className="font-semibold leading-snug">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
            {MARKETPLACES.map((m, i) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border-2 border-ink px-6 py-3 font-semibold ${
                  i === 0 ? "bg-marigold" : "hover:bg-ink hover:text-paper"
                }`}
              >
                {t.buyOn(m.name)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
