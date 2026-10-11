import { DICTS, type Lang } from "@/lib/i18n";
import BeanPicker from "./BeanPicker";

export default function Beans({ lang }: { lang: Lang }) {
  const t = DICTS[lang].beans;

  return (
    <section id="beans" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
          <h2 className="display text-[clamp(2.75rem,6.5vw,5.5rem)]">{t.title}</h2>
          <p className="max-w-[44ch] text-lg lg:justify-self-end">{t.lede}</p>
        </div>

        <div className="mt-12 lg:mt-16">
          <BeanPicker lang={lang} />
        </div>
      </div>
    </section>
  );
}
