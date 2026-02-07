import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingDown } from 'lucide-react';

interface AllTimeLowCardProps {
  title: string;
  imageUrl: string;
  price: string;
  previousPrice: string;
}

export function AllTimeLowCard({ title, imageUrl, price, previousPrice }: AllTimeLowCardProps) {
  return (
    <div className="flex-shrink-0 w-[160px] bg-[#16202d] rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
      {/* Game Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#1b2838]">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* All-Time Low Badge */}
        <div className="absolute top-2 left-2 bg-[#beee11] px-2 py-1 rounded flex items-center gap-1">
          <TrendingDown className="w-3 h-3 text-[#1b2838]" />
          <span className="text-[#1b2838] font-bold text-xs">역대최저</span>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-2">
        <h3 className="text-white font-medium text-xs mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Price Section */}
        <div className="space-y-1">
          <div className="text-[#c6d4df] text-xs opacity-60 line-through">
            이전 최저: {previousPrice}
          </div>
          <div className="text-[#beee11] font-bold text-sm">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}
