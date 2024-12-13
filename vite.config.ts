import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Gör så att alla resurser använder relativa länkar

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
