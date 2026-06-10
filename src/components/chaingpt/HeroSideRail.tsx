import { CGPT } from "@/lib/cgpt-assets";

export function HeroSideRail() {
  return (
    <div className="pointer-events-none absolute -right-2 top-0 z-20 hidden h-full flex-col items-center justify-between py-8 xl:-right-4 lg:flex">
      <div className="flex flex-col items-center gap-2 pt-4">
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`block rounded-full ${i === 0 ? "h-1.5 w-1.5 bg-[#EFEFE5]/60" : "h-1 w-1 bg-[#EFEFE5]/15"}`}
            />
          ))}
        </div>
        <span
          className="mt-2 font-mono text-[8px] uppercase tracking-[0.35em] text-[#EFEFE5]/30"
          style={{ writingMode: "vertical-rl" }}
        >
          Intro
        </span>
      </div>

      <span
        className="font-mono text-[8px] uppercase tracking-[0.35em] text-[#EFEFE5]/25"
        style={{ writingMode: "vertical-rl" }}
      >
        Menu
      </span>
    </div>
  );
}

export function HeroCircuitLine({ progress: _progress }: { progress: number }) {
  return null;
}
