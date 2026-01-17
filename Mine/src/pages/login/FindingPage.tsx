import { useState } from 'react'
import FindIdForm from './components/FindIdForm'
import FindPasswordForm from './components/FindPasswordForm'

export default function FindingPage() {
    const [tab, setTab] = useState<'id' | 'password'>('id')

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="w-115 flex flex-col gap-10">
                <div className="flex flex-col items-center gap-2">
                    <div className="flex w-115 px-6">
                        <button
                            onClick={() => setTab('id')}
                            className={`w-57.5 text-center text-4 font-normal uppercase transition-colors cursor-pointer ${tab === 'id' ? 'text-[#6898BB]' : 'text-black-icon'}`}
                        >
                            아이디 찾기
                        </button>
                        <button
                            onClick={() => setTab('password')}
                            className={`w-57.5 text-center text-4 font-normal uppercase transition-colors cursor-pointer ${tab === 'password' ? 'text-[#6898BB]' : 'text-black-icon'}`}
                        >
                            비밀번호 찾기
                        </button>
                    </div>

                    <div className="relative w-115 h-1 bg-[#A9A9A9] rounded-[15px]">
                        <div
                            className={`absolute top-0 left-0 h-1 w-57.5 bg-[#6898BB] rounded-[15px] transition-transform duration-300 ${tab === 'id' ? 'translate-x-0' : 'translate-x-57.5'}`}
                        />
                    </div>
                </div>

                {tab === 'id' && <FindIdForm />}
                {tab === 'password' && <FindPasswordForm />}
            </div>
        </div>
    )
}
