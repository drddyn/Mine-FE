import React from 'react'

interface SkeletonBaseProps {
    className?: string
}

export function SkeletonTitle({
    width = 'w-full',
    height = 'h-6',
    className = '',
    rounded = '', // 기본값을 빈 문자열로 두어 직사각형으로 만듭니다.
    children,
}: { width?: string; height?: string; rounded?: string; children?: React.ReactNode } & SkeletonBaseProps) {
    return (
        /* rounded 클래스를 제거하고 props로 받은 rounded를 적용합니다 */
        <div className={`skeleton-shimmer bg-gray-200 ${width} ${height} ${rounded} ${className}`}>
            {children}
        </div>
    )
}

export function SkeletonBox({
    width = 'w-full',
    height = 'h-full',
    rounded = '',
    className = '',
}: { width?: string; height?: string; rounded?: string } & SkeletonBaseProps) {
    return (
        <div className={`skeleton-shimmer bg-gray-200 ${width} ${height} ${rounded} ${className}`} />
    )
}

export function SkeletonAvatar({
    size = 'w-10 h-10',
    className = '',
}: { size?: string } & SkeletonBaseProps) {
    return (
        <div className={`skeleton-shimmer rounded-full bg-gray-200 ${size} ${className}`} />
    )
}

