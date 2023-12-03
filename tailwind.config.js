/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '200px',
      '7': '190px',
      '8': '50px',
      '9': '40px',
      '10': '150px',
      '11': '100px',
      '12': '3px',
      '13': '1000px',
        '14': '500px'
    },
    colors:{
      yz: '#4B4E53',
      yz2: '#7E8082',
      bgc: '#B7D0D7',
      black: '#211219',
      womco: '#2F343A',
      
    },
  },
  },
  plugins: [],
}

