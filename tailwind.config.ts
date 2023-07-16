import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      info: "#0C63E7",
      primary: "#FCA2AC",
      secondary: "#FCD68E",
      black: colors.black,
      white: colors.white,
      gray: {
        50: "#FAFAFC",
        100: "#E9E9EC",
        200: "#C6C8CD",
        300: "#ACAEB6",
        400: "#92959F",
        500: "#777C87",
        600: "#5D6370",
        700: "#434959",
        800: "#293041",
        900: "#0f172a",
      },
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
    }),
    backgroundImage: {
      none: 'none',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900',
    },
  },
  plugins: [],
} satisfies Config