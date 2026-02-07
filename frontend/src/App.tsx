import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { HotDealsSection } from './components/HotDealsSection';
import { AllTimeLowSection } from './components/AllTimeLowSection';
import { GameDetailPage } from './components/GameDetailPage';
import { WishlistPage } from './components/WishlistPage';
import { LoginModal } from './components/LoginModal';
import { useState } from 'react';

export default function App() {
  const [showGameDetail, setShowGameDetail] = useState(false);
  const [showWishlist, setShowWishlist] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#171a21] text-[#c6d4df]">
      {showWishlist ? (
        <>
          {/* Navigation Header */}
          <div className="sticky top-0 z-50 bg-[#171a21] border-b border-[#2a475e]/50 px-4 py-3">
            <button
              onClick={() => setShowWishlist(false)}
              className="text-[#66c0f4] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>← 홈으로 돌아가기</span>
            </button>
          </div>
          <WishlistPage />
        </>
      ) : !showGameDetail ? (
        <>
          <Header />
          <main className="pb-8">
            <HeroBanner />
            <HotDealsSection />
            <AllTimeLowSection />
          </main>
          
          {/* Floating Wishlist Button */}
          <button
            onClick={() => setShowWishlist(true)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-[#66c0f4] to-[#4a9fd9] hover:from-[#4a9fd9] hover:to-[#66c0f4] text-white font-bold py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>내 찜 목록</span>
            <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">4</span>
          </button>
          
          {/* Login Button (for demo) */}
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="fixed bottom-6 left-6 bg-[#16202d] border border-[#66c0f4] text-[#66c0f4] hover:bg-[#66c0f4] hover:text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all"
          >
            로그인
          </button>
        </>
      ) : (
        <>
          {/* Back Button */}
          <div className="sticky top-0 z-50 bg-[#171a21] border-b border-[#2a475e]/50 px-4 py-3">
            <button
              onClick={() => setShowGameDetail(false)}
              className="text-[#66c0f4] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>← 홈으로 돌아가기</span>
            </button>
          </div>
          <GameDetailPage
            gameTitle="엘든 링"
            gameSubtitle="Elden Ring"
            heroImageUrl="https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGZhbnRhc3klMjBycGd8ZW58MXx8fHwxNzcwNDM5Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            currentPrice="35,100₩"
            releaseDate="2022년 2월 25일"
            developer="FromSoftware"
            publisher="Bandai Namco Entertainment"
            genre="액션 RPG, 오픈월드"
            screenshots={[
              'https://images.unsplash.com/photo-1682376429291-0a176f7dbae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc291bHMlMjBnYW1lcGxheSUyMHNjcmVlbnNob3R8ZW58MXx8fHwxNzcwNDQxMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1613626318906-68be0aef3334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwcnBnJTIwZ2FtZSUyMGNvbWJhdHxlbnwxfHx8fDE3NzA0NDEyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1553986782-9f6de60b51b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMHdhcnJpb3IlMjBiYXR0bGV8ZW58MXx8fHwxNzcwNDQxMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1605433887450-490fcd8c0c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGxhbmRzY2FwZSUyMGdhbWV8ZW58MXx8fHwxNzcwNDQxMjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1640550444366-b94e5752c479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxycGclMjBib3NzJTIwZmlnaHQlMjBlcGljfGVufDF8fHx8MTc3MDQ0MTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080'
            ]}
          />
        </>
      )}
      
      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
}