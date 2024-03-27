/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primaryBG: '#1A1A1A',
        secondaryBG: '#272626',
        blueColor: '#25CEDE',
        skillsBG: 'linear-gradient(320deg, #232732 14.78%, #15181C 95.73%)',
      },
      boxShadow: {
        'shadow-medium': '6.223px 6.223px 18.669px 0px #000, -6.223px -6.223px 18.669px 0px #24282e',
        'shadow-input': '6.223px 6.223px 18.669px 0px #000 inset, -6.223px -6.223px 18.669px 0px #24282e inset',
        'shadow-oval': '6.223px 6.223px 18.669px 0px #000, -6.223px -6.223px 18.669px 0px #24282e',
        'shadow-icon': '5px 5px 10px -5px #24282e inset, -5px -5px 10px -5px  #000 inset',
        'shadow-skills': '6px 6px 12px 0px rgba(0, 0, 0, 0.25), -6px -2px 12px 0px #24282e',
        'shadow-white-icon': '3px 3px 5px 0px rgba(0, 0, 0, 0.3), 10px -10px 20px 0px #fff',
        'shadow-white-icon-hover': '3px 3px 4.669px 0px #000 inset, -6.223px -6.223px 18.669px 0px #f3f3f3 inset',
        'shadow-phone': '0px 14px 16px rgba(0, 0, 0, 0.9 )',
      },
    },
  },
  plugins: [],
};
