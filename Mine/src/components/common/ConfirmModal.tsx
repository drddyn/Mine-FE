interface ConfirmModalProps {
    title: string
    description?: string
    confirmText?: string
    cancelText?: string
    onConfirm: () => void
    onCancel: () => void
    isLoading?: boolean
}

export default function ConfirmModal({
    title,
    description,
    confirmText = '예',
    cancelText = '아니요',
    onConfirm,
    onCancel,
    isLoading = false,
}: ConfirmModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 w-120 h-53 rounded-2xl bg-gray-500 px-8 py-8 flex flex-col justify-between shadow-[0_4px_8px_rgba(0,0,0,0.12),0_16px_32px_rgba(0,0,0,0.20)]">
                <div>
                    <h2 className="mb-3 font-semibold24 text-white">{title}</h2>
                    {description && (
                        <p className="font-regular20 text-white/70 whitespace-pre-line" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
                            {description}
                        </p>
                    )}
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="flex items-center justify-center w-25 h-12 rounded-lg border border-white/30 font-medium16 text-white hover:bg-white/10 disabled:opacity-50"
                    >
                        {isLoading ? '생성 중...' : confirmText}
                    </button>
                    <button
                        onClick={onCancel}
                        className="flex items-center justify-center w-25 h-12 rounded-lg border border-white/30 font-medium16 text-white hover:bg-white/10"
                    >
                        {cancelText}
                    </button>
                </div>
            </div>
        </div>
    )
}