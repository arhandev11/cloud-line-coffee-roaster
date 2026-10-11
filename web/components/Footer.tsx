import { DICTS, type Lang } from "@/lib/i18n";
import { ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL, MAPS_URL } from "@/lib/site";

export default function Footer({ lang }: { lang: Lang }) {
  const t = DICTS[lang];

  return (
    <footer className="border-t-2 border-ink bg-cloud px-4 pb-10 pt-16 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
        <img
          src="/logo/lockup.webp"
          alt={`Cloudline Coffee Roasters. ${t.footer.tagline}`}
          width={1032}
          height={756}
          loading="lazy"
          className="w-full max-w-xl"
        />

        <div className="space-y-5 text-base">
          <p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              {ADDRESS}
            </a>
          </p>
          <p>
            {t.bar.weekdays} 08.00–21.00
            <br />
            {t.bar.weekends} 07.00–21.00
          </p>
          <p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
              @{INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-7xl border-t-2 border-ink pt-5 text-sm">
        © {new Date().getFullYear()} {t.footer.rights}
      </p>
    </footer>
  );
}
