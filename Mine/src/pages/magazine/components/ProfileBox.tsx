interface ProfileBoxProps {
    nickname?: string
    profileImage?: string
    classname?: string
    mode?: 'magazine' | 'section'
}

export default function ProfileBox({ nickname, profileImage, classname, mode }: ProfileBoxProps) {
    return (
        <div className={`flex gap-2 items-center ${classname}`}>
            <div className={`${mode == 'magazine' ? 'text-main-light' : 'text-black-smalltitle'} font-regular16`}>
                {nickname}
            </div>
            <img src={profileImage} className="w-12.5 h-12.5 rounded-full object-cover" />
        </div>
    )
}
