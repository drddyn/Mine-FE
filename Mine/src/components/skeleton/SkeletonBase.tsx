import React from 'react'

interface SkeletonBaseProps {
    className?: string
}

export function SkeletonTitle({
    className = 'w-35 h-3.5',
    children,
}: { children?: React.ReactNode } & SkeletonBaseProps) {
    return <div className={`skeleton-shimmer bg-gray-200 ${className}`}>{children}</div>
}

export function SkeletonBox({ className }: SkeletonBaseProps) {
    return <div className={`skeleton-shimmer overflow-hidden bg-gray-200 ${className}`} />
}

export function SkeletonAvatar({ className = 'w-12.5 h-12.5' }: SkeletonBaseProps) {
    return <div className={`skeleton-shimmer rounded-full bg-gray-200  ${className}`} />
}
