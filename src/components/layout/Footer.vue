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

// Fonction pour obtenir l'icône SVG selon le type (seulement LinkedIn et GitHub)
const getSocialIcon = (iconName: string) => {
  const icons: Record<string, string> = {
    linkedin: `<path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>`,
    github: `<path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>`
  };
  return icons[iconName.toLowerCase()] || icons.github;
};
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 py-8">
      <!-- Grille principale : Infos à gauche, Réseaux sociaux à droite -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        <!-- Informations principales (à gauche) -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            {{ name }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Portfolio développé avec Vue.js 3, TypeScript et Tailwind CSS
          </p>
          
          <!-- Liens additionnels si fournis -->
          <div v-if="links && links.length > 0" class="space-y-2">
            <a
              v-for="link in links"
              :key="link.name"
              :href="link.url"
              class="block text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
        
        <!-- Réseaux sociaux (à droite) -->
        <div v-if="socialLinks && socialLinks.length" class="md:text-right">
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            Suivez-moi
          </h3>
          <div class="flex space-x-4 md:justify-end">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :title="social.name"
            >
              <svg 
                class="w-6 h-6 transition-transform duration-300 hover:scale-110" 
                viewBox="0 0 24 24"
                v-html="getSocialIcon(social.icon)"
              ></svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Copyright et bouton retour en haut -->
      <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            © {{ year }} {{ name }}. Tous droits réservés.
          </p>
          
          <!-- Bouton retour en haut -->
          <button
            v-if="showBackToTop"
            @click="scrollToTop"
            class="back-to-top-btn"
            title="Retour en haut"
          >
            <svg class="h-5 w-5 transition-transform duration-300 hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Styles pour les liens sociaux - SIMPLIFIÉ */
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f3f4f6;
  color: #6b7280;
  transition: all 0.3s ease;
  text-decoration: none;
}

.dark .social-link {
  background-color: #374151;
  color: #9ca3af;
}

.social-link:hover {
  background-color: #dbeafe;
  color: #2563eb;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.dark .social-link:hover {
  background-color: #1e3a8a;
  color: #60a5fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Bouton retour en haut - SIMPLIFIÉ */
.back-to-top-btn {
  margin-top: 1rem;
  padding: 12px;
  border-radius: 50%;
  background-color: #f3f4f6;
  color: #6b7280;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dark .back-to-top-btn {
  background-color: #374151;
  color: #9ca3af;
}

.back-to-top-btn:hover {
  background-color: #dbeafe;
  color: #2563eb;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.dark .back-to-top-btn:hover {
  background-color: #1e3a8a;
  color: #60a5fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
  .back-to-top-btn {
    margin-top: 0;
  }
}

/* Animation des icônes */
.social-link svg {
  transition: transform 0.3s ease;
}

.social-link:hover svg {
  transform: scale(1.1);
}
</style>