import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#171a21]/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#16202d] rounded-lg border border-[#2a475e] shadow-2xl max-w-md w-full p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#c6d4df] hover:text-white transition-colors"
          aria-label="닫기"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-white font-bold text-2xl mb-3">
          스팀딜즈 로그인
        </h2>

        {/* Description */}
        <p className="text-[#c6d4df] text-sm mb-6">
          찜 목록을 저장하고 알림을 받으려면 로그인하세요.
        </p>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          {/* Kakao Login */}
          <button className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-black font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-lg">
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
              <span className="text-[#FEE500] text-xs font-bold">K</span>
            </div>
            <span>카카오 계정으로 로그인</span>
          </button>

          {/* Naver Login */}
          <button className="w-full bg-[#03C75A] hover:bg-[#02B350] text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-lg">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#03C75A] text-xs font-bold">N</span>
            </div>
            <span>네이버 아이디로 로그인</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2a475e]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#16202d] px-3 text-[#c6d4df] text-xs">또는</span>
          </div>
        </div>

        {/* Guest Continue */}
        <button className="w-full bg-transparent border-2 border-[#2a475e] hover:border-[#66c0f4] text-[#c6d4df] hover:text-[#66c0f4] font-medium py-3 px-6 rounded-lg transition-all">
          둘러보기만 할게요
        </button>

        {/* Footer Note */}
        <p className="text-[#c6d4df] text-xs text-center mt-6 opacity-70">
          로그인하면 <span className="text-[#66c0f4]">서비스 약관</span> 및{' '}
          <span className="text-[#66c0f4]">개인정보 처리방침</span>에 동의하게 됩니다.
        </p>
      </div>
    </div>
  );
}
