import { BEANS, type Bean } from "@/lib/beans";
import { DICTS, type Lang } from "@/lib/i18n";
import { MARKETPLACES } from "@/lib/site";

function BeanCard({ bean, lang }: { bean: Bean; lang: Lang }) {
  const t = DICTS[lang].beans;

  const specs: [string, string][] = [
    [t.process, bean.process[lang]],
    [t.origin, bean.origin],
    [t.variety, bean.variety],
    [t.altitude, bean.altitude],
    ...(bean.producer ? [[t.producer, bean.producer] as [string, string]] : []),
    [t.size, bean.roast ? `${bean.sizes}, ${bean.roast[lang]}` : bean.sizes],
  ];

  return (
    <article className="flex w-[19rem] shrink-0 snap-start flex-col rounded-md border-2 border-ink bg-pouch p-3 xl:w-auto">
      {/* The printed label, in the bag's own colours. */}
      <div className="flex aspect-[4/5] flex-col rounded-[3px] p-5 text-white" style={{ background: bean.label }}>
        <span
          className={`self-center text-[0.95rem] font-extrabold leading-none tracking-[-0.04em] ${
            bean.nameAlign === "end" ? "text-ink-deep/80" : ""
          }`}
          aria-hidden="true"
        >
          cloudline
        </span>
        <h3
          className={`display text-[2.15rem] [text-wrap:balance] ${
            bean.nameAlign === "center" ? "my-auto text-center" : "mt-auto"
          }`}
          style={{ fontVariationSettings: '"wdth" 100', lineHeight: 0.92 }}
        >
          {bean.name}
        </h3>
        <span className={`text-sm font-medium ${bean.nameAlign === "center" ? "text-center" : "mt-2"}`} aria-hidden="true">
          {bean.origin}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-4">
        {bean.notesWithMilk ? (
          <dl className="space-y-2">
            <div>
              <dt className="text-sm text-ink/70">{t.notesBlack}</dt>
              <dd className="font-medium leading-snug">{bean.notes[lang]}</dd>
            </div>
            <div>
              <dt className="text-sm text-ink/70">{t.notesWithMilk}</dt>
              <dd className="font-medium leading-snug">{bean.notesWithMilk[lang]}</dd>
            </div>
          </dl>
        ) : (
          <dl>
            <dt className="text-sm text-ink/70">{t.notes}</dt>
            <dd className="font-medium leading-snug">{bean.notes[lang]}</dd>
          </dl>
        )}

        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-t border-ink/25 pt-3 text-sm">
          {specs.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-ink/70">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-col gap-2 pt-5">
          {MARKETPLACES.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-ink px-3 py-2 text-center text-sm font-semibold hover:bg-ink hover:text-pouch"
            >
              {t.buyOn(m.name)}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Beans({ lang }: { lang: Lang }) {
  const t = DICTS[lang].beans;

  return (
    <section id="beans" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <h2 className="display text-[clamp(2.75rem,6.5vw,5.5rem)]">{t.title}</h2>
          <p className="max-w-[44ch] text-lg md:justify-self-end">{t.lede}</p>
        </div>
      </div>

      <div className="shelf mx-auto mt-12 flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 xl:grid xl:grid-cols-5 xl:overflow-visible">
        {BEANS.map((b) => (
          <BeanCard key={b.slug} bean={b} lang={lang} />
        ))}
      </div>
    </section>
  );
}
