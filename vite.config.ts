import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        second: 'secondPage.html',
        third: 'thirdPage.html',
      },
    },
  },
});
