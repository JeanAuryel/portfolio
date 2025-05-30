<template>
  <!-- Utiliser une seule Transition avec mode out-in -->
  <Transition name="loading-transition" mode="out-in" appear>
    <!-- Loading Screen -->
    <div 
      v-if="isAnyLoading" 
      :class="loadingClasses"
      key="loading"
    >
      <div class="flex flex-col items-center justify-center min-h-screen p-4 font-sans">
        <!-- Logo Container avec animation float -->
        <div class="mb-12 animate-float">
          <div :class="logoClasses">
            <span class="text-3xl font-bold">{{ logoText }}</span>
            <!-- Cercle de chargement autour du logo -->
            <div :class="loadingRingClasses"></div>
          </div>
        </div>
        
        <!-- Nom utilisateur pour loading app -->
        <div v-if="loadingType === 'app' && userName" class="mb-4">
          <h2 class="text-white/90 text-xl font-medium tracking-wide">
            {{ userName }}
          </h2>
        </div>
        
        <!-- Loading Text adaptatif -->
        <div class="text-white text-lg md:text-xl font-light mb-8 opacity-90 animate-pulse text-center max-w-md">
          {{ currentLoadingMessage }}
        </div>
        
        <!-- Progress Bar -->
        <div v-if="showProgress" class="w-80 max-w-[90vw] h-1 bg-white/20 rounded-full overflow-hidden mb-4">
          <div 
            class="h-full rounded-full transition-all duration-300 ease-out relative"
            :class="progressBarClasses"
            :style="{ width: `${currentProgress}%` }"
          >
            <!-- Effet shimmer -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
        </div>
        
        <!-- Percentage -->
        <div v-if="showProgress" class="text-white/70 text-sm font-medium mb-8">
          {{ Math.floor(currentProgress) }}%
        </div>
        
        <!-- Dots Animation -->
        <div class="flex space-x-2 mb-4">
          <div 
            v-for="(dot, index) in 3" 
            :key="index"
            :class="dotClasses"
            :style="{ animationDelay: `${-0.32 + index * 0.16}s` }"
          ></div>
        </div>
        
        <!-- Sous-titre adaptatif -->
        <div class="text-white/60 text-sm text-center max-w-md">
          {{ currentSubtitle }}
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else key="content">
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useSmartLoading } from '@/composables/useSmartLoading'

// Props
interface SmartLoadingScreenProps {
  theme?: 'modern' | 'dark' | 'neon' | 'blue'
  logoText?: string
  userName?: string
  showProgress?: boolean
}

const props = withDefaults(defineProps<SmartLoadingScreenProps>(), {
  theme: 'blue',
  logoText: 'JA',
  userName: '',
  showProgress: true
})

// Composable de loading
const { loadingState, cleanup } = useSmartLoading()

// Computed
const isAnyLoading = computed(() => 
  loadingState.isAppLoading || loadingState.isPageLoading || loadingState.isFormLoading
)

const loadingType = computed(() => {
  if (loadingState.isAppLoading) return 'app'
  if (loadingState.isPageLoading) return 'page'
  if (loadingState.isFormLoading) return 'form'
  return null
})

const currentLoadingMessage = computed(() => {
  return loadingState.loadingMessage
})

const currentProgress = computed(() => {
  return loadingState.loadingProgress
})

const currentSubtitle = computed(() => {
  switch (loadingType.value) {
    case 'app':
      return 'Initialisation de l\'expérience utilisateur...'
    case 'page':
      return 'Préparation du contenu...'
    case 'form':
      return 'Traitement de votre demande...'
    default:
      return 'Chargement...'
  }
})

// Classes calculées selon le thème
const loadingClasses = computed(() => [
  'fixed inset-0 z-50 transition-all duration-800 ease-in-out',
  {
    'bg-gradient-to-br from-primary-500 to-primary-700': props.theme === 'blue' || props.theme === 'modern',
    'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900': props.theme === 'dark',
    'bg-gradient-to-br from-gray-900 via-black to-gray-900': props.theme === 'neon'
  }
])

const logoClasses = computed(() => [
  'relative w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-300',
  'backdrop-blur-sm border shadow-2xl',
  {
    'bg-white/10 border-white/20 text-white': props.theme === 'blue' || props.theme === 'modern',
    'bg-white/5 border-cyan-400/30 text-cyan-400': props.theme === 'dark',
    'bg-transparent border-2 border-green-400 text-green-400 shadow-green-400/30': props.theme === 'neon'
  }
])

const loadingRingClasses = computed(() => [
  'absolute inset-0 rounded-2xl border-2 border-transparent animate-spin',
  {
    'border-t-white/60 border-r-white/30': props.theme === 'blue' || props.theme === 'modern',
    'border-t-cyan-400/60 border-r-cyan-400/30': props.theme === 'dark',
    'border-t-green-400/60 border-r-green-400/30': props.theme === 'neon'
  }
])

const progressBarClasses = computed(() => [
  {
    'bg-gradient-to-r from-white to-white/80': props.theme === 'blue' || props.theme === 'modern',
    'bg-gradient-to-r from-cyan-400 to-blue-400': props.theme === 'dark',
    'bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg shadow-green-400/50': props.theme === 'neon'
  }
])

const dotClasses = computed(() => [
  'w-2 h-2 rounded-full animate-bounce-dots',
  {
    'bg-white/60': props.theme === 'blue' || props.theme === 'modern',
    'bg-cyan-400/60': props.theme === 'dark',
    'bg-green-400/60': props.theme === 'neon'
  }
])

// Cycle de vie
onMounted(() => {
  // Le loading est géré par le composable useSmartLoading
})

onUnmounted(() => {
  cleanup()
})
</script>

<style scoped>
/* Animations personnalisées compatibles Tailwind 4.x */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes bounce-dots {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 1.5s infinite;
}

.animate-bounce-dots {
  animation: bounce-dots 1.4s ease-in-out infinite both;
}

/* Transitions Vue */
.loading-transition-enter-active {
  transition: all 0.8s ease;
}

.loading-transition-leave-active {
  transition: all 0.8s ease;
}

.loading-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.loading-transition-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Responsive design */
@media (max-width: 640px) {
  .animate-float {
    transform-origin: center;
    animation: float 2.5s ease-in-out infinite;
  }
}
</style>