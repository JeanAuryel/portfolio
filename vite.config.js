import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  
  // Configuration des alias pour les imports
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  
  // Configuration CSS simplifiée - PostCSS gère Tailwind
  css: {
    // Mode développement avec source maps
    devSourcemap: true,
    
    // Configuration pour une meilleure performance
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
  
  // Optimisation des builds
  build: {
    // Optimiser les CSS
    cssCodeSplit: true,
    
    // Optimiser les chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Vue dans son propre chunk
          'vue-vendor': ['vue', 'vue-router'],
        },
      },
    },
    
    // Améliorer les performances
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
  
  // Configuration du serveur de développement
  server: {
    // Hot reload optimisé
    watch: {
      usePolling: false,
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
    
    // HMR configuration
    hmr: {
      overlay: false,
    },
  },
  
  // Configuration des dépendances à optimiser
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ],
    exclude: [
      'vue-demi',
    ],
  },
  
  // Variables d'environnement
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  },
})