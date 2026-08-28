// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with your real domain once it is registered.
  site: 'https://techanddev.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
