"use client";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "products", label: "Shop" },
  { id: "categories", label: "Categories" },
  { id: "features", label: "Features" },
  { id: "about", label: "About" },
];

export function BottomSectionNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 hidden border-t border-white/[0.06] bg-black/90 backdrop-blur-md lg:block">
      <div className="mx-auto flex max-w-[800px] items-center justify-between px-4 py-2">
        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-zinc-600">
          All Sections
        </span>
        <nav className="flex items-center gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-[#4ade80]"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
