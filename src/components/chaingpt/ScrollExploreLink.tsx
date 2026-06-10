import { CGPT } from "@/lib/cgpt-assets";

export function ScrollExploreLink() {
  return (
    <a
      href="#unlimited-solutions"
      className="group ml-auto flex items-end gap-4 self-end pb-1"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[var(--cgpt-text)] opacity-35 transition-opacity group-hover:opacity-60">
        Scroll
      </span>
      <div className="relative">
        <img
          src={CGPT.arrowDown}
          alt="Arrow Down"
          width={36}
          height={40}
          className="transition-transform duration-300 group-hover:translate-y-1"
        />
        <img src={CGPT.corner} alt="" width={12} height={12} className="absolute bottom-0 left-0 rotate-180 cgpt-corner opacity-50" />
        <img src={CGPT.corner} alt="" width={12} height={12} className="absolute bottom-0 right-0 rotate-90 cgpt-corner opacity-50" />
      </div>
    </a>
  );
}
