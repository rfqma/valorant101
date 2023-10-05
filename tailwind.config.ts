import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#F2F2F2',
      black: '#0D0D0D',
      grey: '#BFBFBF',
      darkGreen: '#6A736B',
      lightGreen: '#818C82',
      'body-color': '#959cb1'
    },
    screens: {
      xs: '450px',
      sm: '575px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    }
  },
  plugins: [],
}
export default config
