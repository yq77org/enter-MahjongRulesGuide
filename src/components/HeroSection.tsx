import { ChevronDown } from "lucide-react";
import { TileGroup } from "./MahjongTile";
const heroTiles = [{
  symbol: "一",
  type: "wan" as const
}, {
  symbol: "二",
  type: "wan" as const
}, {
  symbol: "三",
  type: "wan" as const
}, {
  symbol: "東",
  type: "zi" as const
}, {
  symbol: "發",
  type: "zi" as const
}];
export function HeroSection() {
  return <section className="relative min-h-screen flex items-center justify-center gradient-hero pt-16">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Floating Tiles */}
          <div className="flex justify-center mb-8 animate-float">
            <TileGroup tiles={heroTiles} size="lg" className="gap-2" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in-up">
            麻将规则指南
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{
          animationDelay: "0.1s"
        }}>从入门到精通，全面了解中国麻将的玩法与技巧!!</p>

          {/* CTA Button */}
          <a href="#introduction" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-display font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-elegant animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            开始学习
          </a>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>;
}