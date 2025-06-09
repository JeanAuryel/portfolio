<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useSmartLoading } from '@/composables/useSmartLoading'

// Interface pour les props (sans export dans script setup)
interface SmartLoadingProps {
  /** Thème de couleur */
  theme?: 'blue' | 'green' | 'purple' | 'orange' | 'wood'
  /** Texte du logo (initiales) */
  logoText?: string
  /** Nom complet de l'utilisateur */
  userName?: string
  /** Afficher même pour les micro-loadings */
  forceShow?: boolean
  /** Durée minimale d'affichage en ms */
  minDuration?: number
  /** Message de chargement personnalisé */
  message?: string
  /** Afficher le pourcentage de progression */
  showProgress?: boolean
  /** Valeur de progression (0-100) */
  progress?: number
  /** Variant de style */
  variant?: 'default' | 'minimal' | 'detailed'
}

const props = withDefaults(defineProps<SmartLoadingProps>(), {
  theme: 'wood',
  logoText: 'JA',
  userName: 'Jean-Auryel Akinotcho',
  forceShow: false,
  minDuration: 800,
  message: 'Chargement en cours...',
  showProgress: false,
  progress: 0,
  variant: 'default'
})

const emit = defineEmits<{
  complete: []
}>()

// Utiliser le composable de smart loading
const { loadingState } = useSmartLoading()

// États locaux pour les animations
const animatedMessage = ref('')

// Messages de chargement rotatifs
const loadingMessages = [
  'Chargement des données...',
  'Préparation de l\'interface...',
  'Optimisation des performances...',
  'Finalisation...'
]

// Animation du message
const animateMessage = (message: string) => {
  animatedMessage.value = ''
  
  let i = 0
  const typeInterval = setInterval(() => {
    if (i < message.length) {
      animatedMessage.value += message[i]
      i++
    } else {
      clearInterval(typeInterval)
    }
  }, 50)
}

// Watcher pour les changements de message du composable
watch(() => loadingState.message, (newMessage) => {
  if (newMessage) {
    animateMessage(newMessage)
  }
}, { immediate: true })

// Watcher pour la fin du loading
watch(() => loadingState.isLoading, (isLoading) => {
  if (!isLoading) {
    emit('complete')
  }
})

// Computed
const progressPercentage = computed(() => {
  // Utiliser le progress du composable ou celui des props
  return Math.min(100, Math.max(0, loadingState.progress || props.progress))
})

const currentMessage = computed(() => {
  return animatedMessage.value || loadingState.message || props.message
})

const isVisible = computed(() => {
  return loadingState.isLoading || props.forceShow
})

const loadingClasses = computed(() => {
  const baseClasses = 'fixed inset-0 z-30 flex items-center justify-center transition-all duration-500'
  const variantClasses = {
    default: 'bg-cream-loading dark:bg-dark-loading',
    minimal: 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md',
    detailed: 'bg-cream-loading dark:bg-dark-loading'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]}`
})

// Fonctions pour les thèmes adaptées à VOS couleurs bois
const getThemeClasses = (theme: string) => {
  // Utiliser vos couleurs du thème bois en priorité
  if (theme === 'wood') {
    return 'bg-walnut-theme dark:bg-walnut-theme-dark'
  }
  // Fallback simple pour les autres thèmes
  return 'bg-walnut-theme dark:bg-walnut-theme-dark'
}

const getProgressClasses = (theme: string) => {
  // Cercle de progression en marron/bois
  return 'text-mahogany-progress transition-all duration-300'
}

const getProgressBarClasses = (theme: string) => {
  // Barre de progression avec gradient marron
  return 'bg-gradient-wood'
}

// Lifecycle
onMounted(() => {
  // Initialiser le message animé si nécessaire
  if (loadingState.message) {
    animateMessage(loadingState.message)
  }
})

// Exposer des méthodes publiques
defineExpose({
  isVisible,
  progressPercentage
})
</script>

<template>
  <Transition
    name="loading-fade"
    @after-leave="$emit('complete')"
  >
    <div v-if="isVisible" :class="loadingClasses">
      <!-- Loading Spinner centré -->
      <div class="flex justify-center">
        <div v-if="variant === 'default'" class="relative">
          <!-- Logo/Initiales avec animation -->
          <div 
            class="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
            :class="getThemeClasses(theme)"
          >
            <span class="animate-pulse">{{ logoText }}</span>
          </div>
          
          <!-- Cercle de progression -->
          <svg 
            class="absolute inset-0 w-24 h-24 transform -rotate-90" 
            viewBox="0 0 96 96"
          >
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              stroke-width="4"
              fill="none"
              class="text-loading-track-circle"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              stroke-width="4"
              fill="none"
              stroke-linecap="round"
              :class="getProgressClasses(theme)"
              :stroke-dasharray="`${2 * Math.PI * 40}`"
              :stroke-dashoffset="`${2 * Math.PI * 40 * (1 - progressPercentage / 100)}`"
            />
          </svg>
        </div>
        
        <!-- Spinner minimal -->
        <div v-else-if="variant === 'minimal'" class="loading-spinner-wood"></div>
        
        <!-- Loader détaillé -->
        <div v-else class="flex space-x-2">
          <div 
            v-for="i in 3" 
            :key="i"
            class="w-4 h-4 bg-walnut-theme rounded-full animate-bounce"
            :style="{ animationDelay: `${i * 0.1}s` }"
          ></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Classes de couleurs utilisant VOS variables CSS existantes */
.bg-cream-loading {
  background: linear-gradient(135deg, rgb(var(--cream-100) / 0.95), rgb(var(--cream-200) / 0.95));
  backdrop-filter: blur(10px);
}

.bg-dark-loading {
  background: linear-gradient(135deg, rgb(var(--dark-base-500) / 0.95), rgb(var(--dark-base-600) / 0.95));
  backdrop-filter: blur(10px);
}

.text-loading-primary {
  color: rgb(var(--ebony-500));
}

.dark .text-loading-primary {
  color: rgb(var(--dark-text-300));
}

.text-loading-secondary {
  color: rgb(var(--walnut-500));
}

.dark .text-loading-secondary {
  color: rgb(var(--dark-muted-500));
}

.bg-loading-track {
  background-color: rgb(var(--oak-200));
}

.dark .bg-loading-track {
  background-color: rgb(var(--dark-surface-600));
}

.text-loading-track-circle {
  color: rgb(var(--oak-200));
}

.dark .text-loading-track-circle {
  color: rgb(var(--dark-surface-600));
}

/* Classes utilisant VOS couleurs marron/bois */
.bg-walnut-theme {
  background-color: rgb(var(--walnut-500));
  color: white;
}

.bg-walnut-theme-dark {
  background-color: rgb(var(--walnut-400));
  color: rgb(var(--ebony-500));
}

/* Points animés pour le loader détaillé */
.w-4.h-4.bg-walnut-theme {
  background-color: rgb(var(--walnut-500));
}

.dark .w-4.h-4.bg-walnut-theme {
  background-color: rgb(var(--walnut-400));
}

/* Progression utilisant VOS couleurs */
.text-mahogany-progress {
  color: rgb(var(--mahogany-500));
}

.dark .text-mahogany-progress {
  color: rgb(var(--dark-accent-500));
}

/* Gradient utilisant VOS variables */
.bg-gradient-wood {
  background: linear-gradient(to right, rgb(var(--walnut-500)), rgb(var(--mahogany-500)));
}

.dark .bg-gradient-wood {
  background: linear-gradient(to right, rgb(var(--walnut-400)), rgb(var(--dark-accent-500)));
}

/* Animations de transition */
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 0.5s ease;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}

/* Spinner utilisant VOS couleurs */
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgb(var(--oak-200));
  border-top: 4px solid rgb(var(--walnut-500));
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.dark .loading-spinner {
  border-color: rgb(var(--dark-surface-600));
  border-top-color: rgb(var(--walnut-400));
}

/* Spinner spécifique au thème bois */
.loading-spinner-wood {
  width: 40px;
  height: 40px;
  border: 4px solid rgb(var(--oak-200));
  border-top: 4px solid rgb(var(--walnut-500));
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.dark .loading-spinner-wood {
  border-color: rgb(var(--dark-surface-600));
  border-top-color: rgb(var(--walnut-400));
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Animation de rebond personnalisée */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

.animate-bounce {
  animation: bounce 1.5s ease infinite;
}

/* Animation de pulsation personnalisée */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .loading-fade-enter-active div {
    max-width: 20rem;
    padding: 1rem;
  }
}
</style>