import { defineConfig } from 'vite';

export default defineConfig({
    base: './sad-cat',

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
