interface Props {
    onClose?: () => void
}
export default function HarmfulKeywordModal({ onClose }: Props) {
    return (
        <div className="fixed inset-0 bg-gray-600/40 z-999 flex items-center justify-center">
            <div className="relative z-10 rounded-2xl bg-gray-modal/95 px-8 py-6 flex flex-col gap-4 justify-between shadow-[0_4px_8px_rgba(0,0,0,0.12),0_16px_32px_rgba(0,0,0,0.20)]">
                <div className="flex flex-col gap-2 min-w-85">
                    <h2 className="font-semibold20 text-error">유해 키워드가 감지되었습니다.</h2>
                    <p className="font-medium16 text-gray-100 leading-none">
                        3회 이상 감지될 경우 계정이 제한될 수 있습니다.
                    </p>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="w-20 h-10 rounded-lg font-medium16 text-gray-100 border border-gray-100 hover:border-transparent hover:bg-error"
                    >
                        예
                    </button>
                </div>
            </div>
        </div>
    )
}
