/** ChainGPT-style layout tokens */
export const CONTAINER_W = 1220;
export const CONTAINER_HALF = CONTAINER_W / 2;

/** Content column aligned to fixed 17% vertical rails */
export const pageColumn = "lc-page-column";

/** Rust-orange accent text (section subtitles, labels) */
export const textAccent = "lc-text-accent";
export const textAccentGradient = "lc-text-accent-gradient";
export const hoverAccent = "lc-hover-accent";

export const container =
  "mx-auto w-full max-w-[1220px] px-5 lg:px-8";

export const fullWrap =
  "mx-auto w-full max-w-[1280px] px-5 lg:px-8";

/** CSS calc for left/right vertical rail positions (aligned to 1220px column) */
export const railLeft = `max(1.25rem, calc(50% - ${CONTAINER_HALF}px))`;
export const railRight = `max(1.25rem, calc(50% - ${CONTAINER_HALF}px))`;
