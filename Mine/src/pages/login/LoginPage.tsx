import Minelogo from '../../icon/minelogo.svg?react'
import Back from '../../icon/back.svg?react'
import User from '../../icon/user.svg?react'
import Lock from '../../icon/lock.svg?react'
import InputBox from '../../components/InputBox'
import InputBoxWithPassword from '../../components/InputBoxWithPassword'

export default function LoginPage() {
    return (
        <div className="relative min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="absolute top-5 left-5">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
                    <Back className=" text-gray-400 group-hover:text-black" />
                </button>
            </div>

            <div className="flex flex-col items-center w-105">
                <div className="mb-10 flex justify-center">
                    <Minelogo className="w-25 h-25 aspect-square" />
                </div>

                <div className="flex flex-col w-full">
                    <InputBox id="id" placeholder="아이디" children={<User />} />
                    <InputBoxWithPassword id="password" placeholder="비밀번호" children={<Lock />} />
                </div>

                <div className="w-full flex justify-end mb-8">
                    <button className="font-light14 text-black-textInTheBox hover:text-gray-600 transition-colors">
                        아이디/비밀번호 찾기
                    </button>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <button
                        type="button"
                        className="w-full h-12.5 bg-main-default text-white font-medium16 rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] hover:bg-main-emphasis active:scale-[0.99] transition-all"
                    >
                        로그인
                    </button>
                    <button
                        type="button"
                        className="w-full h-12.5 bg-white text-main-default font-medium16 border border-main-default rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] hover:bg-gray-50 active:scale-[0.99] transition-all"
                    >
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    )
}
