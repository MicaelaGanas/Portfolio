import type { ReactNode } from 'react'

const iconClass = 'h-10 w-10 md:h-11 md:w-11'

function IconWrap({ children, color }: { children: ReactNode; color: string }) {
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-xl md:h-16 md:w-16"
      style={{ backgroundColor: `${color}18` }}
    >
      {children}
    </div>
  )
}

const icons: Record<string, { color: string; node: ReactNode }> = {
  HTML5: {
    color: '#E34F26',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#E34F26" d="M4.5 2 3 4.2v15.6L12 22l9-2.2V4.2L19.5 2H4.5zm14.1 5.4H8.8v2.2h7.5l-.5 5.4H8.8v2.2h7.9l-.3 3.4-3.5 1-.3-.1-.3-1.6H9.6l.6 3.8 5.8 1.6 5.8-1.6.8-8.8H7.3l.2-2.2h11.1l.1-1.2z" />
      </svg>
    ),
  },
  CSS3: {
    color: '#1572B6',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#1572B6" d="M4.5 2 3 4.2v15.6L12 22l9-2.2V4.2L19.5 2H4.5zm14.4 5.4H8.8l.2 2.2h9.5l-.6 6.6-4.1 1.1-4.1-1.1-.3-2.8H7.3l.5 4.2 5.8 1.6 5.8-1.6 1-10.8z" />
      </svg>
    ),
  },
  JavaScript: {
    color: '#F7DF1E',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path fill="#000" d="M15.9 17.2c-.4.7-.8 1.2-1.8 1.2-1 0-1.6-.5-1.6-1.5V12h2.1v4.5c0 .4.2.6.5.6.4 0 .6-.2.8-.7v-4.4H18v4.6c0 1.8-1 2.7-2.5 2.7-1.3 0-2.1-.6-2.6-1.5v1.3zm-5.8.1c-.4.6-.9 1-1.7 1-1.1 0-1.8-.7-1.8-1.8V12H9.5v4.6c0 .5.3.8.7.8.4 0 .7-.2 1-.7V12h2.1v5.3zM16.2 8.6l-2.3 1.2-.4-1.9 2.3-1.2.4 1.9z" />
      </svg>
    ),
  },
  React: {
    color: '#61DAFB',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  TypeScript: {
    color: '#3178C6',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path fill="#fff" d="M13.5 16.5v1.8c.8.4 1.7.6 2.7.6 1.3 0 2.3-.3 3-.9.7-.6 1.1-1.5 1.1-2.6 0-.8-.2-1.5-.6-2.1-.4-.6-1.2-1.2-2.4-1.8-1-.5-1.6-.9-1.9-1.2-.3-.3-.5-.7-.5-1.1 0-.4.2-.7.5-1 .3-.2.7-.4 1.2-.4.5 0 .9.1 1.3.4.4.3.6.7.7 1.2h2.1c0-.9-.4-1.7-1.1-2.3-.7-.6-1.7-.9-2.9-.9-1.2 0-2.2.3-2.9.9-.7.6-1.1 1.4-1.1 2.4 0 1.4.9 2.5 2.6 3.3 1 .5 1.6.8 1.9 1 .3.2.5.4.6.7.1.3.2.6.2.9 0 .5-.2.9-.6 1.2-.4.3-.9.5-1.5.5-.7 0-1.3-.2-1.8-.6-.5-.4-.8-1-.9-1.7H9.8c.1 1.1.5 2 1.3 2.6.8.7 1.9 1 3.3 1 1.4 0 2.5-.3 3.3-1 .8-.6 1.2-1.5 1.2-2.5 0-1-.4-1.8-1.1-2.5-.7-.6-1.7-1.2-3-1.8-.9-.4-1.5-.8-1.8-1.1-.3-.3-.4-.6-.4-1 0-.4.1-.7.4-1 .3-.2.7-.4 1.2-.4z" />
      </svg>
    ),
  },
  Java: {
    color: '#ED8B00',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#ED8B00" d="M8.2 18.4s-.5.3.4.4c1.2.1 2 .1 3.4 0 1.1-.1 2.2-.4 2.2-.4s.4.2.9.4c-2.2 1-9.3.9-9.9.1zm-.3-2.1s-.6.4.3.5c1.3.2 3.5.2 5.7-.1 1.1-.2 2.2-.5 2.2-.5s.2.2.7.4c-2.6 1-8.8.8-8.9-.3zm6.5-4.2c1.4 1.6-.4 3-1.4 3.3-1.6.5-4-.1-4.2-.2.1 0 1.7 1.1 3.8.7 1.2-.2 2.3-1 1.8-3.8zm-5.5-3.5c0 0 2.4 2.4 6.1 2.4 1.9 0 2.6-.4 2.6-.4s-.4.7-1.4 1.2c-2.8 1.5-8.2.8-8.5.3.3-.1 1.2-.5 1.2-5.5z" />
        <path fill="#5382A1" d="M12.2 2.2s5.5 5.5-2.1 13.9c-.7.8-1.4 1.5-1.4 1.5s3.5-1.8 4.6-4.1c1.2-2.5.2-6.5-1.1-11.3z" />
      </svg>
    ),
  },
  'C++': {
    color: '#00599C',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#00599C" d="M12 2 2 7v10l10 5 10-5V7L12 2zm0 2.2 7.5 3.8v7.6L12 19.4l-7.5-3.8V7.9L12 4.2z" />
        <text x="12" y="15" textAnchor="middle" fill="#00599C" fontSize="7" fontFamily="monospace" fontWeight="700">
          ++
        </text>
      </svg>
    ),
  },
  Supabase: {
    color: '#3ECF8E',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#3ECF8E" d="M12 2 4 20h6.5l1.5-4.5H12l4-8.5L12 2z" />
      </svg>
    ),
  },
  Tailwind: {
    color: '#38BDF8',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#38BDF8"
          d="M12 6c-2.8 0-4.6 1.4-5.4 4.2 1.1-1.5 2.3-2 3.7-1.6.8.3 1.4.9 2 1.6.9 1 1.9 2.1 4.1 2.1 2.8 0 4.6-1.4 5.4-4.2-1.1 1.5-2.3 2-3.7 1.6-.8-.3-1.4-.9-2-1.6C15.2 7.1 14.2 6 12 6zM6.6 14c-2.8 0-4.6 1.4-5.4 4.2 1.1-1.5 2.3-2 3.7-1.6.8.3 1.4.9 2 1.6.9 1 1.9 2.1 4.1 2.1 2.8 0 4.6-1.4 5.4-4.2-1.1 1.5-2.3 2-3.7 1.6-.8-.3-1.4-.9-2-1.6-.9-1-1.9-2.1-4.1-2.1z"
        />
      </svg>
    ),
  },
  Git: {
    color: '#F05032',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#F05032" d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" />
      </svg>
    ),
  },
  Figma: {
    color: '#A259FF',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#A259FF" d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8z" />
        <path fill="#F24E1E" d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" />
        <path fill="#FF7262" d="M4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" />
        <path fill="#1ABCFE" d="M12 0h4a4 4 0 1 1 0 8h-4V0z" />
        <path fill="#0ACF83" d="M12 16a4 4 0 1 1 0 8v-8z" />
      </svg>
    ),
  },
  'Next.js': {
    color: '#F2F2F2',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#0A0A0A" stroke="#F2F2F2" strokeWidth="1" />
        <path fill="#F2F2F2" d="M7 7.5h2.2l3.3 9.2 3.3-9.2H18l-4.8 12.5h-2.4L7 7.5z" />
      </svg>
    ),
  },
  Python: {
    color: '#3776AB',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#3776AB"
          d="M12 2C7.1 2 4 4.2 4 7.5c0 1.8 1 3.3 2.6 4.2L5 14v3h4.5c2.8 0 5.1-2.1 5.4-4.8H9.5V10h7.8c3.2 0 5.7-2.4 5.7-5.5C23 4.4 19.6 2 15 2h-3zm-1.2 2.2h1.2c2.2 0 3.8 1.1 3.8 2.8 0 1.5-1.2 2.5-3.2 2.5H9.5V6.8c.5-.4 1.1-.6 1.3-.6z"
        />
        <path
          fill="#FFD43B"
          d="M12 22c4.9 0 8-2.2 8-5.5 0-1.8-1-3.3-2.6-4.2L19 10v-3h-4.5c-2.8 0-5.1 2.1-5.4 4.8h5.4v1.7H7.1c-3.2 0-5.7 2.4-5.7 5.5C1.4 19.6 4.8 22 9.4 22h2.4zm1.2-2.2H12c-2.2 0-3.8-1.1-3.8-2.8 0-1.5 1.2-2.5 3.2-2.5h2.3v2.8c-.5.4-1.1.6-1.3.6z"
        />
      </svg>
    ),
  },
  AWS: {
    color: '#FF9900',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#FF9900"
          d="M6.5 17.2c3.1 2.3 7.2 3.5 11.2 3.5 2.2 0 4.4-.4 6.4-1.2.3-.1.3-.6 0-.7-2.8-1.6-6-2.5-9.3-2.5-3.1 0-6.1.8-8.7 2.3-.3.2-.2.5.4.6zm-.9-2.4c.3.2.7.2 1 .1 2.7-1.1 5.7-1.7 8.7-1.7 2.8 0 5.5.5 8.1 1.5.3.1.6 0 .7-.3l.3-.9c.1-.3 0-.6-.3-.7-2.9-1.2-6-1.8-9.1-1.8-3.4 0-6.7.7-9.7 2.1-.3.1-.4.5-.2.8l.5.9zm12.2-4.8c.4 2.4-1.8 4.5-4.2 4.5s-4.4-1.9-4.8-4.3c-.4-2.4 1.8-4.5 4.2-4.5s4.4 1.9 4.8 4.3zM12 4.5C7.3 4.5 3.4 7.8 2.5 12.2c-.1.5.3.9.8.9h1.6c.4 0 .7-.3.8-.7.6-2.8 3-4.9 6-4.9 2.2 0 4.2 1.1 5.4 2.8.2.3.6.4.9.2l1.2-.7c.4-.2.5-.7.3-1.1C17.2 6.8 14.8 4.5 12 4.5z"
        />
      </svg>
    ),
  },
  DigitalOcean: {
    color: '#0080FF',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#0080FF"
          d="M12 3c-3.9 0-7 2.5-7 6.2 0 2.4 1.3 4.5 3.3 5.7-.4 1.1-.9 2.4-1.5 3.6-.1.2 0 .5.2.6.1.1.3.1.5 0 2.5-1.2 4.4-2.2 5.8-2.8.7.1 1.4.1 2.2.1 3.9 0 7-2.5 7-6.2S15.9 3 12 3zm0 10.5c-2.3 0-4.2-1.7-4.2-3.8S9.7 6 12 6s4.2 1.7 4.2 3.7-1.9 3.8-4.2 3.8z"
        />
      </svg>
    ),
  },
  ML: {
    color: '#D31027',
    node: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="17" r="2" fill="#D31027" />
        <circle cx="12" cy="11" r="2" fill="#D31027" />
        <circle cx="18" cy="6" r="2" fill="#D31027" />
        <path fill="none" stroke="#D31027" strokeWidth="1.5" d="M6 17 12 11l6-5" />
      </svg>
    ),
  },
}

const fallbackColor = '#D31027'

export function TechStackIcon({ name }: { name: string }) {
  const entry = icons[name]
  if (!entry) {
    return (
      <IconWrap color={fallbackColor}>
        <span className="font-mono text-sm font-bold text-nuclear-red">{name.slice(0, 2)}</span>
      </IconWrap>
    )
  }
  return <IconWrap color={entry.color}>{entry.node}</IconWrap>
}
