import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
