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
        <div className="fixed inset-0 bg-gray-600/40 z-999 flex items-center justify-center">
            <div className="relative z-10 px-8 py-6 rounded-2xl bg-gray-modal/95 flex flex-col gap-4 justify-between shadow-[0_4px_8px_rgba(0,0,0,0.12),0_16px_32px_rgba(0,0,0,0.20)]">
                <div className="min-w-85 flex flex-col gap-2">
                    <h2 className="font-semibold20 text-gray-100">{title}</h2>
                    {(description || itemName) && (
                        <p
                            className="font-16 text-gray-100-op70"
                            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                        >
                            {description && <span>{description} </span>}
                            {itemName && (
                                <>
                                    <span className="font-light16 text-gray-100">{itemName}</span>
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
                        className="flex items-center justify-center w-20 h-10 rounded-lg border border-gray-100-op30 font-medium16 text-gray-100 hover:border-transparent hover:bg-gray-600-op70 disabled:opacity-50"
                    >
                        {confirmText}
                    </button>
                    <button
                        onClick={onCancel}
                        className="flex items-center justify-center w-20 h-10 rounded-lg border border-gray-100-op30 font-medium16 text-gray-100 hover:border-transparent hover:bg-gray-600-op70"
                    >
                        {cancelText}
                    </button>
                </div>
            </div>
        </div>
    )
}
