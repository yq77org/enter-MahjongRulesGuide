import { BookOpen, Users, Trophy, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "四人游戏",
    description: "麻将通常由四名玩家参与，围坐一桌进行博弈",
  },
  {
    icon: BookOpen,
    title: "144张牌",
    description: "标准麻将使用144张牌，包含多种花色和字牌",
  },
  {
    icon: Clock,
    title: "策略博弈",
    description: "结合运气与策略，每局游戏充满变数与挑战",
  },
  {
    icon: Trophy,
    title: "胡牌获胜",
    description: "率先完成特定牌型组合的玩家即为胜者",
  },
];

export function IntroductionSection() {
  return (
    <section id="introduction" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4">
            麻将入门
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            什么是麻将？
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            麻将是中国传统的四人桌上游戏，起源于清朝，至今已有超过百年历史。
            它融合了策略、计算与运气，是中国文化中最具代表性的休闲娱乐之一。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
