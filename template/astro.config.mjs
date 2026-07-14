import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: { port: 3000 },
  vite: {
    css: {
      postcss: './postcss.config.js',
    },
  },
});
