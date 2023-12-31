import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  // used to generate images
  site: 'https://SkelegonDK.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  publicPath: '/brutal/',
  base: '/',
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
