module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        martin: ['Martin', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        jet: '#3D3B3D',
        cultured: '#EEEEEE',
        'dodger-blue': '#338BFD',
        bone: '#E4DFD1',
        'dark-slate-blue': '#4A4595',
        'soft-white': '#fafafa',
        'sonic-silver': '#787878'
      },
      fontSize: {
        xxs: '0.625rem'
      },
      spacing: {
        '86': '21.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
