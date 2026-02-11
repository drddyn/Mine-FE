interface ProfileBoxProps {
    nickname?: string
    profileImage?: string
    classname?: string
}

export default function ProfileBox({ nickname, profileImage, classname }: ProfileBoxProps) {
    return (
        <div className={`flex gap-2 items-center ${classname}`}>
            <div className="text-main-light font-regular16">{nickname}</div>
            <img src={profileImage} className="w-12.5 h-12.5 rounded-full object-cover" />
        </div>
    )
}
