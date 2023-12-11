import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'handwrite': ['Birthstone Bounce','cursive'],
        'oswald': ['Oswald','sans-serif'],
        'bebas' :['Bebas Neue', 'sans-serif']
      
      },
    },
  },
  plugins: [],
}
export default config
