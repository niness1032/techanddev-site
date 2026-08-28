/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  semi: true,
  printWidth: 80,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
