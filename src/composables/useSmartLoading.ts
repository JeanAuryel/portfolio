import { ref, reactive } from 'vue'

interface LoadingState {
  isAppLoading: boolean
  isPageLoading: boolean
  isFormLoading: boolean
  loadingMessage: string
  loadingProgress: number
}

interface LoadingConfig {
  pageLoadingThreshold: number // Temps en ms avant d'afficher le loading de page
  formLoadingThreshold: number // Temps en ms avant d'afficher le loading de formulaire
  minDisplayTime: number       // Temps minimum d'affichage pour éviter le clignotement
}

const defaultConfig: LoadingConfig = {
  pageLoadingThreshold: 500,   // 500ms avant loading de page
  formLoadingThreshold: 300,   // 300ms avant loading de formulaire  
  minDisplayTime: 800          // 800ms minimum d'affichage
}

// État global partagé
const loadingState = reactive<LoadingState>({
  isAppLoading: true,
  isPageLoading: false,
  isFormLoading: false,
  loadingMessage: 'Chargement...',
  loadingProgress: 0
})

// Timers pour gérer les délais
let pageLoadingTimer: NodeJS.Timeout | null = null
let formLoadingTimer: NodeJS.Timeout | null = null
let minDisplayTimer: NodeJS.Timeout | null = null

export function useSmartLoading(config: Partial<LoadingConfig> = {}) {
  const finalConfig = { ...defaultConfig, ...config }
  
  /**
   * 🚀 Loading initial de l'application
   */
  const startAppLoading = (message: string = 'Chargement de votre portfolio...') => {
    loadingState.isAppLoading = true
    loadingState.loadingMessage = message
    loadingState.loadingProgress = 0
  }

  const finishAppLoading = () => {
    loadingState.isAppLoading = false
    loadingState.loadingProgress = 100
  }

  /**
   * 📄 Loading intelligent des pages
   * Se déclenche automatiquement si la page met trop de temps
   */
  const startPageLoading = (message: string = 'Chargement de la page...') => {
    // Annuler le timer précédent si existant
    if (pageLoadingTimer) {
      clearTimeout(pageLoadingTimer)
    }

    // Démarrer un timer pour afficher le loading seulement si nécessaire
    pageLoadingTimer = setTimeout(() => {
      loadingState.isPageLoading = true
      loadingState.loadingMessage = message
      loadingState.loadingProgress = 0
    }, finalConfig.pageLoadingThreshold)
  }

  const finishPageLoading = () => {
    // Annuler le timer si la page se charge rapidement
    if (pageLoadingTimer) {
      clearTimeout(pageLoadingTimer)
      pageLoadingTimer = null
    }

    // Si le loading était déjà affiché, le masquer avec un délai minimum
    if (loadingState.isPageLoading) {
      loadingState.loadingProgress = 100
      
      minDisplayTimer = setTimeout(() => {
        loadingState.isPageLoading = false
      }, finalConfig.minDisplayTime)
    }
  }

  /**
   * 📝 Loading pour les formulaires
   * Utile pour les soumissions, uploads, etc.
   */
  const startFormLoading = (message: string = 'Envoi en cours...') => {
    if (formLoadingTimer) {
      clearTimeout(formLoadingTimer)
    }

    formLoadingTimer = setTimeout(() => {
      loadingState.isFormLoading = true
      loadingState.loadingMessage = message
      loadingState.loadingProgress = 0
    }, finalConfig.formLoadingThreshold)
  }

  const finishFormLoading = () => {
    if (formLoadingTimer) {
      clearTimeout(formLoadingTimer)
      formLoadingTimer = null
    }

    if (loadingState.isFormLoading) {
      loadingState.loadingProgress = 100
      
      setTimeout(() => {
        loadingState.isFormLoading = false
      }, finalConfig.minDisplayTime)
    }
  }

  /**
   * 🎯 Simuler un progrès de chargement réaliste
   */
  const simulateProgress = (duration: number = 2000) => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min((elapsed / duration) * 100, 95)
      
      loadingState.loadingProgress = progress
      
      if (progress >= 95) {
        clearInterval(interval)
      }
    }, 50)
    
    return interval
  }

  /**
   * 🔄 Wrapper pour les opérations asynchrones avec loading automatique
   */
  const withPageLoading = async <T>(
    operation: () => Promise<T>,
    message?: string
  ): Promise<T> => {
    startPageLoading(message)
    
    try {
      const result = await operation()
      return result
    } finally {
      finishPageLoading()
    }
  }

  const withFormLoading = async <T>(
    operation: () => Promise<T>,
    message?: string
  ): Promise<T> => {
    startFormLoading(message)
    
    try {
      const result = await operation()
      return result
    } finally {
      finishFormLoading()
    }
  }

  /**
   * 🧹 Nettoyer tous les timers
   */
  const cleanup = () => {
    if (pageLoadingTimer) {
      clearTimeout(pageLoadingTimer)
      pageLoadingTimer = null
    }
    if (formLoadingTimer) {
      clearTimeout(formLoadingTimer)
      formLoadingTimer = null
    }
    if (minDisplayTimer) {
      clearTimeout(minDisplayTimer)
      minDisplayTimer = null
    }
  }

  /**
   * 📊 Getters pour l'état de loading
   */
  const isAnyLoading = () => {
    return loadingState.isAppLoading || loadingState.isPageLoading || loadingState.isFormLoading
  }

  const getCurrentLoadingType = () => {
    if (loadingState.isAppLoading) return 'app'
    if (loadingState.isPageLoading) return 'page'
    if (loadingState.isFormLoading) return 'form'
    return null
  }

  return {
    // État
    loadingState,
    
    // Méthodes de contrôle
    startAppLoading,
    finishAppLoading,
    startPageLoading,
    finishPageLoading,
    startFormLoading,
    finishFormLoading,
    
    // Helpers
    simulateProgress,
    withPageLoading,
    withFormLoading,
    cleanup,
    isAnyLoading,
    getCurrentLoadingType
  }
}