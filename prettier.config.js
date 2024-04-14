const styleguide = require('@vercel/style-guide/prettier');
styleguide['tabWidth'] = 4
module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
