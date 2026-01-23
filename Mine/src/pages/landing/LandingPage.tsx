import { useNavigate } from 'react-router-dom'
export default function LandingPage() {
    const navigate = useNavigate()
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <img
        src="/images/minelogo.png"
        alt=""
        className="
          absolute
          -top-22
          -left-3
          w-436.25
          h-219.25
          object-fill
          opacity-[0.04]
          pointer-events-none
          select-none
          scale-[1.1]
          filter brightness-0
        "
      />

      <div
        className="
          absolute
          top-79.75
          left-82.25
          w-54.5
          h-26.5
          opacity-100
        "
      >
        <p className="text-main-default font-poltawski font-semibold36 text-right">
          MY OWN
        </p>
        <p className="font-poltawski font-semibold36 text-right">
          MAGAZINE
        </p>
        <p className="font-poltawski font-semibold36 text-right">
          ARCHIVING
        </p>
      </div>

      <button
        className="
          absolute
          top-120
          left-86.75
          w-50
          h-12.5
          rounded-[25px]
          bg-black
          text-white
          opacity-100
          font-semibold16
          flex
          items-center
          justify-center
          transition-colors
          hover:bg-gray-900
        "
        onClick={() => navigate('/login')}
      >
        바로 시작하기
      </button>

      <img
        src="/images/minelogo.png"
        alt="Mine"
        className="
          absolute
          top-67
          left-141.75
          w-136
          h-68.25
          opacity-100
          pointer-events-none
          select-none
          filter brightness-0
        "
      />
    </div>
  )
}
