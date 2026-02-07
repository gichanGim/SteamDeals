import { AllTimeLowCard } from './AllTimeLowCard';

const allTimeLowGames = [
  {
    id: 1,
    title: '엘든 링',
    imageUrl: 'https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGZhbnRhc3klMjBycGd8ZW58MXx8fHwxNzcwNDM5Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '35,100₩',
    previousPrice: '42,000₩'
  },
  {
    id: 2,
    title: '콜 오브 듀티: 모던 워페어',
    imageUrl: 'https://images.unsplash.com/photo-1638988660756-eb301eabb7e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXIlMjBtaWxpdGFyeSUyMHNob290ZXJ8ZW58MXx8fHwxNzcwNDM5Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '27,900₩',
    previousPrice: '35,000₩'
  },
  {
    id: 3,
    title: 'FC 24',
    imageUrl: 'https://images.unsplash.com/photo-1718547719429-fdd74a231fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzb2NjZXIlMjBnYW1lfGVufDF8fHx8MTc3MDM3OTgwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    price: '19,800₩',
    previousPrice: '28,000₩'
  },
  {
    id: 4,
    title: '아크 서바이벌',
    imageUrl: 'https://images.unsplash.com/photo-1693998054498-89161a27c828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2aXZhbCUyMGFkdmVudHVyZSUyMHdpbGRlcm5lc3N8ZW58MXx8fHwxNzcwNDM5ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '15,400₩',
    previousPrice: '22,000₩'
  },
  {
    id: 5,
    title: '레드 데드 리뎀션 2',
    imageUrl: 'https://images.unsplash.com/photo-1700300325884-10715799da7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBmYW50YXN5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDQzOTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    price: '24,500₩',
    previousPrice: '32,000₩'
  }
];

export function AllTimeLowSection() {
  return (
    <section className="px-4 py-6 bg-[#1b2838]/30">
      {/* Section Title */}
      <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
        📉 역대 최저가 달성!
      </h2>

      {/* Horizontal Scrollable List */}
      <div className="overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-3">
          {allTimeLowGames.map((game) => (
            <AllTimeLowCard
              key={game.id}
              title={game.title}
              imageUrl={game.imageUrl}
              price={game.price}
              previousPrice={game.previousPrice}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-2">
        <span className="text-[#c6d4df] text-xs opacity-50">← 좌우로 스크롤하세요 →</span>
      </div>
    </section>
  );
}
