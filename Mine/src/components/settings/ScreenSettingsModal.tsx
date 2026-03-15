import ScreenSettings from './ScreenSettings'

interface ScreenSettingsModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ScreenSettingsModal({ isOpen, onClose }: ScreenSettingsModalProps) {
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-gray-600-op30 flex items-center justify-center z-999"
            onClick={onClose}
        >
            <div
                className="relative bg-gray-600-op70 rounded-2xl p-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                onClick={(e) => e.stopPropagation()}
            >
                <ScreenSettings />
            </div>
        </div>
    )
}