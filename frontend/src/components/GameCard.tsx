import { ImageWithFallback } from './figma/ImageWithFallback';

interface GameCardProps {
  title: string;
  imageUrl: string;
  discount: number;
  currentPrice: string;
  originalPrice: string;
}

export function GameCard({ title, imageUrl, discount, currentPrice, originalPrice }: GameCardProps) {
  return (
    <div className="bg-[#16202d] rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 hover:scale-[1.02] transition-transform">
      {/* Game Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#1b2838]">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-[#4c6b22] px-2 py-1 rounded">
            <span className="text-[#beee11] font-bold text-sm">-{discount}%</span>
          </div>
        )}
      </div>

      {/* Game Info */}
      <div className="p-3">
        <h3 className="text-white font-medium text-sm mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          {discount > 0 && (
            <span className="text-[#c6d4df] text-xs line-through opacity-50">
              {originalPrice}
            </span>
          )}
          <span className="text-[#beee11] font-bold text-base">
            {currentPrice}
          </span>
        </div>

        {/* Buy Button */}
        <button className="w-full mt-3 bg-gradient-to-r from-[#4c6b22] to-[#5c7e10] hover:from-[#5c7e10] hover:to-[#6a8f1f] text-white font-medium py-2 px-4 rounded text-sm transition-all">
          구매하기
        </button>
      </div>
    </div>
  );
}
