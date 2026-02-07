import { Heart, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { PriceHistoryChart } from './PriceHistoryChart';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageCarousel } from './ImageCarousel';

interface GameDetailPageProps {
  gameTitle: string;
  gameSubtitle: string;
  heroImageUrl: string;
  currentPrice: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  genre: string;
  screenshots?: string[];
}

export function GameDetailPage({
  gameTitle,
  gameSubtitle,
  heroImageUrl,
  currentPrice,
  releaseDate,
  developer,
  publisher,
  genre,
  screenshots = []
}: GameDetailPageProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="min-h-screen bg-[#171a21]">
      {/* Hero Background with Blur */}
      <div className="relative h-[300px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImageUrl}
            alt={gameTitle}
            className="w-full h-full object-cover"
          />
          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-md bg-[#171a21]/40" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171a21]/50 to-[#171a21]" />
      </div>

      {/* Main Content */}
      <div className="relative -mt-32 px-4 pb-8">
        {/* Glassmorphism Info Container */}
        <div className="bg-[#16202d]/80 backdrop-blur-xl rounded-lg border border-[#2a475e]/50 shadow-2xl p-6 mb-6">
          {/* Game Title */}
          <h1 className="text-white font-bold text-3xl mb-2">
            {gameTitle}
          </h1>
          <p className="text-[#c6d4df] text-sm mb-6">
            {gameSubtitle}
          </p>

          {/* Image Carousel */}
          {screenshots.length > 0 && (
            <div className="mb-6">
              <ImageCarousel images={screenshots} />
            </div>
          )}

          {/* Current Price Display */}
          <div className="mb-6 p-4 bg-[#1b2838] rounded-lg border border-[#2a475e]/30">
            <div className="text-[#c6d4df] text-sm mb-1">현재 최저가</div>
            <div className="text-[#beee11] font-bold text-2xl">{currentPrice}</div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Primary Buy Button */}
            <button className="flex-1 bg-gradient-to-r from-[#4c6b22] to-[#5c7e10] hover:from-[#5c7e10] hover:to-[#6a8f1f] text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
              <span>스팀으로 이동하여 구매</span>
              <ExternalLink className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 transition-all ${
                isWishlisted
                  ? 'bg-[#66c0f4] border-[#66c0f4] text-white'
                  : 'bg-transparent border-[#66c0f4] text-[#66c0f4] hover:bg-[#66c0f4]/10'
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`}
              />
              <span className="text-sm font-medium whitespace-nowrap">
                찜하기 & 알림 받기
              </span>
            </button>
          </div>
        </div>

        {/* Price History Graph Section */}
        <div className="bg-[#16202d] rounded-lg border border-[#2a475e]/50 p-6 mb-6">
          <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
            💹 가격 변동 내역 그래프
          </h2>
          <PriceHistoryChart />
        </div>

        {/* Game Specs/Info Block */}
        <div className="bg-[#16202d] rounded-lg border border-[#2a475e]/50 p-6">
          <h2 className="text-white font-bold text-lg mb-4">게임 정보</h2>
          <div className="space-y-3">
            <div className="flex border-b border-[#2a475e]/30 pb-2">
              <span className="text-[#c6d4df] opacity-70 w-24">출시일:</span>
              <span className="text-white">{releaseDate}</span>
            </div>
            <div className="flex border-b border-[#2a475e]/30 pb-2">
              <span className="text-[#c6d4df] opacity-70 w-24">개발사:</span>
              <span className="text-white">{developer}</span>
            </div>
            <div className="flex border-b border-[#2a475e]/30 pb-2">
              <span className="text-[#c6d4df] opacity-70 w-24">배급사:</span>
              <span className="text-white">{publisher}</span>
            </div>
            <div className="flex pb-2">
              <span className="text-[#c6d4df] opacity-70 w-24">장르:</span>
              <span className="text-white">{genre}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}