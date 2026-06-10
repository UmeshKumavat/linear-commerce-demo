interface LinearCommerceLogoProps {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 28, text: "text-sm" },
  md: { icon: 36, text: "text-base" },
  lg: { icon: 48, text: "text-xl" },
};

export function LinearCommerceLogo({
  className = "",
  color = "#4F6BFF",
  size = "md",
}: LinearCommerceLogoProps) {
  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M8 8 L24 8 L24 16 L16 16 L16 32 L8 32 Z" fill={color} />
        <path d="M40 8 L24 8 L24 16 L32 16 L32 32 L40 32 Z" fill={color} />
        <path d="M8 40 L24 40 L24 32 L16 32 L16 24 L8 24 Z" fill={color} opacity={0.85} />
        <path d="M40 40 L24 40 L24 32 L32 32 L32 24 L40 24 Z" fill={color} opacity={0.85} />
      </svg>
      <div className={`leading-tight font-semibold tracking-tight ${text}`}>
        <div className="relative inline-block" style={{ color }}>
          Linear
          <sup className="absolute -right-3 -top-0.5 text-[0.45em] font-normal">®</sup>
        </div>
        <div style={{ color }}>Commerce</div>
      </div>
    </div>
  );
}
