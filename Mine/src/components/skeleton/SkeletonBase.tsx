import React from 'react'

interface SkeletonBaseProps {
    className?: string
}

export function SkeletonTitle({ className, children }: { children?: React.ReactNode } & SkeletonBaseProps) {
    return <div className={`skeleton-shimmer bg-gray-200 w-35 h-3.5 ${className}`}>{children}</div>
}

export function SkeletonBox({ className }: SkeletonBaseProps) {
    return <div className={`skeleton-shimmer relative overflow-hidden bg-gray-200 ${className}`} />
}

export function SkeletonAvatar({ className }: SkeletonBaseProps) {
    return <div className={`skeleton-shimmer rounded-full bg-gray-200 w-12.5 h-12.5 ${className}`} />
}
