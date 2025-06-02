<script setup lang="ts">
export interface CardProps {
  title?: string;
  subtitle?: string;
  hover?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'main' | 'surface' | 'surface-alt';
}

withDefaults(defineProps<CardProps>(), {
  hover: true,
  shadow: 'md',
  padding: 'md',
  variant: 'main'
});

const getShadowClasses = (shadow: string) => {
  const shadows = {
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
    xl: 'shadow-xl hover:shadow-2xl'
  };
  return shadows[shadow as keyof typeof shadows];
};

const getPaddingClasses = (padding: string) => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  return paddings[padding as keyof typeof paddings];
};

const getVariantClasses = (variant: string) => {
  const variants = {
    main: 'card-main', // Utilise la classe composée définie dans le CSS
    surface: 'bg-surface text-main border border-main',
    'surface-alt': 'bg-surface-alt text-main border border-secondary'
  };
  return variants[variant as keyof typeof variants] || variants.main;
};
</script>

<template>
  <div 
    :class="[
      'rounded-lg transition-all duration-300',
      getVariantClasses(variant),
      getShadowClasses(shadow),
      getPaddingClasses(padding),
      { 
        'hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-200 cursor-pointer': hover 
      }
    ]"
  >
    <div v-if="title || subtitle" class="mb-4">
      <h3 v-if="title" class="text-xl font-bold text-main">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="text-secondary mt-1">
        {{ subtitle }}
      </p>
    </div>
    <slot />
  </div>
</template>