interface Props {
    onClose?: () => void
}
export default function HarmfulKeywordModal({ onClose }: Props) {
    return (
        <div className="fixed inset-0 bg-gray-600-op40 z-999 flex items-center justify-center">
            <div className="relative z-10 w-120 h-53 rounded-2xl bg-gray-600-op70 px-8 py-8 flex flex-col justify-between shadow-[0_4px_8px_rgba(0,0,0,0.12),0_16px_32px_rgba(0,0,0,0.20)]">
                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold24 text-heart">유해 키워드가 감지되었습니다.</h2>
                    <p className="font-regular20 text-gray-100 leading-none">
                        3회 이상 감지될 경우 계정이 제한될 수 있습니다.
                    </p>
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className=" w-25 h-12 rounded-lg font-medium16 text-gray-100 border border-gray-100 hover:border-transparent hover:bg-heart"
                    >
                        예
                    </button>
                </div>
            </div>
        </div>
    )
}
