import clsx from 'clsx'

type LogoProps = {
  color?: boolean
  black?: boolean
  white?: boolean
}
function Logo({ color = true, black, white }: LogoProps) {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 241.68"
    >
      <g id="Layer_3" data-name="Layer 3">
        <path
          className={clsx({
            'fill-gray-950': black,
            'fill-white': white,
            'fill-blue-600': color,
          })}
          d="M97.06 48.6v-1.46c0-3.15-1.3-4.86-4.72-4.86H58.98v11.1h32.76c3.19 0 5.32-1.16 5.32-4.79ZM92.11 59.11H58.98v12.03h34.01c3.38 0 4.67-1.71 4.67-4.93v-2.43c0-3.4-2.31-4.67-5.55-4.67Z"
        />
        <path
          className={clsx({
            'fill-gray-950': black,
            'fill-white': white,
            'fill-blue-600': color,
          })}
          d="M241.86 0H14.83C6.67 0 0 6.67 0 14.83V98.6c0 8.16 6.67 14.83 14.83 14.83h44.71l43.63 43.63c9.34 9.34 25.31 2.73 25.31-10.49v-33.15h113.37c8.16 0 14.83-6.67 14.83-14.83V14.83c0-8.16-6.67-14.83-14.83-14.83ZM104.93 67.97c0 6.01-2.5 9.3-9.35 9.3H51.63V36.16h43.35c6.85 0 9.35 3.28 9.35 9.28v2.45c0 6.96-3.84 8.12-6.29 8.37 2.73.23 6.89 1.5 6.89 8.07v3.63Zm41.1-4.07c0 8.93-3.89 13.37-12.4 13.37h-20.75v-6.73h19.27c4.49 0 6.52-2.5 6.52-7.36V36.16h7.36V63.9Zm59.04 13.37h-7.26V58.93h-36.18v18.34h-7.36V36.16h7.36v16.45h36.18V36.16h7.26v41.11Z"
        />
        <path
          className={clsx({
            'fill-gray-950': black,
            'fill-white': white,
            'fill-rose-600': color,
          })}
          d="M283.06 170.54h-29.01c-3.38 0-4.72 1.71-4.72 4.86v7.4h33.73c3.38 0 4.67-1.76 4.67-4.9v-2.5c0-3.15-1.3-4.86-4.67-4.86ZM219.26 171.14h-30.4v27.64h28.27c6.62 0 10.04-2.43 10.04-8.21v-9.11c0-6.06-1.71-10.32-7.91-10.32Z"
        />
        <path
          className={clsx({
            'fill-gray-950': black,
            'fill-white': white,
            'fill-rose-600': color,
          })}
          d="M385.17 128.25h-44.71l-43.63-43.63c-9.34-9.34-25.31-2.73-25.31 10.49v33.15H158.15c-8.16 0-14.83 6.67-14.83 14.83v83.77c0 8.16 6.67 14.83 14.83 14.83h227.03c8.16 0 14.83-6.67 14.83-14.83v-83.77c0-8.16-6.67-14.83-14.83-14.83Zm-150.64 62.92c0 8.74-4.58 14.34-13.88 14.34h-39.14V164.4h39.14c9.25 0 13.88 5.71 13.88 14.69v12.08ZM295 179.21c0 6.02-2.41 9.3-9.35 9.3h-36.32v2.91c0 4.86 2.08 7.36 6.62 7.36h38.03v6.73h-39.56c-8.47 0-12.45-4.44-12.45-13.37v-18.46c0-5.99 2.54-9.28 9.48-9.28h34.19c6.94 0 9.35 3.29 9.35 9.28v5.53Zm44.74 26.3h-16.89l-22.53-41.11h8.74l18.74 35.16h7.17l18.41-35.16h8.42l-22.07 41.11Z"
        />
      </g>
    </svg>
  )
}

export default Logo
