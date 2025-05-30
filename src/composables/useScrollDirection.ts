import { ref, onMounted, onUnmounted } from 'vue'

interface ScrollConfig {
  threshold: number      // Seuil minimum de scroll pour déclencher les changements
  topZone: number       // Zone en haut où le menu reste toujours visible
  debounceTime: number  // Temps de debounce pour optimiser les performances
}

const defaultConfig: ScrollConfig = {
  threshold: 10,
  topZone: 100,
  debounceTime: 16 // ~60fps
}

export function useScrollDirection(config: Partial<ScrollConfig> = {}) {
  const finalConfig = { ...defaultConfig, ...config }
  
  // État réactif
  const scrollY = ref(0)
  const lastScrollY = ref(0)
  const scrollDirection = ref<'up' | 'down'>('up')
  const isScrollingUp = ref(true)
  const isScrollingDown = ref(false)
  const isAtTop = ref(true)
  const isVisible = ref(true)

  // Gestion du throttling
  let ticking = false
  let timeoutId: NodeJS.Timeout | null = null

  // Fonction principale de gestion du scroll
  function handleScroll() {
    const currentScrollY = window.scrollY
    scrollY.value = currentScrollY

    // Vérifier si on est en haut de page
    isAtTop.value = currentScrollY < finalConfig.topZone

    // Seuil pour éviter les micro-mouvements
    const scrollDiff = Math.abs(currentScrollY - lastScrollY.value)
    if (scrollDiff < finalConfig.threshold && !isAtTop.value) {
      return
    }

    // Déterminer la direction
    const wasScrollingUp = isScrollingUp.value
    
    if (currentScrollY > lastScrollY.value) {
      // Scroll vers le bas
      scrollDirection.value = 'down'
      isScrollingUp.value = false
      isScrollingDown.value = true
    } else if (currentScrollY < lastScrollY.value) {
      // Scroll vers le haut
      scrollDirection.value = 'up'
      isScrollingUp.value = true
      isScrollingDown.value = false
    }

    // Logique de visibilité
    if (isAtTop.value) {
      // Toujours visible en haut
      isVisible.value = true
    } else {
      // Visible si scroll up, caché si scroll down
      isVisible.value = isScrollingUp.value
    }

    // Mettre à jour la dernière position
    lastScrollY.value = currentScrollY

    // Callback optionnel pour les changements de direction
    if (wasScrollingUp !== isScrollingUp.value) {
      onDirectionChange(scrollDirection.value)
    }
  }

  // Throttling avec requestAnimationFrame
  function throttledHandleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  }

  // Debounced version pour des cas spécifiques
  function debouncedHandleScroll() {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(handleScroll, finalConfig.debounceTime)
  }

  // Callback pour les changements de direction
  function onDirectionChange(direction: 'up' | 'down') {
    // Peut être étendu selon les besoins
    console.log(`Scroll direction changed to: ${direction}`)
  }

  // Méthodes utilitaires
  function scrollToTop(smooth = true) {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto'
    })
  }

  function scrollToElement(elementId: string, offset = 0) {
    const element = document.getElementById(elementId)
    if (element) {
      const top = element.offsetTop - offset
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
  }

  // Forcer la mise à jour de l'état
  function updateScrollState() {
    const currentScrollY = window.scrollY
    scrollY.value = currentScrollY
    lastScrollY.value = currentScrollY
    isAtTop.value = currentScrollY < finalConfig.topZone
  }

  // Setup et cleanup
  onMounted(() => {
    // Initialiser l'état
    updateScrollState()
    
    // Ajouter les event listeners
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    window.addEventListener('resize', updateScrollState, { passive: true })
  })

  onUnmounted(() => {
    // Nettoyer les event listeners
    window.removeEventListener('scroll', throttledHandleScroll)
    window.removeEventListener('resize', updateScrollState)
    
    // Nettoyer les timers
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  })

  return {
    // État réactif
    scrollY,
    scrollDirection,
    isScrollingUp,
    isScrollingDown,
    isAtTop,
    isVisible,
    
    // Méthodes utilitaires
    scrollToTop,
    scrollToElement,
    updateScrollState,
    
    // Pour usage avancé
    handleScroll: debouncedHandleScroll
  }
}