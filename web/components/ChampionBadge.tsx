// Redrawn from the seal printed on every bag: text running round a ring.
export default function ChampionBadge({ title, year }: { title: string; year: string }) {
  const ring = `${title.toUpperCase()} ${year} • ${title.toUpperCase()} ${year} • `;
  return (
    <svg viewBox="0 0 200 200" className="size-40 shrink-0 sm:size-48" aria-hidden="true">
      <defs>
        <path id="badge-ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="2" />
      <text fontSize="11.2" fontWeight="700" letterSpacing="1.2" fill="currentColor">
        <textPath href="#badge-ring" textLength="486">
          {ring}
        </textPath>
      </text>
      <text
        x="100"
        y="114"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, letterSpacing: "-0.03em" }}
      >
        {year}
      </text>
    </svg>
  );
}
