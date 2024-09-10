/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        md: "30px",
        lg: "30px",
        xl: "30px",
      },
    },
    extend: {
      colors: {
        mainColor: "#0089F7",
        secondaryColor: "#101F46",
        accentColor: "#F56960",
        primaryColor: "#0791BE",
        backGround:"#F8F8F8",
      },
    },
  },
  plugins: [],
};
