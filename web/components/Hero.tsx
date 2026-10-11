import { DICTS, type Lang } from "@/lib/i18n";
import { ADDRESS } from "@/lib/site";
import LogoStage from "./LogoStage";
import OpenStatus from "./OpenStatus";

// Laid out like the Public Cupping poster: a giant word above the mascot, a giant
// word below it, and the practical details tucked into the corners.
export default function Hero({ lang }: { lang: Lang }) {
  const t = DICTS[lang].hero;

  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-4 sm:px-6">
      <h1 className="sr-only">
        Cloudline Coffee Roasters. {t.titleTop} {t.titleBottom}.
      </h1>

      <div className="mx-auto max-w-7xl">
        <p className="flex justify-end text-sm font-medium sm:text-base">
          <OpenStatus lang={lang} />
        </p>

        <p aria-hidden="true" className="display hero-word outlined mt-1">
          {t.titleTop}
        </p>

        <LogoStage className="hero-stage relative z-10 mx-auto -mt-[2.5vw]" />

        <p
          aria-hidden="true"
          className="display hero-word outlined -mt-[1.5vw] pb-[0.14em] text-right"
        >
          {t.titleBottom}
        </p>

        <div className="flex flex-wrap justify-between gap-x-8 gap-y-1 text-sm font-medium sm:text-base">
          <span>{ADDRESS}</span>
          <span>{t.hoursShort}</span>
        </div>

        <div className="mt-12 grid gap-8 border-t-2 border-ink pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-[38ch] text-xl leading-snug sm:text-2xl">{t.lede}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#beans"
              className="rounded-full border-2 border-ink bg-marigold px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            >
              {t.shop}
            </a>
            <a
              href="#bar"
              className="rounded-full border-2 border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-paper"
            >
              {t.visit}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
