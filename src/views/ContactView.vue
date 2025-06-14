<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import SmartLoadingScreen from '@/components/ui/SmartLoadingScreen.vue';
import { useSmartLoading } from '@/composables/useSmartLoading';

// Smart Loading System - SEULEMENT pour les formulaires
const { loadingState } = useSmartLoading();

// Animation
const isLoaded = ref(false);

// État du formulaire
const isSubmitting = ref(false);

// Validation des formulaires
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const formData = reactive<FormState>({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const formErrors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isFormSubmitted = ref(false);

// Valider l'email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Valider le formulaire
function validateForm(): boolean {
  let isValid = true;
  
  // Réinitialiser les erreurs
  formErrors.name = '';
  formErrors.email = '';
  formErrors.subject = '';
  formErrors.message = '';
  
  // Valider le nom
  if (!formData.name.trim()) {
    formErrors.name = 'Le nom est requis';
    isValid = false;
  }
  
  // Valider l'email
  if (!formData.email.trim()) {
    formErrors.email = 'L\'email est requis';
    isValid = false;
  } else if (!isValidEmail(formData.email)) {
    formErrors.email = 'L\'email n\'est pas valide';
    isValid = false;
  }
  
  // Valider le sujet
  if (!formData.subject.trim()) {
    formErrors.subject = 'Le sujet est requis';
    isValid = false;
  }
  
  // Valider le message
  if (!formData.message.trim()) {
    formErrors.message = 'Le message est requis';
    isValid = false;
  } else if (formData.message.length < 10) {
    formErrors.message = 'Le message doit contenir au moins 10 caractères';
    isValid = false;
  }
  
  return isValid;
}

// Soumettre le formulaire avec loading intelligent
async function submitForm() {
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Simulation d'envoi avec délai réaliste
    const formSubmissionTime = Math.random() * 2000 + 1000; // 1-3 secondes
    
    await new Promise(resolve => setTimeout(resolve, formSubmissionTime));
    
    // Ici vous pouvez ajouter votre vrai appel API
    console.log('Message envoyé:', formData);
    
    // Marquer comme envoyé avec succès
    isFormSubmitted.value = true;
    
    // Réinitialiser le formulaire
    formData.name = '';
    formData.email = '';
    formData.subject = '';
    formData.message = '';
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
  } finally {
    isSubmitting.value = false;
  }
}

// Animation au chargement
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <div class="relative">
    <!-- Loading SEULEMENT pour les formulaires -->
    <SmartLoadingScreen 
      v-if="loadingState.isFormLoading"
      theme="blue"
      logo-text="📧"
      :show-progress="true"
    />

    <!-- Contenu principal de la page contact -->
    <main class="flex-grow pt-20 pb-16">
      <div class="container mx-auto px-4">
        <!-- Titre de la section avec animation -->
        <div 
          class="text-center mb-12 transition-opacity duration-700"
          :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
        >
          <h1 class="text-5xl font-bold mb-6">Me Contacter</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Vous avez une question, un projet ou simplement envie de discuter ? 
            N'hésitez pas à me contacter via le formulaire ci-dessous ou par mes 
            coordonnées directes.
          </p>
        </div>
        
        <!-- Contenu principal -->
        <div 
          class="grid grid-cols-1 lg:grid-cols-2 gap-10"
          :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
          style="transition: opacity 0.7s ease-in-out 0.3s;"
        >
          <!-- Informations de contact -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
            <h2 class="text-2xl font-bold mb-6">Mes coordonnées</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:jeanauryel.akinotcho@gmail.com" class="text-blue-500 hover:underline">jeanauryel.akinotcho@gmail.com</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-1">Téléphone</h3>
                  <a href="tel:+33784760880" class="text-blue-500 hover:underline">+33 7 84 76 08 80</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-1">Localisation</h3>
                  <p class="text-gray-600 dark:text-gray-300">Toulouse, France</p>
                </div>
              </div>
            </div>
            
            <!-- Réseaux sociaux -->
            <div class="mt-10">
              <h3 class="text-lg font-semibold mb-4">Mes réseaux sociaux</h3>
              <div class="flex space-x-4">
                <a href="https://linkedin.com/in/jean-auryel" target="_blank" class="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/jean-auryel" target="_blank" class="p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <span class="sr-only">GitHub</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://twitter.com/jean_auryel" target="_blank" class="p-3 bg-blue-50 dark:bg-blue-950 text-blue-400 dark:text-blue-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Horaires -->
            <div class="mt-10">
              <h3 class="text-lg font-semibold mb-4">Horaires de disponibilité</h3>
              <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span class="font-medium">8h - 18h</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Samedi:</span>
                    <span class="font-medium">9h - 16h</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Dimanche:</span>
                    <span class="font-medium">Indisponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Formulaire de contact -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
            <h2 class="text-2xl font-bold mb-6">Formulaire de contact</h2>
            
            <!-- Message de succès après soumission -->
            <div 
              v-if="isFormSubmitted"
              class="bg-green-100 border border-green-400 text-green-700 dark:bg-green-900/50 dark:border-green-800 dark:text-green-200 px-4 py-3 rounded mb-6"
            >
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="font-medium">Message envoyé avec succès!</span>
              </div>
              <p class="mt-2">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
              <button 
                @click="isFormSubmitted = false"
                class="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
            
            <!-- Formulaire -->
            <form v-else @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-1">Nom *</label>
                <input 
                  type="text" 
                  id="name"
                  v-model="formData.name"
                  class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  :class="formErrors.name ? 'border-red-500 dark:border-red-700' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700'"
                  placeholder="Votre nom"
                  required
                  :disabled="isSubmitting"
                />
                <p v-if="formErrors.name" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ formErrors.name }}</p>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium mb-1">Email *</label>
                <input 
                  type="email" 
                  id="email"
                  v-model="formData.email"
                  class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  :class="formErrors.email ? 'border-red-500 dark:border-red-700' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700'"
                  placeholder="votre.email@example.com"
                  required
                  :disabled="isSubmitting"
                />
                <p v-if="formErrors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ formErrors.email }}</p>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium mb-1">Sujet *</label>
                <input 
                  type="text" 
                  id="subject"
                  v-model="formData.subject"
                  class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  :class="formErrors.subject ? 'border-red-500 dark:border-red-700' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700'"
                  placeholder="Sujet de votre message"
                  required
                  :disabled="isSubmitting"
                />
                <p v-if="formErrors.subject" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ formErrors.subject }}</p>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium mb-1">Message *</label>
                <textarea 
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  :class="formErrors.message ? 'border-red-500 dark:border-red-700' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700'"
                  placeholder="Votre message... (minimum 10 caractères)"
                  required
                  minlength="10"
                  :disabled="isSubmitting"
                ></textarea>
                <p v-if="formErrors.message" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ formErrors.message }}</p>
              </div>
              
              <div>
                <button 
                  type="submit"
                  class="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                  <span v-else>Envoyer le message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Animation d'apparition des éléments */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
</style>