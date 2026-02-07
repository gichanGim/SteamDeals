import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Bell } from 'lucide-react';
import { useState } from 'react';

interface WishlistCardProps {
  title: string;
  imageUrl: string;
  discount: number;
  currentPrice: string;
  originalPrice: string;
  onRemove: () => void;
}

export function WishlistCard({
  title,
  imageUrl,
  discount,
  currentPrice,
  originalPrice,
  onRemove,
}: WishlistCardProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <div className="bg-[#16202d] rounded overflow-hidden shadow-lg border border-[#2a475e]/50">
      <div className="flex gap-4 p-4">
        {/* Game Image */}
        <div className="relative flex-shrink-0 w-32 h-20 rounded overflow-hidden bg-[#1b2838]">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-1 right-1 bg-[#4c6b22] px-1.5 py-0.5 rounded">
              <span className="text-[#beee11] font-bold text-xs">-{discount}%</span>
            </div>
          )}
        </div>

        {/* Game Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-white font-medium text-sm line-clamp-1">
              {title}
            </h3>
            {/* Remove from Wishlist */}
            <button
              onClick={onRemove}
              className="flex-shrink-0 text-[#c6d4df] hover:text-red-400 transition-colors"
              aria-label="찜 목록에서 제거"
            >
              <Heart className="w-5 h-5 fill-current" />
            </button>
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-2 mb-3">
            {discount > 0 && (
              <span className="text-[#c6d4df] text-xs line-through opacity-50">
                {originalPrice}
              </span>
            )}
            <span className="text-[#beee11] font-bold text-base">
              {currentPrice}
            </span>
          </div>

          {/* Notification Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notificationsEnabled ? 'bg-[#66c0f4]' : 'bg-[#2a475e]'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center gap-1 text-[#c6d4df] text-xs">
              <Bell className="w-3 h-3" />
              <span>할인 시 알림 받기 (PUSH/메일)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <div className="px-4 pb-4">
        <button className="w-full bg-gradient-to-r from-[#4c6b22] to-[#5c7e10] hover:from-[#5c7e10] hover:to-[#6a8f1f] text-white font-medium py-2 px-4 rounded text-sm transition-all">
          구매하기
        </button>
      </div>
    </div>
  );
}
