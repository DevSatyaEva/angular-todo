export const USER_ICONS: Record<string, Record<string, string>> = {
  fw: {
    // Prefix 'fw' (FontWeight)
    home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" fill="currentColor"/>
                  </svg>`,

    user: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" fill="currentColor"/>
                    <path d="M4 20v-2c0-3 4-5 8-5s8 2 8 5v2H4z" fill="currentColor"/>
                  </svg>`,
  },
  sm: {
    // Prefix 'sm' (Small size)
    settings: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.14 12.94l1.43-2.49-1.77-3.07-2.77-.49-1.16-2.6-3.08.05-1.16 2.6-2.77.49-1.77 3.07 1.43 2.49-.15 2.99 2.52 1.73 2.68-.62 2.68.62 2.52-1.73-.15-2.99z" fill="currentColor"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>`,
    search: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
                  <line x1="16" y1="16" x2="22" y2="22" stroke="currentColor" stroke-width="2"/>
                </svg>`,
  },
};
