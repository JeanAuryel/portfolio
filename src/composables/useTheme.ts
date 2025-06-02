import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

export type ThemeMode = 'light' | 'dark';

export const useTheme = () => {
  // État réactif du thème
  const isDarkMode = ref<boolean>(false);
  const themeMode = ref<ThemeMode>('light');
  
  // Variables pour la gestion des listeners et états
  let isInitialized = ref(false);
  let isApplyingTheme = false;

  // Guards pour SSR/Hydration
  const isClient = typeof window !== 'undefined';

  // Appliquer le thème à l'élément HTML avec protection contre les boucles
  const applyTheme = (dark: boolean) => {
    if (!isClient || isApplyingTheme) return;
    
    isApplyingTheme = true;
    
    try {
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      isDarkMode.value = dark;
    } catch (error) {
      console.warn('Erreur lors de l\'application du thème:', error);
    } finally {
      isApplyingTheme = false;
    }
  };

  // Sauvegarder les préférences dans localStorage avec gestion d'erreurs
  const saveThemePreference = (mode: ThemeMode) => {
    if (!isClient) {
      themeMode.value = mode;
      return;
    }

    try {
      localStorage.setItem('theme-mode', mode);
    } catch (error) {
      console.warn('Impossible de sauvegarder les préférences de thème:', error);
    }
    
    themeMode.value = mode;
  };

  // Charger les préférences depuis localStorage avec validation
  const loadThemePreference = (): ThemeMode => {
    if (!isClient) return 'light';
    
    try {
      const saved = localStorage.getItem('theme-mode');
      const validModes: ThemeMode[] = ['light', 'dark'];
      
      if (saved && validModes.includes(saved as ThemeMode)) {
        return saved as ThemeMode;
      }
    } catch (error) {
      console.warn('Impossible de charger les préférences de thème:', error);
    }
    
    return 'light';
  };

  // Calculer le thème effectif - Simple avec seulement light/dark
  const calculateEffectiveTheme = (mode: ThemeMode): boolean => {
    return mode === 'dark';
  };

  // Appliquer un thème spécifique
  const setTheme = async (mode: ThemeMode) => {
    console.log('Setting theme to:', mode); // Debug
    
    saveThemePreference(mode);
    
    // Attendre que la valeur réactive soit mise à jour
    await nextTick();
    
    const dark = calculateEffectiveTheme(mode);
    console.log('Calculated dark mode:', dark); // Debug
    
    applyTheme(dark);
  };

  // Toggle entre light et dark
  const toggleTheme = async () => {
    const nextMode: ThemeMode = isDarkMode.value ? 'light' : 'dark';
    console.log('Toggling from', themeMode.value, 'to', nextMode); // Debug
    await setTheme(nextMode);
  };

  // Cycle entre tous les modes (pour compatibilité)
  const cycleTheme = async () => {
    await toggleTheme();
  };

  // Initialisation sécurisée
  const initTheme = () => {
    if (!isClient || isInitialized.value) return;

    try {
      const mode = loadThemePreference();
      console.log('Loaded theme preference:', mode); // Debug
      
      const dark = calculateEffectiveTheme(mode);
      console.log('Initial dark mode:', dark); // Debug
      
      // Appliquer sans déclencher les watchers
      themeMode.value = mode;
      applyTheme(dark);
      
      isInitialized.value = true;
      console.log('Theme initialized successfully'); // Debug
      
    } catch (error) {
      console.warn('Erreur lors de l\'initialisation du thème:', error);
    }
  };

  // Nettoyage approprié
  const cleanup = () => {
    isInitialized.value = false;
  };

  // Watcher pour les changements de thème avec protection contre les boucles
  watch(
    themeMode,
    async (newMode, oldMode) => {
      if (!isInitialized.value || isApplyingTheme) return;
      
      console.log('Theme mode changed from', oldMode, 'to', newMode); // Debug
      
      const dark = calculateEffectiveTheme(newMode);
      applyTheme(dark);
    },
    { flush: 'post' } // Exécuter après les updates DOM
  );

  // Lifecycle hooks avec nettoyage approprié
  onMounted(() => {
    console.log('useTheme mounted'); // Debug
    initTheme();
  });

  onUnmounted(() => {
    cleanup();
  });

  // API publique
  return {
    // État
    isDarkMode,
    themeMode,
    isInitialized,
    
    // Actions
    setTheme,
    toggleTheme,
    cycleTheme,
    
    // Computed properties
    get isLightMode() {
      return themeMode.value === 'light';
    },
    
    get effectiveTheme() {
      return isDarkMode.value ? 'dark' : 'light';
    },

    // Méthodes de nettoyage (pour les tests ou cas spéciaux)
    cleanup
  };
};