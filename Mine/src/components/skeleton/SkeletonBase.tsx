import React from 'react'

interface SkeletonBaseProps {
    className?: string
}

export function SkeletonTitle({
    width = 'w-full',
    height = 'h-6',
    className = '',
    children,
}: { width?: string; height?: string; children?: React.ReactNode } & SkeletonBaseProps) {
    return (
        <div className={`skeleton-shimmer rounded bg-gray-600-op80 ${width} ${height} ${className}`}>
            {children}
        </div>
    )
}

export function SkeletonBox({
    width = 'w-full',
    height = 'h-full',
    rounded = 'rounded-md',
    className = '',
}: { width?: string; height?: string; rounded?: string } & SkeletonBaseProps) {
    return (
        <div className={`skeleton-shimmer bg-gray-600-op80 ${width} ${height} ${rounded} ${className}`} />
    )
}

export function SkeletonAvatar({
    size = 'w-10 h-10',
    className = '',
}: { size?: string } & SkeletonBaseProps) {
    return (
        <div className={`skeleton-shimmer rounded-full bg-gray-600-op80 ${size} ${className}`} />
    )
}