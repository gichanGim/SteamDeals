import { GameCard } from './GameCard';

const hotDeals = [
  {
    id: 1,
    title: '팰월드',
    imageUrl: 'https://images.unsplash.com/photo-1700300325884-10715799da7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBmYW50YXN5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDQzOTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 30,
    currentPrice: '22,400₩',
    originalPrice: '32,000₩'
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
    title: '스타필드',
    imageUrl: 'https://images.unsplash.com/photo-1627645812426-67ce7b0a7a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNjaS1maSUyMGdhbWV8ZW58MXx8fHwxNzcwMzgxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 25,
    currentPrice: '52,500₩',
    originalPrice: '70,000₩'
  },
  {
    id: 4,
    title: '젤다의 전설',
    imageUrl: 'https://images.unsplash.com/photo-1763402887477-d8815a20767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBhZHZlbnR1cmUlMjBnYW1lfGVufDF8fHx8MTc3MDM0Nzg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 20,
    currentPrice: '47,200₩',
    originalPrice: '59,000₩'
  },
  {
    id: 5,
    title: '레지던트 이블 4',
    imageUrl: 'https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBkYXJrJTIwZ2FtZXxlbnwxfHx8fDE3NzA0MTI2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 40,
    currentPrice: '29,400₩',
    originalPrice: '49,000₩'
  },
  {
    id: 6,
    title: '포르자 호라이즌 5',
    imageUrl: 'https://images.unsplash.com/photo-1723360480597-d21deccaf3d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBnYW1lfGVufDF8fHx8MTc3MDMzMTYwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 35,
    currentPrice: '32,500₩',
    originalPrice: '50,000₩'
  }
];

export function HotDealsSection() {
  return (
    <section className="px-4 py-6">
      {/* Section Title */}
      <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
        🔥 현재 핫딜 중인 게임
      </h2>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotDeals.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            imageUrl={game.imageUrl}
            discount={game.discount}
            currentPrice={game.currentPrice}
            originalPrice={game.originalPrice}
          />
        ))}
      </div>
    </section>
  );
}
