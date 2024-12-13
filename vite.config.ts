import { defineConfig } from 'vite';

export default defineConfig({
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
