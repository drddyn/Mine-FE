import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FindIdForm() {
    const navigate = useNavigate()
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        const noNickname = nickname.trim() === ''
        const noEmail = email.trim() === ''

        if (noNickname && noEmail) {
            alert('닉네임과 이메일을 입력해주세요.')
            return
        }
        if (noNickname) {
            alert('닉네임을 입력해주세요.')
            return
        }
        if (nickname.trim().length < 2) {
            alert('닉네임은 2자 이상 입력해주세요.')
            return
        }
        if (noEmail) {
            alert('이메일을 입력해주세요.')
            return
        }

        setSubmitted(true)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
                <div className="w-100 text-gray-100/80 font-semibold20 mb-2">닉네임</div>
                <input
                    id="name"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="홍길동"
                    maxLength={6}
                    className="w-100 h-12 py-5 px-7 rounded-[15px]
                               border border-gray-500 text-gray-100
                               placeholder:text-gray-100/60 outline-none focus:border-gray-100 bg-gray-100-op30"
                />
            </div>

            <div className="flex flex-col items-center w-full mt-6">
                <div className="w-100 text-gray-100/80 font-semibold20 mb-2">이메일</div>
                <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abc123@gmail.com"
                    className="w-100 h-12 py-5 px-7 rounded-[15px]
                               border border-gray-500 text-gray-100
                               placeholder:text-gray-100/60 outline-none focus:border-gray-100 bg-gray-100-op30"
                />
            </div>

            <div className="flex flex-col items-center gap-4 mt-10 w-full">
                <button
                    onClick={handleSubmit}
                    className="w-100 h-12 p-3.5 rounded-2xl bg-gray-500-op70 hover:bg-gray-500 transition-colors duration-150 text-gray-100 font-medium16"
                >
                    아이디 찾기
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="w-100 h-12 p-3.5 rounded-2xl border border-gray-400 bg-gray-100-op40 hover:bg-gray-300 transition-colors duration-150 text-gray-100 font-medium16"
                >
                    이전으로
                </button>
            </div>

            {submitted && (
                <div className="mt-10 text-center text-gray-100/80 font-semibold16 leading-5.5">
                    작성하신 이메일로 아이디가 전송되었습니다.
                    <br />
                    메일함을 확인해주세요.
                </div>
            )}
        </div>
    )
}