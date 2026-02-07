import { SearchResultItem } from './SearchResultItem';

interface SearchResult {
  id: number;
  title: string;
  thumbnailUrl: string;
  platform: string;
  genre: string;
  discount: number;
  currentPrice: string;
  originalPrice: string;
}

interface SearchDropdownProps {
  searchQuery: string;
  results: SearchResult[];
}

export function SearchDropdown({ searchQuery, results }: SearchDropdownProps) {
  if (!searchQuery || results.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-[#16202d] rounded shadow-2xl border border-[#2a475e]/50 overflow-hidden z-50">
      {/* Search Query Header */}
      <div className="px-3 py-2 bg-[#1b2838] border-b border-[#2a475e]/30">
        <span className="text-[#c6d4df] text-xs">
          검색 결과: <span className="text-[#66c0f4] font-medium">"{searchQuery}"</span>
        </span>
      </div>

      {/* Results List */}
      <div className="max-h-[400px] overflow-y-auto">
        {results.map((result, index) => (
          <SearchResultItem
            key={result.id}
            title={result.title}
            thumbnailUrl={result.thumbnailUrl}
            platform={result.platform}
            genre={result.genre}
            discount={result.discount}
            currentPrice={result.currentPrice}
            originalPrice={result.originalPrice}
            isHighlighted={index === 0}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="px-3 py-2 bg-[#1b2838] border-t border-[#2a475e]/30 text-center">
        <span className="text-[#66c0f4] text-xs font-medium cursor-pointer hover:text-white transition-colors">
          모든 결과 보기 ({results.length})
        </span>
      </div>
    </div>
  );
}
