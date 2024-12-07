/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gummmy: ["Sour Gummy", "serif"],
        lexend:["Lexend", "sans-serif"]
      },
      transitionProperty: {
        width: 'width',
      },
      transitionDuration: {
        400: '400ms', 
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)', 
      },
      screens:{
        "laptop":"1200px",
        "laptop2":"1091px",
        "laptop3":"1193px",
        "big-sc":"1911px",
        "computer":"1600px",
        "medium":"745px",
        "sm-md":"560px",
        "md-lg":"950px"
      }
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
