const scoringTable = [
  { name: "平胡", fan: "1番", description: "基本胡牌型" },
  { name: "门清", fan: "1番", description: "没有吃碰杠，全靠自摸" },
  { name: "自摸", fan: "1番", description: "自己摸到胡牌的那张" },
  { name: "对对胡", fan: "2番", description: "全部是刻子" },
  { name: "七对", fan: "2番", description: "7对相同的牌" },
  { name: "混一色", fan: "2番", description: "一种花色+字牌" },
  { name: "小三元", fan: "2番", description: "两组三元牌刻子+一对三元牌" },
  { name: "清一色", fan: "4番", description: "只有一种花色" },
  { name: "杠上开花", fan: "1番", description: "杠后补牌正好胡牌" },
  { name: "海底捞月", fan: "1番", description: "摸最后一张牌胡牌" },
  { name: "大三元", fan: "8番", description: "中发白各一组刻子" },
  { name: "字一色", fan: "8番", description: "全部是字牌" },
];

export function ScoringSection() {
  return (
    <section id="scoring" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4">
            番数计算
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            计分规则
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            不同的胡牌牌型对应不同的番数，番数越高得分越多
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-12 bg-primary text-primary-foreground px-6 py-4 font-display font-semibold">
              <div className="col-span-3">牌型</div>
              <div className="col-span-2 text-center">番数</div>
              <div className="col-span-7">说明</div>
            </div>
            {scoringTable.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-12 px-6 py-4 items-center ${
                  index % 2 === 0 ? "bg-background" : "bg-muted/30"
                } hover:bg-primary-light/50 transition-colors`}
              >
                <div className="col-span-3 font-display font-semibold text-foreground">
                  {item.name}
                </div>
                <div className="col-span-2 text-center">
                  <span className="inline-block px-3 py-1 bg-gold/20 text-tile-zi rounded-full text-sm font-display font-semibold">
                    {item.fan}
                  </span>
                </div>
                <div className="col-span-7 text-muted-foreground text-sm">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary-light rounded-xl">
            <h4 className="font-display font-semibold text-foreground mb-3">计分提示</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>各地区麻将规则和番数计算可能略有不同，请以当地规则为准</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>番数可以叠加，如"清一色+对对胡"可获得更高番数</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>部分高番牌型极难达成，建议初学者从基础牌型开始练习</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
