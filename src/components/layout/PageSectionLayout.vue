<script setup lang="ts">
export interface PageSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: 'default' | 'gray' | 'gradient-blue' | 'gradient-purple';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  fullWidth?: boolean;
}

withDefaults(defineProps<PageSectionProps>(), {
  background: 'default',
  spacing: 'md',
  centered: false,
  fullWidth: false
});

const getBackgroundClasses = (background: string) => {
  const backgrounds = {
    default: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
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
</script>

<template>
  <section 
    :id="id"
    :class="[
      getBackgroundClasses(background),
      getSpacingClasses(spacing),
      { 'text-center': centered }
    ]"
  >
    <div :class="fullWidth ? 'w-full' : 'container mx-auto px-4'">
      <!-- En-tête de section -->
      <div v-if="title || subtitle" class="mb-12">
        <h2 
          v-if="title" 
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
        >
          {{ title }}
        </h2>
        <p 
          v-if="subtitle" 
          class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl"
          :class="centered ? 'mx-auto' : ''"
        >
          {{ subtitle }}
        </p>
      </div>
      
      <!-- Contenu de la section -->
      <slot />
    </div>
  </section>
</template>