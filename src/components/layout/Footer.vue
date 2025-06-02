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
  name: 'Jean-Auryel Akinotcho',
  year: new Date().getFullYear(),
  showBackToTop: true
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer class="bg-surface border-t border-main transition-theme">
    <div class="container-main py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Informations principales -->
        <div>
          <h3 class="text-lg font-bold text-main mb-4">
            {{ name }}
          </h3>
          <p class="text-secondary">
            Portfolio développé avec Vue.js 3, TypeScript et Tailwind CSS
          </p>
        </div>
        
        <!-- Liens rapides -->
        <div v-if="links && links.length">
          <h3 class="text-lg font-bold text-main mb-4">
            Liens rapides
          </h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.name">
              <a 
                :href="link.url"
                class="text-secondary hover:text-accent transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Réseaux sociaux -->
        <div v-if="socialLinks && socialLinks.length">
          <h3 class="text-lg font-bold text-main mb-4">
            Suivez-moi
          </h3>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-secondary hover:text-accent transition-colors"
              :title="social.name"
            >
              <span class="text-2xl">{{ social.icon }}</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-main mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-secondary text-sm">
            © {{ year }} {{ name }}. Tous droits réservés.
          </p>
          
          <!-- Bouton retour en haut -->
          <button 
            v-if="showBackToTop"
            @click="scrollToTop"
            class="mt-4 md:mt-0 skill-icon skill-icon-secondary hover:shadow-glow-cream dark:hover:shadow-glow-dark transition-all"
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