import { DICTS, type Lang } from "@/lib/i18n";
import ChampionBadge from "./ChampionBadge";

export default function Roastery({ lang }: { lang: Lang }) {
  const t = DICTS[lang].roastery;

  return (
    <section id="roastery" className="bg-ink px-4 py-20 text-cloud sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="flex flex-col">
          <h2 lang="en" className="display max-w-[12ch] text-[clamp(2.75rem,6.5vw,5.5rem)] text-cloud">
            {t.title}
          </h2>
          <div className="mt-8 max-w-[52ch] space-y-4 text-lg text-cloud/90">
            {t.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-6 pt-12 text-marigold">
            <ChampionBadge title={t.award} year={t.awardYear} />
            <p className="max-w-[18ch] text-xl font-semibold leading-snug">
              {t.award}, {t.awardYear}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/photos/green-bean-sacks.webp"
            alt={t.sacksAlt}
            width={566}
            height={984}
            loading="lazy"
            className="h-full w-full rounded-sm object-cover"
          />
          <img
            src="/photos/shelf.webp"
            alt={t.shelfAlt}
            width={565}
            height={898}
            loading="lazy"
            className="mt-16 h-auto w-full self-start rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
