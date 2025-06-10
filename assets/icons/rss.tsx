import type { IconProps } from '..'

export function RssIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* 圆点 */}
      <circle cx="6" cy="18" r="2" fill="currentColor" stroke="none" />
      {/* 第一条弧线 */}
      <path d="M6 10a8 8 0 0 1 8 8" />
      {/* 第二条弧线 */}
      <path d="M6 6a12 12 0 0 1 12 12" />
    </svg>
  )
}
