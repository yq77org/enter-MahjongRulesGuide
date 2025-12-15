import { ArrowRight } from "lucide-react";

const gameFlow = [
  {
    step: 1,
    title: "洗牌码牌",
    description: "将所有牌面朝下洗混后，每人码成两层牌墙",
  },
  {
    step: 2,
    title: "掷骰定位",
    description: "掷骰子确定庄家位置和开牌位置",
  },
  {
    step: 3,
    title: "起手摸牌",
    description: "庄家14张，其他玩家各13张",
  },
  {
    step: 4,
    title: "轮流出牌",
    description: "从庄家开始，顺时针依次摸一张打一张",
  },
  {
    step: 5,
    title: "吃碰杠胡",
    description: "可以吃上家的牌，碰任何人的牌，杠牌或胡牌",
  },
  {
    step: 6,
    title: "和牌结算",
    description: "有人胡牌或牌摸完则本局结束，进行结算",
  },
];

const actions = [
  {
    name: "吃",
    pinyin: "Chī",
    description: "用手中两张牌与上家打出的牌组成顺子",
    example: "如手持二三万，上家打一万，可吃成一二三万",
    color: "bg-jade-light text-jade-dark",
  },
  {
    name: "碰",
    pinyin: "Pèng",
    description: "用手中两张相同的牌与任意玩家打出的牌组成刻子",
    example: "如手持两张東，任意玩家打東，可碰成三张東",
    color: "bg-gold-light/30 text-tile-zi",
  },
  {
    name: "杠",
    pinyin: "Gàng",
    description: "四张相同的牌组成杠，可明杠、暗杠或加杠",
    example: "如手持三张發，有人打發可明杠；手持四张可暗杠",
    color: "bg-primary/10 text-primary-dark",
  },
  {
    name: "胡",
    pinyin: "Hú",
    description: "完成胡牌牌型即可胡牌，获得本局胜利",
    example: "手牌满足4组顺子/刻子+1对将牌的组合",
    color: "bg-destructive/10 text-destructive",
  },
];

export function BasicRulesSection() {
  return (
    <section id="rules" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4">
            基础规则
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            游戏流程
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            一局麻将的基本流程，从准备到结束的完整步骤
          </p>
        </div>

        {/* Game Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {gameFlow.map((item, index) => (
            <div
              key={index}
              className="relative bg-background p-6 rounded-lg border border-border group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-display font-bold">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < gameFlow.length - 1 && (
                <ArrowRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 text-border z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="section-divider">
          <span className="text-muted-foreground font-display text-sm px-4 bg-card">
            特殊动作
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-4 py-2 rounded-lg font-display font-bold text-2xl ${action.color}`}
                >
                  {action.name}
                </span>
                <span className="text-muted-foreground font-display text-sm">
                  {action.pinyin}
                </span>
              </div>
              <p className="text-foreground font-medium mb-2">{action.description}</p>
              <p className="text-muted-foreground text-sm">{action.example}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
