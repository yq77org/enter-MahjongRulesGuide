import { TileGroup } from "./MahjongTile";

const tileCategories = [
  {
    name: "万子",
    english: "Characters",
    description: "一万到九万，每种4张，共36张",
    tiles: [
      { symbol: "一", type: "wan" as const },
      { symbol: "二", type: "wan" as const },
      { symbol: "三", type: "wan" as const },
      { symbol: "四", type: "wan" as const },
      { symbol: "五", type: "wan" as const },
      { symbol: "六", type: "wan" as const },
      { symbol: "七", type: "wan" as const },
      { symbol: "八", type: "wan" as const },
      { symbol: "九", type: "wan" as const },
    ],
  },
  {
    name: "筒子",
    english: "Dots",
    description: "一筒到九筒，每种4张，共36张",
    tiles: [
      { symbol: "①", type: "tong" as const },
      { symbol: "②", type: "tong" as const },
      { symbol: "③", type: "tong" as const },
      { symbol: "④", type: "tong" as const },
      { symbol: "⑤", type: "tong" as const },
      { symbol: "⑥", type: "tong" as const },
      { symbol: "⑦", type: "tong" as const },
      { symbol: "⑧", type: "tong" as const },
      { symbol: "⑨", type: "tong" as const },
    ],
  },
  {
    name: "条子",
    english: "Bamboo",
    description: "一条到九条，每种4张，共36张",
    tiles: [
      { symbol: "1", type: "tiao" as const },
      { symbol: "2", type: "tiao" as const },
      { symbol: "3", type: "tiao" as const },
      { symbol: "4", type: "tiao" as const },
      { symbol: "5", type: "tiao" as const },
      { symbol: "6", type: "tiao" as const },
      { symbol: "7", type: "tiao" as const },
      { symbol: "8", type: "tiao" as const },
      { symbol: "9", type: "tiao" as const },
    ],
  },
  {
    name: "字牌",
    english: "Honors",
    description: "风牌（东南西北）和三元牌（中发白），每种4张，共28张",
    tiles: [
      { symbol: "東", type: "zi" as const },
      { symbol: "南", type: "zi" as const },
      { symbol: "西", type: "zi" as const },
      { symbol: "北", type: "zi" as const },
      { symbol: "中", type: "zi" as const },
      { symbol: "發", type: "zi" as const },
      { symbol: "白", type: "zi" as const },
    ],
  },
];

export function TileTypesSection() {
  return (
    <section id="tiles" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4">
            牌型介绍
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            麻将牌的种类
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            麻将牌分为序数牌和字牌两大类，了解每种牌的特性是学习麻将的第一步
          </p>
        </div>

        <div className="space-y-8">
          {tileCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display font-bold text-2xl text-foreground">
                      {category.name}
                    </h3>
                    <span className="text-sm text-muted-foreground font-display">
                      {category.english}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="md:w-3/4">
                  <TileGroup tiles={category.tiles} size="md" className="justify-start md:justify-center" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Count */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-light px-8 py-4 rounded-full">
            <span className="text-primary font-display font-semibold">
              标准麻将共有 <span className="text-2xl font-bold">136</span> 张牌
            </span>
          </div>
          <p className="mt-4 text-muted-foreground text-sm">
            （部分地区规则会加入花牌8张，共144张）
          </p>
        </div>
      </div>
    </section>
  );
}
