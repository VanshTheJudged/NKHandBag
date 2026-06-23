import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        bg: 'var(--bg)',
        'bg-elev-1': 'var(--bg-elev-1)',
        'bg-elev-2': 'var(--bg-elev-2)',
        'grid-line': 'var(--grid-line)',

        // Foregrounds
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',

        // Accents
        accent: 'var(--accent)',
        'accent-warm': 'var(--accent-warm)',

        // Borders
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
      },
      fontFamily: {
        // Warm Studio fixed
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        // Project-specific display face for heavy condensed type
        display: ['var(--font-anton)', 'Impact', 'sans-serif'],
      },
      spacing: {
        // 4pt scale extensions
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
        '26': '6.5rem',  // 104px
        '30': '7.5rem',  // 120px
      },
      letterSpacing: {
        'widest-plus': '0.18em',
      },
      backgroundImage: {
        // Subtle vertical grid lines for that "design grid" feel
        'studio-grid': `repeating-linear-gradient(
          90deg,
          transparent,
          transparent calc((100vw - 2rem) / 12 - 1px),
          var(--grid-line) calc((100vw - 2rem) / 12 - 1px),
          var(--grid-line) calc((100vw - 2rem) / 12)
        )`,
      },
      boxShadow: {
        // Luxe-glass elevation
        'luxe-1': '0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px rgba(0,0,0,0.4)',
        'luxe-2': '0 1px 0 rgba(255,255,255,0.06) inset, 0 16px 48px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
