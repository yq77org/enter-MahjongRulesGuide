import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { TileTypesSection } from "@/components/TileTypesSection";
import { BasicRulesSection } from "@/components/BasicRulesSection";
import { WinningHandsSection } from "@/components/WinningHandsSection";
import { ScoringSection } from "@/components/ScoringSection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <IntroductionSection />
        <TileTypesSection />
        <BasicRulesSection />
        <WinningHandsSection />
        <ScoringSection />
      </main>
      <Footer />
    </div>
  );
}
