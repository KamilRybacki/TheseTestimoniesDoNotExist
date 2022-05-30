const customTheme = require('./src/style/theme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: customTheme,
  content: [],
  plugins: [],
}
