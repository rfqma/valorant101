import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#0D0D0D',
        grey: '#BFBFBF',
        darkGreen: '#6A736B',
        lightGreen: '#818C82',
        'body-color': '#959cb1',
        secondary: colors.orange,
        success: colors.green,
        danger: colors.red,
        info: colors.blue,
        warning: colors.yellow,
        gray: colors.gray
      },
    },
    container: {
      center: true,
      padding: '1rem'
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
