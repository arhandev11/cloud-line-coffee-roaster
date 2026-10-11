import { DICTS, type Lang } from "@/lib/i18n";
import { ADDRESS, MAPS_URL } from "@/lib/site";

export default function Bar({ lang }: { lang: Lang }) {
  const t = DICTS[lang].bar;

  return (
    <section id="bar" className="border-t-2 border-ink px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="grid grid-cols-6 grid-rows-[auto_auto] gap-4">
          <img
            src="/photos/pour-over.webp"
            alt={t.pourAlt}
            width={568}
            height={984}
            loading="lazy"
            className="col-span-3 row-span-2 h-full w-full rounded-sm object-cover"
          />
          <img
            src="/photos/espresso-bar.webp"
            alt={t.barAlt}
            width={446}
            height={1000}
            loading="lazy"
            className="col-span-3 aspect-[4/5] w-full rounded-sm object-cover object-top"
          />
          <img
            src="/photos/storefront.webp"
            alt={t.frontAlt}
            width={795}
            height={988}
            loading="lazy"
            className="col-span-3 aspect-[4/5] w-full rounded-sm object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="display text-[clamp(2.75rem,6.5vw,5.5rem)]">{t.title}</h2>
          <p className="mt-6 max-w-[46ch] text-lg">{t.body}</p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-sm text-ink/70">{t.address}</dt>
              <dd className="mt-1 text-xl font-semibold leading-snug">{ADDRESS}</dd>
              <dd className="mt-1">{t.parking}</dd>
            </div>
            <div>
              <dt className="text-sm text-ink/70">{t.hours}</dt>
              <dd className="mt-1 grid max-w-sm grid-cols-[1fr_auto] gap-x-6 text-lg">
                <span>{t.weekdays}</span>
                <span className="font-semibold tabular-nums">08.00–21.00</span>
                <span>{t.weekends}</span>
                <span className="font-semibold tabular-nums">07.00–21.00</span>
              </dd>
            </div>
          </dl>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 self-start rounded-full border-2 border-ink bg-marigold px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
          >
            {t.directions}
          </a>
        </div>
      </div>
    </section>
  );
}
