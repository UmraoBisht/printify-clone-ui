/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/background-IAMAETLT.svg')",
        "clothes": "url('/assets/clothes-mobile-Q6UN6X6P.webp')",
        "talk-to-sale": "url('/assets/talk-to-sales-N2GDBAGC.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
