import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        second: 'public/secondPage.html',
        third: 'public/thirdPage.html',
      },
    },
  },
});
