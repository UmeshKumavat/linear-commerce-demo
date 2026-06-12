"use client";

import { useEffect, useState } from "react";
import { HeroWebGL } from "@/components/chaingpt/HeroWebGL";
import { HeroPromptSlider } from "@/components/chaingpt/HeroPromptSlider";
import { HeroFeatureSlider } from "@/components/chaingpt/HeroFeatureSlider";
import { HeroHeadings } from "@/components/chaingpt/HeroHeadings";
import { HeroServiceNav } from "@/components/chaingpt/HeroServiceNav";
import { ScrollExploreLink } from "@/components/chaingpt/ScrollExploreLink";
import { HeroConnectionLines } from "@/components/chaingpt/HeroConnectionLines";
import { HERO_FEATURES } from "@/lib/cgpt-data";

export function ChainGPTHero() {
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFeatureIndex((i) => (i + 1) % HERO_FEATURES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="intro" className="cgpt-hero cgpt-grid-bg">
      {/* fixed full-viewport canvas, z-index: 5 */}
      <HeroWebGL />
      {/* fixed right service nav panel, z-index: 11 */}
      <HeroServiceNav />

      <div className="cgpt-hero-flex">
        {/* Info row: left prompt + right feature, inside rails column */}
        <div
          className="lc-page-column cgpt-hero-info"
          style={{ paddingTop: "7vh" }}
        >
          <HeroConnectionLines />
          <div className="cgpt-hero-info-left">
            <HeroPromptSlider index={featureIndex} />
          </div>
          <div className="cgpt-hero-info-right">
            <HeroFeatureSlider index={featureIndex} />
          </div>
        </div>

        {/* Bottom row: full width, 3-col grid aligned to rails */}
        <div className="cgpt-hero-bottom">
          <div className="cgpt-hero-bottom-left">
            <HeroHeadings />
          </div>
          <div className="cgpt-hero-bottom-center">
            <p className="cgpt-hero-anim-text">
              WE HAVE NEVER RETURNED A COMMERCE PROBLEM UNSOLVED.
            </p>
          </div>
          <div className="cgpt-hero-bottom-right">
            <ScrollExploreLink />
          </div>
        </div>
      </div>
    </section>
  );
}
