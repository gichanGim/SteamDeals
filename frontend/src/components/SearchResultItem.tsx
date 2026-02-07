import { ImageWithFallback } from './figma/ImageWithFallback';

interface SearchResultItemProps {
  title: string;
  thumbnailUrl: string;
  platform: string;
  genre: string;
  discount: number;
  currentPrice: string;
  originalPrice: string;
  isHighlighted?: boolean;
}

export function SearchResultItem({
  title,
  thumbnailUrl,
  platform,
  genre,
  discount,
  currentPrice,
  originalPrice,
  isHighlighted = false,
}: SearchResultItemProps) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors ${
        isHighlighted ? 'bg-[#1e3a52]' : 'hover:bg-[#1e3a52]/70'
      }`}
    >
      {/* Left: Game Thumbnail */}
      <div className="flex-shrink-0 w-[60px] h-[30px] rounded overflow-hidden bg-[#1b2838]">
        <ImageWithFallback
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center: Game Info */}
      <div className="flex-1 min-w-0">
        <div className="text-white text-sm font-medium truncate">
          {title}
        </div>
        <div className="text-[#c6d4df] text-xs opacity-70">
          {platform} | {genre}
        </div>
      </div>

      {/* Right: Price Block */}
      <div className="flex-shrink-0 flex flex-col items-end gap-1">
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="bg-[#4c6b22] px-1.5 py-0.5 rounded">
            <span className="text-[#beee11] font-bold text-xs">-{discount}%</span>
          </div>
        )}
        {/* Prices */}
        <div className="flex items-center gap-1.5">
          {discount > 0 && (
            <span className="text-[#c6d4df] text-xs line-through opacity-50">
              {originalPrice}
            </span>
          )}
          <span className="text-[#beee11] font-bold text-sm">
            {currentPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
