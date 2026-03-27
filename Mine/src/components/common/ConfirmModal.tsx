interface ConfirmModalProps {
    title: string
    description?: string
    itemName?: string
    confirmText?: string
    cancelText?: string
    onConfirm: () => void
    onCancel: () => void
    isLoading?: boolean
}

export default function ConfirmModal({
    title,
    description,
    itemName,
    confirmText = '예',
    cancelText = '아니요',
    onConfirm,
    onCancel,
    isLoading = false,
}: ConfirmModalProps) {
    return (
        <div className="fixed inset-0 bg-gray-600-op40 z-999 flex items-center justify-center">
            <div className="relative z-10 w-120 h-53 rounded-2xl bg-gray-600-op70 px-8 py-8 flex flex-col justify-between shadow-[0_4px_8px_rgba(0,0,0,0.12),0_16px_32px_rgba(0,0,0,0.20)]">
                <div>
                    <h2 className="mb-3 font-semibold24 text-gray-100">{title}</h2>
                    {(description || itemName) && (
                        <p
                            className="font-regular20 text-gray-100-op70 whitespace-pre-line"
                            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                        >
                            {description && <span>{description} </span>}
                            {itemName && (
                                <>
                                    <span className="font-semibold20 text-gray-100">{itemName}</span>
                                    <span>이(가) 삭제됩니다.</span>
                                </>
                            )}
                        </p>
                    )}
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="flex items-center justify-center w-25 h-12 rounded-lg border border-gray-100-op30 font-medium16 text-gray-100 hover:bg-gray-600-op70 disabled:opacity-50"
                    >
                        {isLoading ? '처리 중...' : confirmText}
                    </button>
                    <button
                        onClick={onCancel}
                        className="flex items-center justify-center w-25 h-12 rounded-lg border border-gray-100-op30 font-medium16 text-gray-100 hover:bg-gray-600-op70"
                    >
                        {cancelText}
                    </button>
                </div>
            </div>
        </div>
    )
}