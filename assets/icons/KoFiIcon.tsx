import type { IconProps } from '..'

export function KoFiIcon(props: IconProps = {}) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* 杯身 */}
      <rect x="3" y="8" width="13" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
      {/* 杯把 */}
      <path d="M16 10c2 0 3 1 3 3s-1 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* 杯口 */}
      <ellipse cx="9.5" cy="8" rx="6.5" ry="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
} 