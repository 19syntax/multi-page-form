/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-sidebar": "url('./assets/images/bg-sidebar-desktop.svg')",
      },
      width: {
        17: "17rem",
        600: "840px",
        500: "440px",
      },
      colors: {
        MarineBlue: "hsl(213, 96%, 18%)",
        Purplish: "hsl(243, 100%, 62%)",
        Pastel: "hsl(228, 100%, 84%)",
        Light: "hsl(206, 94%, 87%)",
        Strawberry: "hsl(354, 84%, 57%)",
        Cool: "hsl(231, 11%, 63%)",
        Gray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 94%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
