import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FindPasswordForm() {
    const navigate = useNavigate()
    const [userId, setUserId] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        const noUserId = userId.trim() === ''
        const noEmail = email.trim() === ''

        if (noUserId && noEmail) {
            alert('아이디와 이메일을 입력해주세요.')
            return
        }
        if (noUserId) {
            alert('아이디를 입력해주세요.')
            return
        }
        if (userId.trim().length < 6) {
            alert('아이디는 6자 이상 입력해주세요.')
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
            {/* 아이디 */}
            <div className="flex flex-col items-center w-full">
                <div className="w-100 text-white/80 font-semibold20 mb-2">아이디</div>
                <input
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="아이디를 입력해 주세요."
                    maxLength={20}
                    className="w-100 h-12 py-5 px-7 rounded-[15px]
                               border border-black-textMain text-white
                               placeholder:text-white/60 outline-none focus:border-white"
                    style={{ background: '#FFFFFF4D' }}
                />
            </div>

            <div className="flex flex-col items-center w-full mt-6">
                <div className="w-100 text-white/80 font-semibold20 mb-2">이메일</div>
                <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abc123@gmail.com"
                    className="w-100 h-12 py-5 px-7 rounded-[15px]
                               border border-black-textMain text-white
                               placeholder:text-white/60 outline-none focus:border-white"
                    style={{ background: '#FFFFFF4D' }}
                />
            </div>

            <div className="flex flex-col items-center gap-4 mt-10 w-full">
                <button
                    onClick={handleSubmit}
                    className="w-100 h-12 rounded-2xl transition-colors duration-150 text-white font-medium16"
                    style={{ background: '#505050B2', padding: '14px' }}
                >
                    비밀번호 찾기
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="w-100 h-12 rounded-2xl border border-black-image transition-colors duration-150 text-white font-medium16"
                    style={{ background: '#FFFFFF66', padding: '14px' }}
                >
                    이전으로
                </button>
            </div>

            {submitted && (
                <div className="mt-10 text-center text-white/80 font-semibold16 leading-5.5">
                    작성하신 이메일로 비밀번호가 전송되었습니다.<br />
                    메일함을 확인해주세요.
                </div>
            )}
        </div>
    )
}