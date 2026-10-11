import { DICTS, type Lang } from "@/lib/i18n";
import { INSTAGRAM_DM_URL } from "@/lib/site";

export default function Wholesale({ lang }: { lang: Lang }) {
  const t = DICTS[lang].wholesale;

  return (
    <section id="wholesale" className="bg-marigold px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <h2 className="display text-[clamp(2.75rem,6.5vw,5.5rem)]">{t.title}</h2>
          <p className="mt-6 max-w-[50ch] text-lg">{t.body}</p>
        </div>

        <div className="flex flex-col justify-end">
          <ul className="divide-y-2 divide-ink border-y-2 border-ink text-lg font-medium">
            {t.asks.map((a) => (
              <li key={a} className="py-3">
                {a}
              </li>
            ))}
          </ul>
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 self-start rounded-full border-2 border-ink bg-ink px-6 py-3 font-semibold text-marigold transition-transform hover:-translate-y-0.5"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
