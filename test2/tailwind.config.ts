import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStopPositions: {
        33: '30.5479%',
        66: '62.969%',
      },
      colors: {
        'purple': '#9504F6',
        'hotpink': '#FC00C7',
        'red': '#FD3C65',
        'yellow': '#FECA00',
        'blue': '#1076ED',
        'mint': '#45C8A5',
      },
    },
  },
  plugins: [],
};
export default config;
