import { WishlistCard } from './WishlistCard';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface WishlistGame {
  id: number;
  title: string;
  imageUrl: string;
  discount: number;
  currentPrice: string;
  originalPrice: string;
}

export function WishlistPage() {
  const [wishlistGames, setWishlistGames] = useState<WishlistGame[]>([
    {
      id: 1,
      title: '엘든 링',
      imageUrl: 'https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGZhbnRhc3klMjBycGd8ZW58MXx8fHwxNzcwNDM5Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      discount: 30,
      currentPrice: '35,100₩',
      originalPrice: '50,000₩'
    },
    {
      id: 2,
      title: '사이버펑크 2077',
      imageUrl: 'https://images.unsplash.com/photo-1615511678150-4c82ea999a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbmVvbnxlbnwxfHx8fDE3NzAzNjI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      discount: 50,
      currentPrice: '29,500₩',
      originalPrice: '59,000₩'
    },
    {
      id: 3,
      title: '레지던트 이블 4',
      imageUrl: 'https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBkYXJrJTIwZ2FtZXxlbnwxfHx8fDE3NzA0MTI2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      discount: 40,
      currentPrice: '29,400₩',
      originalPrice: '49,000₩'
    },
    {
      id: 4,
      title: '스타필드',
      imageUrl: 'https://images.unsplash.com/photo-1627645812426-67ce7b0a7a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNjaS1maSUyMGdhbWV8ZW58MXx8fHwxNzcwMzgxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      discount: 25,
      currentPrice: '52,500₩',
      originalPrice: '70,000₩'
    }
  ]);

  const handleRemoveGame = (gameId: number) => {
    setWishlistGames(wishlistGames.filter(game => game.id !== gameId));
  };

  return (
    <div className="min-h-screen bg-[#171a21]">
      {/* Header */}
      <div className="bg-[#16202d] border-b border-[#2a475e]/50 px-4 py-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-6 h-6 text-[#66c0f4] fill-current" />
          <h1 className="text-white font-bold text-2xl">
            내 찜 목록 & 알림 설정
          </h1>
        </div>
        <p className="text-[#c6d4df] text-sm">
          총 {wishlistGames.length}개의 게임을 찜했습니다
        </p>
      </div>

      {/* Wishlist Content */}
      <div className="px-4 pb-8">
        {wishlistGames.length > 0 ? (
          <div className="space-y-4">
            {wishlistGames.map((game) => (
              <WishlistCard
                key={game.id}
                title={game.title}
                imageUrl={game.imageUrl}
                discount={game.discount}
                currentPrice={game.currentPrice}
                originalPrice={game.originalPrice}
                onRemove={() => handleRemoveGame(game.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-[#2a475e] mx-auto mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">
              찜한 게임이 없습니다
            </h3>
            <p className="text-[#c6d4df] text-sm">
              마음에 드는 게임을 찜해보세요!
            </p>
          </div>
        )}
      </div>

      {/* Bottom Info */}
      {wishlistGames.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#16202d] border-t border-[#2a475e]/50 px-4 py-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#c6d4df]">
              알림 설정된 게임: <span className="text-[#66c0f4] font-bold">
                {wishlistGames.length}개
              </span>
            </span>
            <button className="text-[#66c0f4] hover:text-white transition-colors font-medium">
              모두 관리
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
