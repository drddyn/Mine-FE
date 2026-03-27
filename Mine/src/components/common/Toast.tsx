import Check from '../../icon/check.svg?react'

interface ToastProps {
    message: string
}

export default function Toast({ message }: ToastProps) {
    return (
        <div className="flex w-67.5 h-12 px-5 py-3 items-center gap-3 rounded-lg bg-gray-600-op70 font-regular14 text-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            <Check className="w-4 h-4 shrink-0 **:fill-current **:stroke-current" />
            <span>{message}</span>
        </div>
    )
}