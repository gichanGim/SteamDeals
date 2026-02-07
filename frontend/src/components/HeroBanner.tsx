export function HeroBanner() {
  return (
    <div className="relative h-[240px] bg-gradient-to-br from-[#1b2838] via-[#2a475e] to-[#1b2838] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(102,192,244,0.2),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">
          스팀 게임 최저가를 확인하세요
        </h1>
        <p className="text-[#c6d4df] text-sm sm:text-base">
          놓치지 말아야 할 할인 정보
        </p>

        {/* Decorative Elements */}
        <div className="mt-6 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#66c0f4] animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-[#66c0f4] animate-pulse delay-75" />
          <div className="w-2 h-2 rounded-full bg-[#66c0f4] animate-pulse delay-150" />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#171a21] to-transparent" />
    </div>
  );
}
