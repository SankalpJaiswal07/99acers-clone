import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "calc(100%-300px)": "calc(100% - 300px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-free":
          "linear-gradient(to right, transparent 40%, rgb(186, 221, 201) 10%, transparent 50%)",
        "gradient-new":
          "linear-gradient(to right, transparent 40%, #eff1f3 10%, transparent 50%)",
      },
      keyframes: {
        fre_backplay: {
          "0%": { "background-position": "100% 100%" },
          "50%": { "background-position": "0 0" },
          "100%": { "background-position": "100% 100%" },
        },
        new_backplay: {
          "0%": { backgroundPosition: "100% 100%" },
          "50%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        new_placeholderShimmer: {
          "0%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0 0" },
        },
        new_bgcolor: {
          "0%": { background: "none" },
          "100%": { background: "none" },
        },
      },
      animation: {
        fre_backplay: "fre_backplay 3s infinite",
        new_backplay: "new_backplay 3s 0s 1",
        new_placeholderShimmer: "new_placeholderShimmer 1s 3s 1",
        new_bgcolor: "new_bgcolor 1s 4s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
