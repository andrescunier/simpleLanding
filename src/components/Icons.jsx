// Íconos de trazo fino (24x24, stroke 1.7) para reemplazar emojis.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const PATHS = {
  briefcase:  <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
  chat:       <path d="M21 12a8 8 0 0 1-8 8H4l2.2-2.6A8 8 0 1 1 21 12Z" />,
  card:       <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>,
  box:        <><path d="M21 8.5v7a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 15.5v-7a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4a2 2 0 0 1 1 1.73Z" /><path d="M3.3 7.3 12 12.25l8.7-4.95M12 22V12.25" /></>,
  truck:      <><path d="M1 4h14v13H1zM15 9h4l4 4v4h-8" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></>,
  megaphone:  <path d="m3 11 16-6v14L3 13v-2ZM7 13.5V19a1.5 1.5 0 0 0 3 0v-4.5" />,
  gear:       <><circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M2 12h3m14 0h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  scale:      <path d="M12 3v18M5 7l7-2 7 2M5 7 2.5 13a3.5 3.5 0 0 0 5 0L5 7Zm14 0-2.5 6a3.5 3.5 0 0 0 5 0L19 7ZM8 21h8" />,
  chart:      <><path d="M3 3v18h18" /><path d="M7 15v-4m5 4V7m5 8v-6" /></>,
  rocket:     <path d="M12 15c-2-1-3-2-4-4 1.5-4.5 5-7.5 10-8-.5 5-3.5 8.5-8 10Zm0 0-3 6-1-4-4-1 6-3Zm5.5-9.5h.01" />,
  folder:     <path d="M3 6a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" />,
  shield:     <path d="M12 3 4.5 6v5c0 4.6 3.2 8.4 7.5 10 4.3-1.6 7.5-5.4 7.5-10V6L12 3Zm-2.8 9 2 2 3.6-3.8" />,
  puzzle:     <path d="M10 3.5a1.8 1.8 0 0 1 3.6 0V5H17a2 2 0 0 1 2 2v3.4h1.5a1.8 1.8 0 0 1 0 3.6H19V19a2 2 0 0 1-2 2h-3.4v-1.5a1.8 1.8 0 0 0-3.6 0V21H7a2 2 0 0 1-2-2v-3.4H3.5a1.8 1.8 0 0 1 0-3.6H5V7a2 2 0 0 1 2-2h3V3.5Z" />,
  sliders:    <path d="M4 21v-6m0-4V3m8 18v-8m0-4V3m8 18v-4m0-4V3M2 15h4m6-6h4m6 8h4" />,
  building:   <><rect x="4" y="3" width="12" height="18" rx="1" /><path d="M16 9h4v12h-4M8 7h1m3 0h1M8 11h1m3 0h1M8 15h1m3 0h1M10 21v-3h2v3" /></>,
  handshake:  <path d="m11 17 2 2a2 2 0 0 0 2.83-2.83l-4-4L15 9l5 5V7l-5-3-4.5 1.5L6 4 1 7v7l3 3 4.17-4.17" />,
  bolt:       <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  antenna:    <><circle cx="12" cy="12" r="2" /><path d="M12 14v7M7.8 7.8a6 6 0 0 0 0 8.4m8.4-8.4a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14" /></>,
  link:       <path d="M9 15 15 9m-4.5-3 1.8-1.8a4 4 0 0 1 5.5 5.5L16 11.5m-8 1-1.8 1.8a4 4 0 1 0 5.5 5.5L13.5 18" />,
  brain:      <path d="M9.5 3A2.5 2.5 0 0 0 7 5.5v.3A3.2 3.2 0 0 0 4.5 9a3.2 3.2 0 0 0-1 5.4A3.2 3.2 0 0 0 6 19.5 2.5 2.5 0 0 0 11 19V5.5A2.5 2.5 0 0 0 9.5 3Zm5 0A2.5 2.5 0 0 1 17 5.5v.3A3.2 3.2 0 0 1 19.5 9a3.2 3.2 0 0 1 1 5.4A3.2 3.2 0 0 1 18 19.5 2.5 2.5 0 0 1 13 19V5.5A2.5 2.5 0 0 1 14.5 3Z" />,
  cart:       <><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /><path d="M2 3h3l2.5 12.5h10L20 7H6" /></>,
  alert:      <path d="M12 3 1.8 20.2h20.4L12 3Zm0 7v4m0 3h.01" />,
  search:     <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  map:        <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14" />,
}

export default function Icon({ name, className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}
