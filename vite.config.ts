import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        'src/assets/images/ThomasHope.svg',
        'src/assets/images/skater.webp',
        'src/assets/images/image3.svg',
        'src/assets/images/TonyAndrew.svg', 
      ]
    }
  }
})
