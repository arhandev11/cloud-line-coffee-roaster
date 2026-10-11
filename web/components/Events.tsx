import { DICTS, type Lang } from "@/lib/i18n";
import { INSTAGRAM_URL } from "@/lib/site";

// Small fixed tilts so the posters read as pinned up, not as a product grid.
const TILT = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export default function Events({ lang }: { lang: Lang }) {
  const t = DICTS[lang].events;

  return (
    <section id="events" className="bg-ink px-4 py-20 text-cloud sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(2.75rem,6.5vw,5.5rem)]">{t.title}</h2>
            <p className="mt-6 max-w-[52ch] text-lg text-cloud/90">{t.body}</p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start justify-self-start rounded-full border-2 border-marigold bg-marigold px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5 lg:self-end"
          >
            {t.follow}
          </a>
        </div>

        <ul className="mt-14 grid grid-cols-2 items-start gap-5 sm:gap-8 lg:grid-cols-4">
          {t.posters.map((p, i) => (
            <li key={p.src} className={`${TILT[i % TILT.length]} ${i % 2 ? "mt-8" : ""}`}>
              <img
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                className="w-full shadow-[6px_8px_0_0_var(--color-ink-deep)]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
