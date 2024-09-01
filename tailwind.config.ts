import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-890': 'rgb(var(--color-slate-890) / <alpha-value>)',
        'green-master': 'rgb(var(--color-green-master) / <alpha-value>)',
        // primary: '#89F064',
      },
    },
  },
  plugins: [],
};
export default config;
