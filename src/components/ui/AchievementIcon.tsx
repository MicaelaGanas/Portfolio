import type { AchievementIcon as AchievementIconType } from '@/types/portfolio'

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
}

export function AchievementIcon({ name }: { name: AchievementIconType }) {
  switch (name) {
    case 'scholar':
      return (
        <svg {...iconProps}>
          <path d="M2 5.5 8 2.5l6 3v1.5L8 10.5 2 7V5.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
          <path d="M5 8.25V11.5c0 .75 1.35 1.5 3 1.5s3-.75 3-1.5V8.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M13 7v3.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      )
    case 'certificate':
      return (
        <svg {...iconProps}>
          <rect x="2.5" y="3" width="11" height="10" rx="1" stroke="currentColor" strokeWidth="1.25" />
          <path d="M5.5 6.5h5M5.5 9h3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <circle cx="11.5" cy="9.5" r="1.75" stroke="currentColor" strokeWidth="1.1" />
        </svg>
      )
    case 'star':
      return (
        <svg {...iconProps}>
          <path
            d="M8 2.25 9.55 5.9l3.95.35-3 2.55 1 3.85L8 10.65 4.5 12.65l1-3.85-3-2.55 3.95-.35L8 2.25Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'award':
      return (
        <svg {...iconProps}>
          <circle cx="8" cy="6" r="3.25" stroke="currentColor" strokeWidth="1.25" />
          <path d="M5.75 8.75 4.5 13.5 8 11.75l3.5 1.75-1.25-4.75" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}
