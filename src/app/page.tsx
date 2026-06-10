import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageVerticalLines } from "@/components/chaingpt/PageVerticalLines";
import { AsideSectionNav } from "@/components/chaingpt/AsideSectionNav";
import { ChainGPTHero } from "@/components/chaingpt/ChainGPTHero";
import { BuyerEntrySection } from "@/components/chaingpt/BuyerEntrySection";
import { UnlimitedSolutions } from "@/components/chaingpt/UnlimitedSolutions";
import { SolutionsSection } from "@/components/chaingpt/SolutionsSection";
import { CaseStudiesSection } from "@/components/chaingpt/CaseStudiesSection";
import { EcosystemSection } from "@/components/chaingpt/EcosystemSection";
import { PricingSection } from "@/components/chaingpt/PricingSection";
import { TokenSection } from "@/components/chaingpt/TokenSection";
import { TeamSection } from "@/components/chaingpt/TeamSection";
import { RoadmapSection } from "@/components/chaingpt/RoadmapSection";
import { FAQSection } from "@/components/chaingpt/FAQSection";
import { RevolutionSection } from "@/components/chaingpt/RevolutionSection";
import { AsSeenOnSection } from "@/components/chaingpt/AsSeenOnSection";
import { CommunitySection } from "@/components/chaingpt/CommunitySection";
import { DifferentiatorSection } from "@/components/chaingpt/DifferentiatorSection";
import { ClosingCTASection } from "@/components/chaingpt/ClosingCTASection";

export default function Home() {
  return (
    <div id="page-root" className="relative">
      <PageVerticalLines />
      <AsideSectionNav />
      <Header />
      <main className="relative z-10">
        <ChainGPTHero />
        <BuyerEntrySection />
        <UnlimitedSolutions />
        <SolutionsSection />
        <CaseStudiesSection />
        <EcosystemSection />
        <PricingSection />
        <TokenSection />
        <TeamSection />
        <RoadmapSection />
        <FAQSection />
        <RevolutionSection />
        <AsSeenOnSection />
        <CommunitySection />
        <DifferentiatorSection />
        <ClosingCTASection />
      </main>
      <Footer />
    </div>
  );
}
