/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm:"360px",
      sm: '480px',
      md: '768px',
      lg: '1028px',
      xl: '1440px',
    },
    container: {
      center: true
    },
    
    extend: {
      backgroundImage: {
        "menu-background": "url('https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/MerrillEnglishMenuBkgrnd.png?alt=media&token=3c05924b-f185-4f90-b7b9-738dd6389de3')",
        "home-hero-image": "url('https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FDesktopHomeHero.png?alt=media&token=46327c98-f9a6-4682-bce0-ce204b642297')"
      },
      colors: {
        'green-0': '#ABCDB5',	
        'green-1': '#91EEAE',
       'green-2': '#A6EBBB',
        'green-3': '#74C68D',
       'green-4': '#54C074',
        'blue-0': '#A3ACC0',	
       'blue-1': '#99B0EA',
       'blue-2': '#A9BBE6',
       'blue-3': '#7387B7',
        'blue-4': '#5771B0',
        'yellow-0': '#F5FAD0',	
        'yellow-1': '#F1FD9B',
        'yellow-2': '#F3FDB2',
        'yellow-3': '#ECF992',
        'yellow-4': '#E7F96C',
      },
      width: {
        'card-lg': '350px',
        'card': '300px',
        "pricing-card": "275px",
        'carousel-slide': "1000px"

      },
      height: {
        "pricing-card": "400px",
        "card" : "420px",
        "cardImg": "192px",
        'tablet-menu': "568px",
        'phone-menu': "500px",
        'desktop-footer': '556px',
        'footer': '624px',
        'home-hero': '720px',
        'home-hero-phone': "360px",
        'desktop-section': '600px'
        

      },
      backgroundPosition : {
        'phone-menu' : "right 1rem top 10rem"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}