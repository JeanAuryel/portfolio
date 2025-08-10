import { ref, reactive, readonly } from 'vue'

// Interface pour l'état du loading
interface LoadingState {
  isLoading: boolean
  progress: number
  message: string
  startTime: number | null
  minDuration: number
}

// État global du smart loading
const loadingState = reactive<LoadingState>({
  isLoading: false,
  progress: 0,
  message: '',
  startTime: null,
  minDuration: 800 // Durée minimale réduite pour test
})

// Messages de loading par défaut
const defaultMessages = [
  'Chargement en cours...',
  'Initialisation du portfolio...',
  'Préparation de l\'interface...',
  'Optimisation des performances...',
  'Finalisation...'
]

export const useSmartLoading = () => {
  
  /**
   * Démarrer le loading de l'application
   */
  const startAppLoading = (message?: string) => {
    loadingState.isLoading = true
    loadingState.progress = 0
    loadingState.message = message || defaultMessages[0]
    loadingState.startTime = Date.now()
  }

  /**
   * Terminer le loading de l'application
   * Respecte la durée minimale pour éviter les flashs
   */
  const finishAppLoading = async () => {
    if (!loadingState.startTime) {
      loadingState.isLoading = false
      return
    }

    const elapsedTime = Date.now() - loadingState.startTime
    const remainingTime = Math.max(0, loadingState.minDuration - elapsedTime)

    // S'assurer que le progress atteint 100%
    loadingState.progress = 100
    loadingState.message = 'Terminé !'

    // Attendre le temps restant si nécessaire
    if (remainingTime > 0) {
      await new Promise(resolve => setTimeout(resolve, remainingTime))
    }

    // Attendre un petit délai pour l'animation de fin
    await new Promise(resolve => setTimeout(resolve, 300))
    
    loadingState.isLoading = false
  }

  /**
   * Mettre à jour le progress manuellement
   */
  const setProgress = (progress: number, message?: string) => {
    loadingState.progress = Math.min(100, Math.max(0, progress))
    if (message) {
      loadingState.message = message
    }
  }

  /**
   * Simuler un progress réaliste
   * Retourne l'interval ID pour pouvoir l'arrêter
   */
  const simulateProgress = (duration: number = 2000): NodeJS.Timeout => {
    let currentProgress = 0
    const increment = 100 / (duration / 100) // Incréments toutes les 100ms
    
    const interval = setInterval(() => {
      if (currentProgress < 90) {
        // Progression plus rapide au début, puis ralentissement
        const progressIncrement = Math.random() * increment * (currentProgress < 50 ? 1.5 : 0.5)
        currentProgress = Math.min(90, currentProgress + progressIncrement)
        
        loadingState.progress = Math.floor(currentProgress)
        
        // Changer le message occasionnellement
        if (Math.random() < 0.1) {
          const randomMessage = defaultMessages[Math.floor(Math.random() * defaultMessages.length)]
          loadingState.message = randomMessage
        }
      }
    }, 100)

    return interval
  }

  /**
   * Mettre à jour le message de loading
   */
  const setMessage = (message: string) => {
    loadingState.message = message
  }

  /**
   * Configurer la durée minimale
   */
  const setMinDuration = (duration: number) => {
    loadingState.minDuration = duration
  }

  /**
   * Loading pour une action spécifique (utilitaire)
   */
  const loadWithProgress = async <T>(
    asyncFunction: () => Promise<T>,
    options?: {
      message?: string
      minDuration?: number
    }
  ): Promise<T> => {
    const originalMinDuration = loadingState.minDuration
    
    if (options?.minDuration) {
      setMinDuration(options.minDuration)
    }

    startAppLoading(options?.message)
    
    // Simuler le progress pendant l'exécution
    const progressInterval = simulateProgress()
    
    try {
      const result = await asyncFunction()
      clearInterval(progressInterval)
      await finishAppLoading()
      return result
    } catch (error) {
      clearInterval(progressInterval)
      await finishAppLoading()
      throw error
    } finally {
      // Restaurer la durée minimale originale
      loadingState.minDuration = originalMinDuration
    }
  }

  /**
   * Obtenir l'état actuel du loading (readonly)
   */
  const getLoadingState = () => {
    return {
      isLoading: loadingState.isLoading,
      progress: loadingState.progress,
      message: loadingState.message
    }
  }

  /**
   * Vérifier si le loading est en cours
   */
  const isLoading = () => loadingState.isLoading

  return {
    // État (reactive)
    loadingState: readonly(loadingState),
    
    // Actions principales
    startAppLoading,
    finishAppLoading,
    
    // Contrôle manuel
    setProgress,
    setMessage,
    setMinDuration,
    
    // Utilitaires
    simulateProgress,
    loadWithProgress,
    
    // Getters
    getLoadingState,
    isLoading
  }
}