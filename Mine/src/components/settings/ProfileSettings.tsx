import { useEffect, useState, type RefObject } from 'react'
import Camera from '../../icon/camera.svg?react'
import useUserStore from '../../stores/user'
import useUpdateProfile from '../../hooks/useUpdateProfile'
import usePatchVisibility from '../../hooks/usePatchVisibility'

interface ProfileData {
    nickname: string
    username: string
    profileImageUrl: string
    profileImage: File | null
}

interface ProfileSettingProps {
    editMode: boolean
    onCancelEdit: () => void
    onSave: (data: ProfileData) => void
    refCancel: RefObject<HTMLButtonElement>
    refSave: RefObject<HTMLButtonElement>
}

export default function ProfileSettings({ editMode, onCancelEdit, onSave, refCancel, refSave }: ProfileSettingProps) {
    const { user } = useUserStore()
    const { mutateAsync: updateProfile } = useUpdateProfile()
    const { mutate: patchVisibility } = usePatchVisibility()
    const [saved, setSaved] = useState<ProfileData>({
        nickname: user?.nickname ?? '',
        username: user?.username ?? '',
        profileImageUrl: user?.profileImageUrl ?? '',
        profileImage: null,
    })
    const [draft, setDraft] = useState<ProfileData>(saved)
    const [editingField, setEditingField] = useState<null | 'nickname' | 'userId'>(null)
    const [isPublic, setIsPublic] = useState(false)

    const handleToggleVisibility = () => {
        const newValue = !isPublic
        setIsPublic(newValue)
        patchVisibility(newValue)
    }

    const handleSave = async () => {
        try {
            await updateProfile(draft)
            setSaved(draft)
            onSave(draft)
            setEditingField(null)
        } catch (error) {
            console.error('수정 실패:', error)
            alert('수정 중 오류가 발생했습니다.')
            handleCancel()
        }
    }

    const handleCancel = () => {
        setDraft(saved)
        setEditingField(null)
        onCancelEdit()
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        const previewUrl = URL.createObjectURL(file)
        setDraft({ ...draft, profileImageUrl: previewUrl, profileImage: file })
    }

    const viewData = editMode ? draft : saved

    useEffect(() => {
        const currentImageUrl = draft.profileImageUrl
        return () => {
            if (currentImageUrl && currentImageUrl.startsWith('blob:')) {
                URL.revokeObjectURL(currentImageUrl)
            }
        }
    }, [draft.profileImageUrl])

    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center ml-10">
                <div className="relative shrink-0 -translate-y-4">
                    <img src={viewData.profileImageUrl} alt="profile" className="w-25 h-25 rounded-full object-cover" />
                    {editMode && (
                        <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow cursor-pointer">
                            <Camera className="w-4 h-4 fill-main-default" />
                            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                        </label>
                    )}
                </div>

                <div className="absolute top-12 bottom-12 left-94 w-69 flex flex-col gap-4 justify-center">
                    <div className="flex items-center">
                        <span className="w-20 text-gray-200 font-light14 shrink-0">닉네임</span>
                        {editMode && editingField === 'nickname' ? (
                            <input
                                value={draft.nickname}
                                autoFocus
                                onChange={(e) => setDraft({ ...draft, nickname: e.target.value })}
                                onBlur={() => setEditingField(null)}
                                className="border-b border-white outline-none font-medium16 pb-1 bg-transparent text-white"
                            />
                        ) : (
                            <span
                                onClick={() => editMode && setEditingField('nickname')}
                                className={`font-medium16 text-white ${editMode ? 'border-b border-white cursor-text' : ''}`}
                            >
                                {viewData.nickname}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center">
                        <span className="w-20 text-gray-200 font-light14 shrink-0">아이디</span>
                        {editMode && editingField === 'userId' ? (
                            <input
                                value={draft.username}
                                autoFocus
                                onChange={(e) => setDraft({ ...draft, username: e.target.value })}
                                onBlur={() => setEditingField(null)}
                                className="border-b border-white outline-none font-medium16 pb-1 bg-transparent text-white"
                            />
                        ) : (
                            <span
                                onClick={() => editMode && setEditingField('userId')}
                                className={`font-medium16 text-white ${editMode ? 'border-b border-white cursor-text' : ''}`}
                            >
                                {viewData.username}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center">
                        <span className="w-20 text-gray-200 font-light14 shrink-0">비밀번호</span>
                        <span className="font-medium16 text-white">********</span>
                    </div>

                    <div className="flex items-center">
                        <span className="w-20 text-gray-200 font-light14 shrink-0">이메일</span>
                        <span className="font-medium16 text-white">{user?.email}</span>
                    </div>

                    <div className="flex items-center">
                        <span className="w-20 text-gray-200 font-light14 shrink-0">프로필 공개</span>
                        <div
                            onClick={handleToggleVisibility}
                            className={`relative w-7.5 h-3.5 rounded-full transition-colors duration-300 cursor-pointer ${
                                isPublic ? `bg-gray-300` : `bg-gray-400`
                            }`}
                        >
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full shadow transition-all duration-300 ${isPublic ? 'bg-white left-[calc(100%-12px)]' : 'bg-gray-500 -left-1'}`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button hidden ref={refCancel} onClick={handleCancel} />
            <button hidden ref={refSave} onClick={handleSave} />
        </div>
    )
}
