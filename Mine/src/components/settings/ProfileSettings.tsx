import { useEffect, useState, type RefObject } from 'react'
import Camera from '../../icon/camera 1.svg?react'

interface ProfileData {
  nickname: string
  userId: string
  profileImage: string
}

interface Props {
  editMode: boolean
  onCancelEdit: () => void
  onSave: (data: ProfileData) => void
  refCancel: RefObject<HTMLButtonElement>
  refSave: RefObject<HTMLButtonElement>
}

export default function ProfileSettings({
  editMode,
  onCancelEdit,
  onSave,
  refCancel,
  refSave,
}: Props) {
  const [saved, setSaved] = useState<ProfileData>({
    nickname: '홍길동',
    userId: 'thisisID',
    profileImage: 'https://i.pravatar.cc/100?img=12',
  })

  const [draft, setDraft] = useState<ProfileData>(saved)
  const [editingField, setEditingField] = useState<null | 'nickname' | 'userId'>(null)

  useEffect(() => {
    if (editMode) {
      setDraft(saved)
      setEditingField(null)
    }
  }, [editMode, saved])

  const handleSave = () => {
    setSaved(draft)
    onSave(draft)
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
    setDraft({ ...draft, profileImage: previewUrl })
  }

  const viewData = editMode ? draft : saved

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center ml-10">
        <div className="relative shrink-0 -translate-y-4">
          <img
            src={viewData.profileImage}
            alt="profile"
            className="w-25 h-25 rounded-full object-cover"
          />
          {editMode && (
            <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow cursor-pointer">
              <Camera className="w-4 h-4 fill-main-default" />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        <div className="absolute top-12 bottom-12 left-94 w-69 flex flex-col gap-4 justify-center">
          <div className="flex items-center">
            <span className="w-20 text-black-textSmallTitle font-light14 shrink-0">닉네임</span>
            {editMode && editingField === 'nickname' ? (
              <input
                value={draft.nickname}
                autoFocus
                onChange={(e) => setDraft({ ...draft, nickname: e.target.value })}
                onBlur={() => setEditingField(null)}
                className="border-b border-black outline-none font-medium16 pb-1 bg-transparent"
              />
            ) : (
              <span
                onClick={() => editMode && setEditingField('nickname')}
                className={`font-medium16 ${editMode ? 'border-b border-black cursor-text' : ''}`}
              >
                {viewData.nickname}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <span className="w-20 text-black-textSmallTitle font-light14 shrink-0">아이디</span>
            {editMode && editingField === 'userId' ? (
              <input
                value={draft.userId}
                autoFocus
                onChange={(e) => setDraft({ ...draft, userId: e.target.value })}
                onBlur={() => setEditingField(null)}
                className="border-b border-black outline-none font-medium16 pb-1 bg-transparent"
              />
            ) : (
              <span
                onClick={() => editMode && setEditingField('userId')}
                className={`font-medium16 ${editMode ? 'border-b border-black cursor-text ' : ''}`}
              >
                {viewData.userId}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <span className="w-20 text-black-textSmallTitle font-light14 shrink-0">비밀번호</span>
            <span className="font-medium16">word******</span>
          </div>

          <div className="flex items-center">
            <span className="w-20 text-black-textSmallTitle font-light14 shrink-0">이메일</span>
            <span className="font-medium16">ahdfahe@gmail.com</span>
          </div>
        </div>
      </div>

      <button hidden ref={refCancel} onClick={handleCancel} />
      <button hidden ref={refSave} onClick={handleSave} />
    </div>
  )
}