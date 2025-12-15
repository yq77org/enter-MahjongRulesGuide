import { cn } from "@/lib/utils";

type TileType = "wan" | "tong" | "tiao" | "zi";

interface MahjongTileProps {
  symbol: string;
  type: TileType;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-10 h-14 text-lg",
  md: "w-14 h-[4.5rem] text-2xl",
  lg: "w-20 h-[6.5rem] text-4xl",
};

const typeClasses = {
  wan: "mahjong-tile-wan",
  tong: "mahjong-tile-tong",
  tiao: "mahjong-tile-tiao",
  zi: "mahjong-tile-zi",
};

export function MahjongTile({ symbol, type, size = "md", className }: MahjongTileProps) {
  return (
    <div
      className={cn(
        "mahjong-tile font-display font-bold transition-transform hover:scale-105",
        sizeClasses[size],
        typeClasses[type],
        className
      )}
    >
      {symbol}
    </div>
  );
}

interface TileGroupProps {
  tiles: { symbol: string; type: TileType }[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function TileGroup({ tiles, size = "md", className }: TileGroupProps) {
  return (
    <div className={cn("flex gap-1 flex-wrap", className)}>
      {tiles.map((tile, index) => (
        <MahjongTile key={index} symbol={tile.symbol} type={tile.type} size={size} />
      ))}
    </div>
  );
}
