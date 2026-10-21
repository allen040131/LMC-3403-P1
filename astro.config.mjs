import { defineConfig } from 'astro/config';

export default defineConfig({
  redirects: {
    '/issue': '/the-issue',
    '/why-it-matters': '/the-issue',
    '/resources': '/sources',
  },
});
