// The mascot lockup, split so the bubble letters can roll into place on load.
// Positions are percentages of the lockup canvas (1032 × 756), measured from the artwork.
const LETTERS = [
  { name: "cl", left: 0.969, top: 56.085, width: 19.864 },
  { name: "o", left: 19.38, top: 77.778, width: 12.791 },
  { name: "u", left: 32.364, top: 81.349, width: 13.081 },
  { name: "d", left: 45.64, top: 79.497, width: 12.888 },
  { name: "l", left: 58.721, top: 78.042, width: 12.403 },
  { name: "in", left: 70.93, top: 63.624, width: 24.322 },
  { name: "e", left: 85.368, top: 44.841, width: 12.694 },
];

export default function LogoStage({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[1032/756] [container-type:inline-size] ${className}`}
      role="img"
      aria-label="Cloudline Coffee Roasters mascot: a cloud in a cap, running and pointing up. Under God is how we play."
    >
      <img
        src="/logo/mascot.webp"
        alt=""
        width={1032}
        height={756}
        className="absolute inset-0 h-full w-full"
        fetchPriority="high"
      />
      {LETTERS.map((l, i) => {
        // Start just past the stage's left edge and turn as far as a wheel of
        // this diameter would over that distance, so it reads as rolling, not spinning.
        const dx = l.left + l.width + 8;
        const turn = dx / (Math.PI * l.width);
        return (
          <img
            key={l.name}
            src={`/logo/letter-${l.name}.webp`}
            alt=""
            className="roll-in absolute h-auto"
            style={
              {
                left: `${l.left}%`,
                top: `${l.top}%`,
                width: `${l.width}%`,
                "--i": i,
                "--dx": dx.toFixed(2),
                "--turn": turn.toFixed(3),
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
