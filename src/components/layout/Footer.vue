<script setup lang="ts">
export interface FooterProps {
  name: string;
  year?: number;
  socialLinks?: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
  links?: Array<{
    name: string;
    url: string;
  }>;
  showBackToTop?: boolean;
}

withDefaults(defineProps<FooterProps>(), {
  year: new Date().getFullYear(),
  showBackToTop: true
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Informations principales -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            {{ name }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Portfolio développé avec Vue.js 3, TypeScript et Tailwind CSS
          </p>
        </div>
        
        <!-- Liens rapides -->
        <div v-if="links && links.length">
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            Liens rapides
          </h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.name">
              <a 
                :href="link.url"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Réseaux sociaux -->
        <div v-if="socialLinks && socialLinks.length">
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            Suivez-moi
          </h3>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              :title="social.name"
            >
              <span class="text-2xl">{{ social.icon }}</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            © {{ year }} {{ name }}. Tous droits réservés.
          </p>
          
          <!-- Bouton retour en haut -->
          <button 
            v-if="showBackToTop"
            @click="scrollToTop"
            class="mt-4 md:mt-0 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Retour en haut"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>