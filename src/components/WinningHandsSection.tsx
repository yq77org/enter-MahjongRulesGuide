import { TileGroup } from "./MahjongTile";

const winningHands = [
  {
    name: "平胡",
    description: "最基础的胡牌方式，4组顺子/刻子+1对将牌",
    fan: "1番",
    example: [
      { symbol: "一", type: "wan" as const },
      { symbol: "二", type: "wan" as const },
      { symbol: "三", type: "wan" as const },
      { symbol: "④", type: "tong" as const },
      { symbol: "⑤", type: "tong" as const },
      { symbol: "⑥", type: "tong" as const },
      { symbol: "7", type: "tiao" as const },
      { symbol: "7", type: "tiao" as const },
      { symbol: "7", type: "tiao" as const },
      { symbol: "東", type: "zi" as const },
      { symbol: "東", type: "zi" as const },
      { symbol: "東", type: "zi" as const },
      { symbol: "九", type: "wan" as const },
      { symbol: "九", type: "wan" as const },
    ],
  },
  {
    name: "对对胡",
    description: "4组刻子+1对将牌，没有顺子",
    fan: "2番",
    example: [
      { symbol: "三", type: "wan" as const },
      { symbol: "三", type: "wan" as const },
      { symbol: "三", type: "wan" as const },
      { symbol: "⑦", type: "tong" as const },
      { symbol: "⑦", type: "tong" as const },
      { symbol: "⑦", type: "tong" as const },
      { symbol: "5", type: "tiao" as const },
      { symbol: "5", type: "tiao" as const },
      { symbol: "5", type: "tiao" as const },
      { symbol: "中", type: "zi" as const },
      { symbol: "中", type: "zi" as const },
      { symbol: "中", type: "zi" as const },
      { symbol: "發", type: "zi" as const },
      { symbol: "發", type: "zi" as const },
    ],
  },
  {
    name: "清一色",
    description: "只由一种花色的序数牌组成",
    fan: "4番",
    example: [
      { symbol: "一", type: "wan" as const },
      { symbol: "二", type: "wan" as const },
      { symbol: "三", type: "wan" as const },
      { symbol: "三", type: "wan" as const },
      { symbol: "四", type: "wan" as const },
      { symbol: "五", type: "wan" as const },
      { symbol: "六", type: "wan" as const },
      { symbol: "七", type: "wan" as const },
      { symbol: "八", type: "wan" as const },
      { symbol: "七", type: "wan" as const },
      { symbol: "七", type: "wan" as const },
      { symbol: "七", type: "wan" as const },
      { symbol: "九", type: "wan" as const },
      { symbol: "九", type: "wan" as const },
    ],
  },
  {
    name: "七对",
    description: "7对相同的牌，不需要顺子或刻子",
    fan: "2番",
    example: [
      { symbol: "一", type: "wan" as const },
      { symbol: "一", type: "wan" as const },
      { symbol: "五", type: "wan" as const },
      { symbol: "五", type: "wan" as const },
      { symbol: "③", type: "tong" as const },
      { symbol: "③", type: "tong" as const },
      { symbol: "⑧", type: "tong" as const },
      { symbol: "⑧", type: "tong" as const },
      { symbol: "2", type: "tiao" as const },
      { symbol: "2", type: "tiao" as const },
      { symbol: "東", type: "zi" as const },
      { symbol: "東", type: "zi" as const },
      { symbol: "白", type: "zi" as const },
      { symbol: "白", type: "zi" as const },
    ],
  },
];

export function WinningHandsSection() {
  return (
    <section id="winning" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4">
            胡牌方式
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            常见胡牌牌型
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            了解这些经典牌型，助你在牌桌上快速判断胡牌机会
          </p>
        </div>

        <div className="space-y-6">
          {winningHands.map((hand, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-1/4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-2xl text-foreground">
                      {hand.name}
                    </h3>
                    <span className="px-3 py-1 bg-gold/20 text-tile-zi rounded-full text-sm font-display font-semibold">
                      {hand.fan}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {hand.description}
                  </p>
                </div>
                <div className="lg:w-3/4 overflow-x-auto">
                  <TileGroup tiles={hand.example} size="sm" className="justify-start lg:justify-center" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Basic Hand Structure */}
        <div className="mt-16 bg-primary-light rounded-xl p-8">
          <h3 className="font-display font-bold text-xl text-foreground mb-4 text-center">
            基本胡牌公式
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="bg-card px-6 py-4 rounded-lg border border-border">
              <span className="font-display font-bold text-2xl text-primary">4</span>
              <span className="text-muted-foreground ml-2">组面子</span>
              <p className="text-xs text-muted-foreground mt-1">顺子或刻子</p>
            </div>
            <span className="text-2xl text-primary">+</span>
            <div className="bg-card px-6 py-4 rounded-lg border border-border">
              <span className="font-display font-bold text-2xl text-primary">1</span>
              <span className="text-muted-foreground ml-2">对将牌</span>
              <p className="text-xs text-muted-foreground mt-1">两张相同的牌</p>
            </div>
            <span className="text-2xl text-primary">=</span>
            <div className="bg-card px-6 py-4 rounded-lg border border-border">
              <span className="font-display font-bold text-2xl text-primary">14</span>
              <span className="text-muted-foreground ml-2">张牌</span>
              <p className="text-xs text-muted-foreground mt-1">标准胡牌手牌</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
