<script setup lang="ts">
export interface PageSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: 'default' | 'walnut' | 'cream' | 'ivory' | 'gradient-walnut' | 'gradient-cream' | 'gradient-blue' | 'gradient-purple';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  fullWidth?: boolean;
  showGrain?: boolean; // Nouvel effet de grain de bois
}

withDefaults(defineProps<PageSectionProps>(), {
  background: 'default',
  spacing: 'md',
  centered: false,
  fullWidth: false,
  showGrain: false
});

const getBackgroundClasses = (background: string) => {
  const backgrounds = {
    default: 'bg-adaptive-primary',
    walnut: 'section-walnut',
    cream: 'section-cream',
    ivory: 'section-ivory',
    'gradient-walnut': 'bg-gradient-to-br from-walnut-lightest via-cream-100 to-walnut-lighter',
    'gradient-cream': 'bg-gradient-to-br from-cream-50 via-ivory-50 to-cream-100',
    'gradient-blue': 'bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20',
    'gradient-purple': 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
  };
  return backgrounds[background as keyof typeof backgrounds];
};

const getSpacingClasses = (spacing: string) => {
  const spacings = {
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32'
  };
  return spacings[spacing as keyof typeof spacings];
};

const getTextColorClasses = (background: string) => {
  // Adaptation des couleurs de texte selon le fond
  const walnutBackgrounds = ['walnut', 'gradient-walnut'];
  return walnutBackgrounds.includes(background) ? 'text-walnut-text-dark' : 'text-adaptive';
};

const getTitleGradient = (background: string) => {
  const walnutBackgrounds = ['walnut', 'gradient-walnut'];
  return walnutBackgrounds.includes(background) 
    ? 'from-walnut-gold-dark to-walnut-gold'
    : 'from-walnut-gold to-walnut-gold-light';
};
</script>

<template>
  <section
    :id="id"
    :class="[
      getBackgroundClasses(background),
      getSpacingClasses(spacing),
      { 'text-center': centered },
      'relative overflow-hidden transition-all duration-500'
    ]"
  >
    <!-- Effet grain de bois optionnel -->
    <div 
      v-if="showGrain"
      class="absolute inset-0 opacity-10 pointer-events-none"
      style="
        background: 
          repeating-linear-gradient(0deg,
            transparent 0px,
            color-mix(in oklch, oklch(var(--color-walnut-light)) 3%, transparent 97%) 1px,
            transparent 2px,
            color-mix(in oklch, oklch(var(--color-walnut-medium)) 2%, transparent 98%) 3px,
            transparent 4px
          ),
          repeating-linear-gradient(90deg,
            transparent 0px,
            color-mix(in oklch, oklch(var(--color-walnut-light)) 1%, transparent 99%) 12px,
            transparent 24px
          );
      "
    ></div>
    
    <div :class="fullWidth ? 'w-full' : 'container mx-auto px-4'">
      <!-- En-tête de section avec style adaptatif -->
      <div v-if="title || subtitle" class="mb-12 relative z-10">
        <h2
          v-if="title"
          :class="[
            'text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300',
            getTextColorClasses(background)
          ]"
        >
          <span 
            class="bg-gradient-to-r bg-clip-text text-transparent animate-pulse"
            :class="[
              'from-' + getTitleGradient(background).split(' ')[0].replace('from-', ''),
              'to-' + getTitleGradient(background).split(' ')[1].replace('to-', '')
            ]"
          >
            {{ title }}
          </span>
        </h2>
        
        <p
          v-if="subtitle"
          :class="[
            'text-xl max-w-3xl transition-colors duration-300',
            centered ? 'mx-auto' : '',
            background.includes('walnut') 
              ? 'text-walnut-text-dark opacity-80' 
              : 'text-adaptive-secondary'
          ]"
        >
          {{ subtitle }}
        </p>
      </div>
      
      <!-- Contenu de la section -->
      <div class="relative z-10">
        <slot />
      </div>
    </div>
    
    <!-- Effet de lueur subtile sur les sections noyer -->
    <div 
      v-if="background.includes('walnut')"
      class="absolute inset-0 bg-gradient-radial from-walnut-gold-light/5 via-transparent to-transparent opacity-50 pointer-events-none"
    ></div>
    
    <!-- Effet de particules flottantes pour les sections importantes -->
    <div 
      v-if="background === 'gradient-walnut'"
      class="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-walnut-gold/20 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
      <div class="absolute top-3/4 right-1/3 w-1 h-1 bg-walnut-gold-light/30 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-walnut-gold/15 rounded-full animate-bounce" style="animation-delay: 2s;"></div>
    </div>
  </section>
</template>

<style scoped>
/* Gradient radial personnalisé */
.bg-gradient-radial {
  background: radial-gradient(circle at center, var(--tw-gradient-stops));
}

/* Section noyer avec effet de profondeur amélioré */
.section-walnut {
  background: linear-gradient(135deg, 
    color-mix(in oklch, oklch(var(--color-walnut-lightest)) 50%, oklch(var(--color-cream-50)) 50%), 
    color-mix(in oklch, oklch(var(--color-walnut-lighter)) 60%, oklch(var(--color-cream-100)) 40%));
  position: relative;
}

.section-walnut::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    transparent 0%, 
    color-mix(in oklch, oklch(var(--color-walnut-light)) 5%, transparent 95%) 50%, 
    transparent 100%);
  pointer-events: none;
}

/* Section crème */
.section-cream {
  background: linear-gradient(135deg, 
    oklch(var(--color-cream-50)), 
    oklch(var(--color-cream-100)), 
    oklch(var(--color-ivory-50)));
}

/* Section ivoire */
.section-ivory {
  background: linear-gradient(135deg, 
    oklch(var(--color-ivory-50)), 
    oklch(var(--color-cream-50)), 
    oklch(var(--color-beige-50)));
}

/* Animation d'apparition pour les titres */
h2 span {
  animation: walnutTitleShine 3s ease-in-out infinite;
}

@keyframes walnutTitleShine {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.1) contrast(1.05);
  }
}

/* Hover effect sur toute la section */
section:hover .bg-gradient-radial {
  opacity: 0.7;
  transition: opacity 0.5s ease;
}

/* Effet parallaxe subtil pour les sections importantes */
.section-walnut,
.bg-gradient-to-br {
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .section-walnut,
  .bg-gradient-to-br {
    background-attachment: scroll; /* Meilleure performance mobile */
  }
}

/* Animation des particules */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: float 3s ease-in-out infinite;
}

/* Accessibility - Réduction du mouvement si demandé */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce,
  h2 span {
    animation: none;
  }
}
</style>