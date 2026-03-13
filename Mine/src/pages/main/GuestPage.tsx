import { useNavigate } from 'react-router-dom'
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import lookaround1 from '../../assets/lookaround1.jpg'
import lookaround2 from '../../assets/lookaround2.jpg'
import lookaround3 from '../../assets/lookaround3.jpg'
import lookaround4 from '../../assets/lookaround4.jpg'
import lookaround5 from '../../assets/lookaround5.jpg'
import lookaround6 from '../../assets/lookaround6.jpg'

const dummyMagazines = [
    { id: 1, title: '스키 탈 때 주의할 점', image: lookaround1 },
    { id: 2, title: '나무 한 그루', image: lookaround2 },
    { id: 3, title: '마카롱 3개', image: lookaround3 },
    { id: 4, title: '2025 브랜드 리브랜딩', image: lookaround4 },
    { id: 5, title: '추천하는 베스트 셀러', image: lookaround5 },
    { id: 6, title: '숲의 이야기를 들어봐요', image: lookaround6 },
]

export default function GuestPage() {
    const navigate = useNavigate()

    const handleStart = () => {
        sessionStorage.setItem('landingBg', bg1)
        navigate('/login', { state: { bgUrl: bg1 } })
    }

    return (
        <div
            className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minWidth: '1290px',
                minHeight: '768px',
            }}
        >
            <div className="absolute inset-0 bg-black/30" />
            <div
                className="absolute top-0 left-0 w-full h-61 z-10 pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.40) 29.51%, rgba(255, 255, 255, 0.00) 93.65%)',
                }}
            />

            <div
                className="absolute bottom-0 left-0 w-full h-88.25 z-30 pointer-events-none"
                style={{
                    background: 'linear-gradient(0deg, #000 29.51%, rgba(0, 0, 0, 0.00) 93.65%)',
                }}
            />

            <div className="relative z-20 grid grid-cols-3 mb-10" style={{ gap: '4px' }}>
                {dummyMagazines.map((magazine) => (
                    <div
                        key={magazine.id}
                        className="relative overflow-hidden flex justify-end items-end w-107.5 h-72.5 p-4"
                    >
                        <img
                            src={magazine.image}
                            alt={magazine.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                        <span
                            className="relative z-10 text-gray-100 font-notoserif text-right"
                            style={{
                                fontSize: '20px',
                                fontWeight: 600,
                                lineHeight: '140%',
                                letterSpacing: '-0.5px',
                            }}
                        >
                            {magazine.title}
                        </span>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-40 flex flex-col items-center">
                <span className="text-gray-200 font-regular20 mb-2">
                    다른 매거진들이 궁금한가요?
                </span>
                <span className="text-gray-100 font-semibold24 mb-6.5">
                    회원가입하고 나만의 매거진을 만들어 보세요.
                </span>
                <button
                    onClick={handleStart}
                    className="flex items-center justify-center text-gray-200 font-medium16 h-9 px-10 py-3.5 rounded-[40px] border border-gray-200 mb-11.5 transition-all duration-200 hover:bg-gray-100/10"
                >
                    지금 바로 시작하기
                </button>
            </div>
        </div>
    )
}