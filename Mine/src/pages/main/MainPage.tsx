import { useState } from "react";
import LLMInputBox from "../../components/LLMInputBox";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = (value: string) => {
    console.log("전송 내용:", value);
    
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false); 
    }, 3000);
  };

  //입력했을때 메거진 생성 확인하기 위해 임의로 만들었음.
  return (
    <div className="flex flex-col items-center w-full h-full relative z-0 overflow-hidden pt-[40vh]">
      
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 transition-opacity duration-500 animate-fadeIn bg-white/80 backdrop-blur-sm">
          <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin mb-6"></div>
          <p 
            className="text-xl text-gray-600 animate-pulse"
            style={{ fontFamily: 'MaruBuri, serif' }}
          >
            당신만을 위한 매거진을 만들고 있어요...
          </p>
        </div>
      )} 

      <div 
        className={`flex flex-col items-center transition-all duration-700 ease-in-out ${
          isLoading ? "opacity-0 pointer-events-none scale-95" : "opacity-100"
        }`}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'MaruBuri, serif',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '100%',
            letterSpacing: '-0.025em', 
            color: 'color-black-textBigTitle',
          }}
        >
          나만의 매거진을 만들어볼까요?
        </h1>

        <div className="w-full mt-10 flex justify-center">
          <LLMInputBox onSend={handleSend} />
        </div>
      </div>

    </div>
  );
}