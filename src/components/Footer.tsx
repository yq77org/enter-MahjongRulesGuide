export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">麻</span>
            </div>
            <span className="font-display font-semibold text-lg">麻将规则指南</span>
          </div>

          <p className="text-background/60 text-sm text-center">
            祝您牌运亨通，好运连连
          </p>

          <div className="flex items-center gap-4 text-sm text-background/60">
            <a href="#introduction" className="hover:text-primary transition-colors">
              入门介绍
            </a>
            <span className="text-background/30">|</span>
            <a href="#tiles" className="hover:text-primary transition-colors">
              牌型介绍
            </a>
            <span className="text-background/30">|</span>
            <a href="#rules" className="hover:text-primary transition-colors">
              基础规则
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
