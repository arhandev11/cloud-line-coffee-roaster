// The lowercase wordmark from the bag labels, for places too small for the mascot lockup.
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`} aria-hidden="true">
      <span className="text-[1.65rem] font-extrabold tracking-[-0.045em]">cloudline</span>
      <span className="mt-0.5 text-[0.5rem] font-semibold tracking-[0.24em]">COFFEE ROASTERS</span>
    </span>
  );
}
