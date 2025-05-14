import { ref, onMounted, watch } from 'vue';

export type ThemeMode = 'light' | 'dark' | 'system';

export const useTheme = () => {
  // État réactif du thème
  const isDarkMode = ref<boolean>(false);
  const themeMode = ref<ThemeMode>('system');

  // Appliquer le thème à l'élément HTML
  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    isDarkMode.value = dark;
  };

  // Obtenir les préférences système
  const getSystemPreference = (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // Sauvegarder les préférences dans localStorage
  const saveThemePreference = (mode: ThemeMode) => {
    localStorage.setItem('theme-mode', mode);
    themeMode.value = mode;
  };

  // Charger les préférences depuis localStorage
  const loadThemePreference = (): ThemeMode => {
    const saved = localStorage.getItem('theme-mode') as ThemeMode;
    return saved || 'system';
  };

  // Calculer le thème effectif
  const calculateEffectiveTheme = (mode: ThemeMode): boolean => {
    switch (mode) {
      case 'dark':
        return true;
      case 'light':
        return false;
      case 'system':
      default:
        return getSystemPreference();
    }
  };

  // Appliquer un thème spécifique
  const setTheme = (mode: ThemeMode) => {
    saveThemePreference(mode);
    const dark = calculateEffectiveTheme(mode);
    applyTheme(dark);
  };

  // Toggle entre light et dark (ignore system)
  const toggleTheme = () => {
    const nextMode = isDarkMode.value ? 'light' : 'dark';
    setTheme(nextMode);
  };

  // Cycle entre tous les modes
  const cycleTheme = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'system'];
    const currentIndex = modes.indexOf(themeMode.value);
    const nextIndex = (currentIndex + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  // Observer les changements de préférences système
  const setupSystemThemeListener = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = () => {
      if (themeMode.value === 'system') {
        const dark = getSystemPreference();
        applyTheme(dark);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    // Nettoyer l'event listener
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  };

  // Initialisation
  const initTheme = () => {
    const mode = loadThemePreference();
    const dark = calculateEffectiveTheme(mode);
    themeMode.value = mode;
    applyTheme(dark);
    
    // Configurer l'observer des préférences système
    return setupSystemThemeListener();
  };

  // Watcher pour les changements de thème
  watch(
    themeMode,
    (newMode) => {
      const dark = calculateEffectiveTheme(newMode);
      applyTheme(dark);
    }
  );

  onMounted(() => {
    const cleanup = initTheme();
    
    // Nettoyer lors du démontage
    return cleanup;
  });

  return {
    // État
    isDarkMode,
    themeMode,
    
    // Actions
    setTheme,
    toggleTheme,
    cycleTheme,
    
    // Utilitaires
    getSystemPreference,
    
    // Computed
    get isSystemMode() {
      return themeMode.value === 'system';
    },
    
    get effectiveTheme() {
      return isDarkMode.value ? 'dark' : 'light';
    }
  };
};