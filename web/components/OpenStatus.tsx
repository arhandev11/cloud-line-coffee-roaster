"use client";

import { useEffect, useState } from "react";
import { HOURS } from "@/lib/site";
import { DICTS, type Lang } from "@/lib/i18n";

function jakartaNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, hour: Number(get("hour")) + Number(get("minute")) / 60 };
}

const fmt = (h: number) => `${String(h).padStart(2, "0")}.00`;

// Shows whether the bar is open right now, in Jakarta time. Renders the plain
// weekly hours on the server and swaps in the live status once in the browser.
export default function OpenStatus({ lang }: { lang: Lang }) {
  const t = DICTS[lang];
  const [label, setLabel] = useState<{ text: string; open: boolean } | null>(null);

  useEffect(() => {
    const update = () => {
      const { day, hour } = jakartaNow();
      const today = HOURS[day];
      if (hour >= today.open && hour < today.close) {
        setLabel({ text: t.status.open(fmt(today.close)), open: true });
      } else if (hour < today.open) {
        setLabel({ text: t.status.closed(fmt(today.open), true), open: false });
      } else {
        setLabel({ text: t.status.closed(fmt(HOURS[(day + 1) % 7].open), false), open: false });
      }
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [t]);

  return (
    <span className="inline-flex items-center gap-2">
      {label && (
        <span
          aria-hidden="true"
          className={`size-2.5 rounded-full border-2 border-ink ${label.open ? "bg-marigold" : "bg-transparent"}`}
        />
      )}
      {label ? label.text : t.hero.hoursShort}
    </span>
  );
}
