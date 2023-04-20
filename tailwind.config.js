module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
   
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      colors: {
        main: '#95BF74',
        second: '#5E8C31'
      },
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
      filter: {
        'blur': 'blur(8px)',
      }
    },
  },
  variants: {
    filter: ['responsive'],
    extend: {
      backgroundColor: ["checked", "dark"],
      borderColor: ["checked", "dark"],
      inset: ["checked", "dark"],
      zIndex: ["hover", "active", "dark"],
    },
  },
  plugins: [
    
  ],
  future: {
  },
};
