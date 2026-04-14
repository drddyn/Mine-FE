import React from 'react';

interface Props {
  onClose: () => void;
}
const HarmfulKeywordToast = ({ onClose }: Props) => {
  return (
    // 전체 배경 오버레이 (약간의 블러 효과 추가)
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
      
      {/* 토스트 메인 박스 */}
      <div 
        style={{ background: 'rgba(17, 17, 17, 0.70)' }}
        className="w-340px rounded-2xl p-7 shadow-2xl border border-white/5 backdrop-blur-md"
      >
        {/* 경고 문구: #F95C40 */}
        <h2 
          style={{ color: '#F95C40' }}
          className="text-lg font-bold mb-3 tracking-tight"
        >
          유해 키워드가 감지되었습니다.
        </h2>
        
        {/* 본문: #FFF */}
        <p 
          style={{ color: '#FFF' }}
          className="text-[15px] leading-snug mb-8 opacity-90 font-medium"
        >
          3회 이상 감지될 경우 계정이 제한될 수 있습니다.
        </p>

        {/* 하단 버튼 영역 */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: '#FFF' }}
            className="px-5 py-1.5 rounded-lg border text-sm hover:bg-white/10 transition-all active:scale-95"
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
};

export default HarmfulKeywordToast;