/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "primary": ['Inter','sans-serif']
      },
      colors: {
        'custom-dark-blue': '#201E43',
        'custom-teal': '#508C9B',
        'deep-blue': '#134B70',
        'light-gray': '#EEEEEE',
        'soft-blue': '#6EACDA',
        'muted-blue': '#5A639C',
        'medium-blue': '#7776B3',
        'soft-lavender': '#9B86BD',
        'pastel-pink': '#E2BBE9',
        'dark-muted-blue': '#4A527C',
        'custom-purple': '#3C0753',
        'custom-blue': '#96C9F4',
        'custom-blue-dark': '#0F67B1',

      },
    },
  },
  plugins: [],
}

