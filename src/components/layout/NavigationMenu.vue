<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Types TypeScript
export interface NavItem {
  name: string;
  path: string;
  label: string;
  svg: string;
  description?: string;
}

export interface NavigationMenuProps {
  items: NavItem[];
  showLabels?: boolean;
  position?: 'top' | 'center' | 'bottom';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'floating' | 'fixed' | 'sticky';
}

// Props avec valeurs par défaut
const props = withDefaults(defineProps<NavigationMenuProps>(), {
  showLabels: true,
  position: 'top',
  size: 'md',
  variant: 'floating'
});

// Composables
const route = useRoute();

// Computed pour la route actuelle
const currentRoute = computed(() => route.path);

// Classes dynamiques basées sur les props
const containerClasses = computed(() => {
  const baseClasses = ['nav-container-walnut'];
  
  // Taille
  if (props.size === 'sm') baseClasses.push('nav-container-sm');
  if (props.size === 'lg') baseClasses.push('nav-container-lg');
  
  // Position
  if (props.position === 'center') baseClasses.push('nav-position-center');
  if (props.position === 'bottom') baseClasses.push('nav-position-bottom');
  
  return baseClasses;
});

const itemClasses = computed(() => {
  const baseClasses = ['nav-item-walnut'];
  
  if (props.size === 'sm') baseClasses.push('nav-item-sm');
  if (props.size === 'lg') baseClasses.push('nav-item-lg');
  
  return baseClasses;
});

// Fonction pour vérifier si un item est actif
const isActive = (itemPath: string): boolean => {
  if (itemPath === '/') {
    return currentRoute.value === '/';
  }
  return currentRoute.value.startsWith(itemPath);
};
</script>

<template>
  <!-- Container principal de navigation -->
  <nav 
    :class="[
      'fixed z-50 transition-all duration-300 ease-in-out',
      variant === 'floating' ? 'top-6 left-1/2 transform -translate-x-1/2' : 'top-0 w-full',
      variant === 'sticky' ? 'sticky' : ''
    ]"
  >
    <!-- Conteneur de navigation avec style noyer -->
    <div :class="containerClasses">
      <div class="flex items-center gap-4 md:gap-6">
        
        <!-- Items de navigation -->
        <router-link
          v-for="item in items"
          :key="item.path"
          :to="item.path"
          :class="[
            ...itemClasses,
            { 'nav-item-walnut-active': isActive(item.path) }
          ]"
          :title="item.description || item.name"
        >
          <!-- Icône SVG -->
          <svg 
            class="nav-icon-walnut" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2"
          >
            <path :d="item.svg" />
          </svg>
          
          <!-- Label qui apparaît au hover (si activé) -->
          <span 
            v-if="showLabels"
            class="nav-label-walnut"
          >
            {{ item.label }}
          </span>
          
          <!-- Indicateur d'état actif -->
          <div 
            v-if="isActive(item.path)"
            class="nav-active-indicator"
          ></div>
        </router-link>
        
      </div>
      
      <!-- Effet de grain de bois subtil -->
      <div class="nav-grain-overlay"></div>
    </div>
    
    <!-- Ombre portée pour l'effet flottant -->
    <div 
      v-if="variant === 'floating'"
      class="nav-shadow-backdrop"
    ></div>
  </nav>
</template>

<style scoped>
/* ========== CLASSES ADDITIONNELLES POUR LA PERSONNALISATION ========== */

/* Variantes de taille pour le container */
.nav-container-sm {
  padding: 0.5rem 1.5rem;
  min-width: 20rem;
  border-radius: 1rem;
}

.nav-container-lg {
  padding: 1rem 3rem;
  min-width: 45rem;
  border-radius: 1.5rem;
}

/* Variantes de taille pour les items */
.nav-item-sm {
  min-width: 3.5rem;
  height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;
}

.nav-item-lg {
  min-width: 6rem;
  height: 5rem;
  padding: 1.25rem 1.75rem;
  border-radius: 1.125rem;
}

.nav-item-sm .nav-icon-walnut {
  width: 1.25rem;
  height: 1.25rem;
}

.nav-item-lg .nav-icon-walnut {
  width: 2rem;
  height: 2rem;
}

.nav-item-sm .nav-label-walnut {
  font-size: 0.6rem;
}

.nav-item-lg .nav-label-walnut {
  font-size: 0.8rem;
  font-weight: 600;
}

/* Positions alternatives */
.nav-position-center {
  top: 50%;
  transform: translateY(-50%);
}

.nav-position-bottom {
  bottom: 1.5rem;
  top: auto;
}

/* Indicateur d'état actif amélioré */
.nav-active-indicator {
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, 
    oklch(var(--color-walnut-gold)), 
    oklch(var(--color-walnut-gold-light)));
  border-radius: 50%;
  box-shadow: 
    0 0 12px color-mix(in oklch, oklch(var(--color-walnut-gold)) 60%, transparent 40%),
    0 0 4px color-mix(in oklch, oklch(var(--color-walnut-gold-light)) 80%, transparent 20%);
  animation: pulse-glow 2s ease-in-out infinite;
}

.dark .nav-active-indicator {
  background: linear-gradient(135deg, 
    oklch(var(--color-gold-400)), 
    oklch(var(--color-gold-300)));
  box-shadow: 
    0 0 12px color-mix(in oklch, oklch(var(--color-gold-400)) 60%, transparent 40%),
    0 0 4px color-mix(in oklch, oklch(var(--color-gold-300)) 80%, transparent 20%);
}

@keyframes pulse-glow {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) scale(1.2);
    opacity: 0.8;
  }
}

/* Overlay pour l'effet grain de bois */
.nav-grain-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(45deg,
      transparent 0px,
      color-mix(in oklch, oklch(var(--color-walnut-light)) 1%, transparent 99%) 1px,
      transparent 4px
    ),
    repeating-linear-gradient(-45deg,
      transparent 0px,
      color-mix(in oklch, oklch(var(--color-walnut-medium)) 0.5%, transparent 99.5%) 1px,
      transparent 6px
    );
  border-radius: inherit;
  opacity: 0.4;
  pointer-events: none;
}

/* Ombre portée pour l'effet flottant */
.nav-shadow-backdrop {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 1rem;
  background: linear-gradient(to bottom, 
    color-mix(in oklch, oklch(var(--color-walnut-darkest)) 15%, transparent 85%),
    transparent);
  border-radius: 50%;
  filter: blur(8px);
  z-index: -1;
}

/* Amélioration des effets hover */
.nav-item-walnut:hover {
  transform: translateY(-3px) scale(1.02);
}

.nav-item-walnut:hover .nav-icon-walnut {
  transform: scale(0.9);
  filter: drop-shadow(0 2px 4px color-mix(in oklch, oklch(var(--color-walnut-gold)) 30%, transparent 70%));
}

.nav-item-walnut:hover .nav-label-walnut {
  opacity: 1;
  transform: translateX(-50%) translateY(-2px);
  text-shadow: 0 1px 2px color-mix(in oklch, oklch(var(--color-walnut-darkest)) 20%, transparent 80%);
}

/* Animation d'entrée pour la navigation */
.nav-container-walnut {
  animation: slideInNav 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes slideInNav {
  0% {
    opacity: 0;
    transform: translateY(-40px) scale(0.9);
    filter: blur(4px);
  }
  50% {
    opacity: 0.7;
    transform: translateY(-10px) scale(0.95);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* Animation des items de navigation */
.nav-item-walnut {
  animation: fadeInNavItem 0.6s ease-out forwards;
  animation-delay: calc(var(--item-index, 0) * 100ms);
  opacity: 0;
}

@keyframes fadeInNavItem {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Effet de survol global de la navigation */
.nav-container-walnut:hover {
  box-shadow: 
    0 12px 40px color-mix(in oklch, oklch(var(--color-walnut-darkest)) 35%, transparent 65%),
    0 6px 16px color-mix(in oklch, oklch(var(--color-walnut-darker)) 30%, transparent 70%),
    inset 0 2px 4px color-mix(in oklch, oklch(var(--color-walnut-light)) 20%, transparent 80%);
}

/* Responsive amélioré */
@media (max-width: 640px) {
  .nav-container-walnut {
    min-width: 18rem;
    padding: 0.5rem 1rem;
  }
  
  .nav-item-walnut {
    min-width: 3rem;
    height: 3rem;
    padding: 0.625rem 0.875rem;
  }
  
  .nav-icon-walnut {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .nav-label-walnut {
    font-size: 0.625rem;
  }
}

@media (min-width: 1280px) {
  .nav-container-walnut {
    min-width: 42rem;
    padding: 1rem 2.5rem;
  }
  
  .nav-item-walnut {
    min-width: 6rem;
    height: 4.5rem;
    padding: 1.125rem 1.375rem;
  }
  
  .nav-icon-walnut {
    width: 1.875rem;
    height: 1.875rem;
  }
}

/* État focus amélioré pour l'accessibilité */
.nav-item-walnut:focus {
  outline: none;
  background: color-mix(in oklch, oklch(var(--color-walnut-gold)) 20%, transparent 80%);
  box-shadow: 
    0 0 0 3px color-mix(in oklch, oklch(var(--color-walnut-gold)) 40%, transparent 60%),
    0 4px 12px color-mix(in oklch, oklch(var(--color-walnut-gold)) 25%, transparent 75%);
  animation: focusPulse 1.5s ease-in-out infinite;
}

@keyframes focusPulse {
  0%, 100% {
    box-shadow: 
      0 0 0 3px color-mix(in oklch, oklch(var(--color-walnut-gold)) 40%, transparent 60%),
      0 4px 12px color-mix(in oklch, oklch(var(--color-walnut-gold)) 25%, transparent 75%);
  }
  50% {
    box-shadow: 
      0 0 0 3px color-mix(in oklch, oklch(var(--color-walnut-gold)) 60%, transparent 40%),
      0 6px 16px color-mix(in oklch, oklch(var(--color-walnut-gold)) 35%, transparent 65%);
  }
}
</style>