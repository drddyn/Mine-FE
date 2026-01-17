import React, { useState, useRef, useEffect } from 'react';

interface LLMInputBoxProps {
  placeholder?: string;
  onSend?: (value: string) => void;
}

const LLMInputBox: React.FC<LLMInputBoxProps> = ({ 
  placeholder = "관심있는 주제를 입력해 주세요.", 
  onSend 
}) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      
      const expanded = scrollHeight > 30;
      setIsExpanded(expanded);

      textareaRef.current.style.height = `${Math.min(scrollHeight, 104)}px`; 
    }
  }, [text]);

  const handleSend = () => {
    if (text.trim() && onSend) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div 
      className="relative mx-auto flex items-end transition-all duration-300 ease-in-out"
      style={{
        width: '770px',
        minHeight: '54px',
        height: isExpanded ? 'auto' : '54px',
        maxHeight: '144px',
        
        borderRadius: isExpanded ? '32px' : '80px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: isFocused ? 'color-main-default' : 'color-main-opacity50',
        backgroundColor: 'color-main-light',
        opacity: isFocused ? 1 : 0.5,

        padding: isExpanded ? '20px 28px' : '10px 24px',
        gap: '40px',
      }}
    >
      <textarea
        ref={textareaRef}
        rows={1}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}

        className="mb-1 w-full resize-none bg-transparent text-4 leading-normal color-black-textBigTitle outline-none placeholder:color-main-light overflow-y-auto"
        style={{
          minHeight: '24px',
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      />
      
      <button
        onClick={handleSend}
        disabled={!text.trim()}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '15px',
          padding: '5px',
          backgroundColor: isFocused ? 'color-main-default' : 'color-main-opacity50',
          opacity: 1,
          flexShrink: 0,

          marginBottom: isExpanded ? '0px' : '2px' 
        }}
        className="flex items-center justify-center transition-colors duration-200"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default LLMInputBox;