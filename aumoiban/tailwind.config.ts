import { renderUrlImage } from "./utils/log-helper";
import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-k1": renderUrlImage("/assets/images/dkn-k-3.svg"),
        "background-k2": renderUrlImage("/assets/images/dkn-k-5.svg"),
        "background-k3": renderUrlImage("/assets/images/mall-k-1.svg"),
        "icon-undo": renderUrlImage("/assets/images/fi-rr-undo-alt.png"),
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
