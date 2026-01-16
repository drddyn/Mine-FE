interface ButtonProps {
    title: string
    size?: string
    variant?: ButtonVariant
    onclick?: () => void
}

type ButtonVariant = 'main' | 'white'

export default function ButtonwithText({ title, size, variant = 'main', onclick }: ButtonProps) {
    const VARIANT_CLASS: Record<ButtonVariant, string> = {
        main: 'bg-main-default text-white hover:bg-main-emphasis',
        white: 'border border-main-default bg-white text-main-default hover:bg-main-opacity20',
    }
    return (
        <button
            className={`w-80 h-12.5 rounded-2xl  shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)]  ${size} ${VARIANT_CLASS[variant]}`}
            onClick={onclick}
        >
            {title}
        </button>
    )
}
