import { Search, User } from 'lucide-react';
import { useState } from 'react';
import { SearchDropdown } from './SearchDropdown';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('사이버');
  const [isSearchFocused, setIsSearchFocused] = useState(true);

  // Mock search results for "사이버"
  const searchResults = [
    {
      id: 1,
      title: '사이버펑크 2077',
      thumbnailUrl: 'https://images.unsplash.com/photo-1607896426171-99097eb60cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjAyMDc3JTIwZ2FtZXxlbnwxfHx8fDE3NzA0NDAxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      platform: 'Windows',
      genre: 'RPG',
      discount: 50,
      currentPrice: '33,000₩',
      originalPrice: '66,000₩'
    },
    {
      id: 2,
      title: '사이버펑크: 에지러너스',
      thumbnailUrl: 'https://images.unsplash.com/photo-1760433116983-76021bd32307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY3liZXJwdW5rJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDQ0MDE1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      platform: 'Windows',
      genre: '액션',
      discount: 30,
      currentPrice: '24,500₩',
      originalPrice: '35,000₩'
    },
    {
      id: 3,
      title: '사이버 쉐도우',
      thumbnailUrl: 'https://images.unsplash.com/photo-1544853014-9cc4f7f0202a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBkeXN0b3BpYW4lMjBjaXR5fGVufDF8fHx8MTc3MDQ0MDE1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      platform: 'Windows',
      genre: '플랫포머',
      discount: 40,
      currentPrice: '14,400₩',
      originalPrice: '24,000₩'
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#171a21] border-b border-[#2a475e]/50">
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Logo */}
        <div className="text-white font-bold text-lg whitespace-nowrap">
          SteamDeals
        </div>

        {/* Search Bar with Dropdown */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="게임 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            className="w-full bg-[#16202d] text-[#c6d4df] placeholder-[#c6d4df]/50 rounded px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c6d4df]/50" />
          
          {/* Search Dropdown */}
          {isSearchFocused && (
            <SearchDropdown searchQuery={searchQuery} results={searchResults} />
          )}
        </div>

        {/* Login Button */}
        <button className="text-[#66c0f4] text-sm font-medium whitespace-nowrap flex items-center gap-1">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">로그인</span>
        </button>
      </div>
    </header>
  );
}