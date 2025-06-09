<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
import SmartLoadingScreen from '@/components/ui/SmartLoadingScreen.vue';
import { useSmartLoading } from '@/composables/useSmartLoading';

// Smart Loading System
const { startAppLoading, finishAppLoading, simulateProgress, isLoading } = useSmartLoading();

// État local pour debug
const isAppReady = ref(false);

// Fournir les données partagées
provide('userData', {
  name: 'Jean-Auryel Akinotcho',
  shortName: 'JA',
  email: 'jeanauryel.akinotcho@gmail.com',
  phone: '+33 7 84 76 08 80',
  location: 'Toulouse, France'
});

// Types pour les assets
interface AssetToPreload {
  path: string;
  type: 'image' | 'font' | 'style';
  critical?: boolean;
}

// Précharger les ressources critiques
async function preloadCriticalResources(): Promise<void> {
  const criticalAssets: string[] = [];
  const advancedAssets: AssetToPreload[] = [];

  // Si aucun asset à charger, simuler un délai
  if (criticalAssets.length === 0 && advancedAssets.length === 0) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return;
  }

  // Précharger les assets simples (images)
  const imagePromises = criticalAssets.map(async (assetPath: string) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => {
        console.warn(`Asset non trouvé: ${assetPath}`);
        resolve();
      };
      img.src = assetPath;
    });
  });

  // Précharger les assets avancés
  const advancedPromises = advancedAssets.map(async (asset: AssetToPreload) => {
    return preloadAsset(asset);
  });

  // Attendre tous les chargements
  await Promise.allSettled([...imagePromises, ...advancedPromises]);
}

// Fonction utilitaire pour précharger différents types d'assets
function preloadAsset(asset: AssetToPreload): Promise<void> {
  return new Promise<void>((resolve) => {
    switch (asset.type) {
      case 'image':
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => {
          console.warn(`Image non trouvée: ${asset.path}`);
          resolve();
        };
        img.src = asset.path;
        break;

      case 'font':
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        link.href = asset.path;
        link.onload = () => resolve();
        link.onerror = () => {
          console.warn(`Police non trouvée: ${asset.path}`);
          resolve();
        };
        document.head.appendChild(link);
        break;

      case 'style':
        const styleLink = document.createElement('link');
        styleLink.rel = 'preload';
        styleLink.as = 'style';
        styleLink.href = asset.path;
        styleLink.onload = () => resolve();
        styleLink.onerror = () => {
          console.warn(`CSS non trouvé: ${asset.path}`);
          resolve();
        };
        document.head.appendChild(styleLink);
        break;

      default:
        console.warn(`Type d'asset non supporté: ${asset.type}`);
        resolve();
    }
  });
}

// Gestion du chargement initial intelligent
onMounted(async () => {
  console.log('🚀 Démarrage du chargement...');
  
  // Démarrer le loading de l'app
  startAppLoading('Initialisation du portfolio...');
  
  // Durée de chargement réduite pour test
  const progressInterval = simulateProgress(1000);
  
  try {
    await preloadCriticalResources();
    window.addEventListener('load', handlePageLoaded);
    
    // Délai réduit pour voir le menu plus rapidement
    await new Promise(resolve => setTimeout(resolve, 800));
    
  } catch (error) {
    console.error('Erreur lors du chargement initial:', error);
  } finally {
    clearInterval(progressInterval);
    console.log('✅ Fin du chargement');
    
    // Terminer le loading
    await finishAppLoading();
    isAppReady.value = true;
    
    console.log('📱 App prête, menu devrait être visible');
  }
});

onUnmounted(() => {
  window.removeEventListener('load', handlePageLoaded);
});

function handlePageLoaded() {
  document.documentElement.classList.add('page-loaded');
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Layout principal - FORCÉ À ÊTRE VISIBLE -->
    <div class="app-layout-container">
      <AppLayout />
    </div>
    
    <!-- Loading overlay avec transparence -->
    <SmartLoadingScreen 
      v-if="isLoading()"
      theme="wood"
      logo-text="JA"
      user-name="Jean-Auryel Akinotcho"
      :show-progress="true"
      variant="default"
    />
  </div>
</template>

<style>
/* Styles globaux pour Tailwind CSS v3 */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lobster&display=swap');

/* Directives Tailwind CSS v3 */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Variables CSS personnalisées */
:root {
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;
  
  --font-family-sans: "Poppins", sans-serif;
  --font-family-lobster: "Lobster", cursive;
}

/* Désactiver les animations pendant le chargement initial */
html:not(.page-loaded) * {
  animation-play-state: paused !important;
  transition: none !important;
}

/* Force l'affichage de l'AppLayout */
.app-layout-container {
  position: relative;
  z-index: 1;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

/* NAVIGATION UTILISANT VOS VARIABLES CSS EXISTANTES */
.glassmorphism-wrapper {
  position: fixed !important;
  top: 1.5rem !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  z-index: 50 !important;
  width: 90vw !important;
  max-width: 1200px !important;
  border-radius: 24px !important;
  overflow: hidden !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  
  /* Utilisation de vos variables CSS existantes */
  background: rgb(255 255 255 / 0.95) !important;
  backdrop-filter: blur(12px) !important;
  border: 1px solid rgb(var(--oak-200) / 0.5) !important;
  box-shadow: 0 4px 6px -1px rgb(var(--ebony-500) / 0.1) !important;
}

.dark .glassmorphism-wrapper {
  background: rgb(var(--dark-surface-500) / 0.95) !important;
  border: 1px solid rgb(var(--dark-surface-600) / 0.5) !important;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3) !important;
}

/* Navigation interne transparente */
.glassmorphism-wrapper :deep(.glassmorphism-nav) {
  background: transparent !important;
  backdrop-filter: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* Navigation principale */
.glassmorphism-wrapper :deep(nav) {
  background: transparent !important;
  z-index: 50 !important;
}

/* Liens de navigation utilisant vos couleurs */
.glassmorphism-wrapper :deep(.nav-icon-link) {
  color: rgb(var(--walnut-500)) !important;
  opacity: 1 !important;
  visibility: visible !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 10px 20px !important;
  border-radius: 12px !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  position: relative !important;
  min-width: 80px !important;
  height: 64px !important;
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link) {
  color: rgb(var(--dark-accent-500)) !important;
}

.glassmorphism-wrapper :deep(.nav-icon-link:hover) {
  color: rgb(var(--mahogany-500)) !important;
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link:hover) {
  color: rgb(var(--dark-accent-400)) !important;
}

.glassmorphism-wrapper :deep(.nav-icon-link.active) {
  color: rgb(var(--mahogany-500)) !important;
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link.active) {
  color: rgb(var(--dark-accent-400)) !important;
}

/* Icônes utilisant vos variables */
.glassmorphism-wrapper :deep(.nav-icon-link) svg {
  width: 24px !important;
  height: 24px !important;
  margin-bottom: 4px !important;
  transition: all 0.3s ease !important;
}

.glassmorphism-wrapper :deep(.nav-icon-link:hover) svg {
  width: 22px !important;
  height: 22px !important;
  transform: scale(0.95) !important;
}

.glassmorphism-wrapper :deep(.nav-icon-link.active) svg {
  width: 28px !important;
  height: 28px !important;
}

/* Texte au hover utilisant vos couleurs */
.glassmorphism-wrapper :deep(.nav-icon-link)::after {
  content: attr(data-name);
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  font-size: 0.7rem;
  font-weight: 500;
  color: rgb(var(--walnut-500));
  white-space: nowrap;
  transition: all 0.3s ease;
  pointer-events: none;
  text-align: center;
  width: max-content;
  max-width: 100px;
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link)::after {
  color: rgb(var(--dark-accent-400));
}

.glassmorphism-wrapper :deep(.nav-icon-link:hover)::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0px);
}

/* Indicateur actif utilisant vos couleurs */
.glassmorphism-wrapper :deep(.nav-icon-link.active)::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background-color: rgb(var(--mahogany-500));
  border-radius: 50%;
  box-shadow: 0 0 12px rgb(var(--mahogany-500) / 0.6);
  animation: activeIndicator 2s ease-in-out infinite;
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link.active)::before {
  background-color: rgb(var(--dark-accent-400));
  box-shadow: 0 0 12px rgb(var(--dark-accent-400) / 0.6);
}

/* Bouton toggle theme utilisant vos variables */
.theme-toggle-btn {
  position: fixed !important;
  top: 1.5rem !important;
  right: 1rem !important;
  z-index: 51 !important;
  background: rgb(255 255 255 / 0.9) !important;
  border: 1px solid rgb(var(--oak-300)) !important;
  color: rgb(var(--walnut-500)) !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 2px 4px -1px rgb(var(--ebony-500) / 0.1) !important;
  backdrop-filter: blur(10px) !important;
  transition: all 0.3s ease !important;
}

.dark .theme-toggle-btn {
  background: rgb(var(--dark-surface-500) / 0.9) !important;
  border-color: rgb(var(--dark-surface-600)) !important;
  color: rgb(var(--dark-accent-400)) !important;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 0.25) !important;
}

.theme-toggle-btn:hover {
  transform: scale(1.05) !important;
  background: rgb(255 255 255) !important;
  box-shadow: 0 4px 8px -2px rgb(var(--ebony-500) / 0.15) !important;
  color: rgb(var(--mahogany-500)) !important;
}

.dark .theme-toggle-btn:hover {
  background: rgb(var(--dark-surface-400)) !important;
  box-shadow: 0 4px 8px -2px rgb(0 0 0 / 0.3) !important;
  color: rgb(var(--dark-accent-300)) !important;
}

/* SOLUTION GLOBALE - Espacement des views pour menu fixe */
@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply font-sans antialiased;
    font-family: var(--font-family-sans), ui-sans-serif, system-ui, sans-serif;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  
  .font-lobster {
    font-family: var(--font-family-lobster), cursive;
  }

  /* IMPORTANT: S'assurer que le menu est visible */
  nav {
    z-index: 50 !important;
    position: relative;
  }

  /* Espacement pour le menu fixe */
  main {
    padding-top: 140px;
    min-height: 100vh;
  }
  
  /* Ajustement pour mobile */
  @media (max-width: 1023px) {
    main {
      padding-top: 120px;
    }
  }
  
  /* S'assurer que les h1 sont bien visibles */
  main h1 {
    margin-top: 0;
    position: relative;
    z-index: 1;
  }
  
  /* Classe utilitaire pour les contenus centrés */
  .view-content {
    padding-top: 140px;
    padding-bottom: 3rem;
    min-height: calc(100vh - 140px);
  }
  
  @media (max-width: 1023px) {
    .view-content {
      padding-top: 120px;
      min-height: calc(100vh - 120px);
    }
  }
}

/* Styles d'accessibilité - SYNTAXE v3 AVEC @apply */
@layer base {
  :focus {
    @apply outline-none ring-2 ring-blue-500 ring-offset-2;
  }

  ::selection {
    @apply bg-blue-500 text-white;
  }
}

/* Scrollbar personnalisée - SYNTAXE v3 AVEC @apply */
@layer utilities {
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-gray-100 dark:bg-gray-900;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-blue-500 rounded-lg;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-blue-600;
  }
}

/* Animation pour l'indicateur actif */
@keyframes activeIndicator {
  0%, 100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translateX(-50%) scale(1.1);
  }
}

/* Animation pour l'apparition du menu */
@keyframes glassAppear {
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

/* Définitions de contenu pour le texte au hover */
.glassmorphism-wrapper :deep(.nav-icon-link[href="/"])::after { content: "Accueil"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/about"])::after { content: "À propos"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/e5"])::after { content: "E5"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/e6"])::after { content: "E6"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/tech-watch"])::after { content: "Veille"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/contact"])::after { content: "Contact"; }

/* Animation d'apparition pour le wrapper */
.glassmorphism-wrapper {
  animation: glassAppear 0.6s ease-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .glassmorphism-wrapper {
    width: 95vw;
    border-radius: 20px;
  }
}
</style>