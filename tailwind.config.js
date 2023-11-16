module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      sm1: '640px',
      sm2: '700px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {

      },
      keyframes: {
        openAccordion : { 
          '0%': { maxHeight: '0' },
          '100%': { maxHeight: '190px' }
        },
        closeAccordion : {
          '0%': { maxHeight: '190px' },
          '100%': { maxHeight: '0' }
        }
      },
      animation : {
        openAccordion : 'openAccordion 0.4s ease-in-out forwards',
        closeAccordion : 'closeAccordion 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}
