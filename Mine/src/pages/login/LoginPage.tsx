import Minelogo from '../../icon/minelogo_small.svg?react'
import Back from '../../icon/back.svg?react'
import User from '../../icon/user.svg?react'
import Lock from '../../icon/lock.svg?react'
import InputBox from '../../components/InputBox'
import InputBoxWithPassword from '../../components/InputBoxWithPassword'
import ButtonwithText from '../../components/ButtonwithText'
import { useState } from 'react'
import usePostAuthorization from '../../hooks/usePostAuthorization'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [loginForm, setLoginForm] = useState({
        userId: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setLoginForm((prev) => ({
            ...prev,
            [id]: value,
        }))
    }
    const { mutate: login, isPending } = usePostAuthorization()
    const handleLoginSubmit = () => {
        console.log('서버로 보낼 데이터:', loginForm)
        if (isPending) return
        login({
            username: loginForm.userId,
            password: loginForm.password,
        })
    }

    const navigate = useNavigate()
    const navigateToSignUp = () => {
        navigate('/signup')
    }
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

                <div className="flex flex-col w-full gap-4">
                    <InputBox
                        id="userId"
                        value={loginForm.userId}
                        placeholder="아이디"
                        children={<User />}
                        onChange={handleChange}
                    />
                    <InputBoxWithPassword
                        id="password"
                        value={loginForm.password}
                        placeholder="비밀번호"
                        children={<Lock />}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full flex justify-end mb-8">
                    <button className="font-light14 text-black-textInTheBox hover:text-gray-600 transition-colors">
                        아이디/비밀번호 찾기
                    </button>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <ButtonwithText title="로그인" size="w-full h-12" onclick={handleLoginSubmit} />
                    <ButtonwithText title="회원가입" variant="white" size="w-full h-12" onclick={navigateToSignUp} />
                </div>
            </div>
        </div>
    )
}
