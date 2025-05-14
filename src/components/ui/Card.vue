<script setup lang="ts">
export interface CardProps {
  title?: string;
  subtitle?: string;
  hover?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'sm' | 'md' | 'lg';
}

withDefaults(defineProps<CardProps>(), {
  hover: true,
  shadow: 'md',
  padding: 'md'
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
</script>

<template>
  <div 
    :class="[
      'bg-white dark:bg-gray-800 rounded-lg transition-shadow duration-300',
      getShadowClasses(shadow),
      getPaddingClasses(padding),
      { 'hover:shadow-lg dark:hover:shadow-gray-700/50 transform hover:-translate-y-1 transition-transform duration-200': hover }
    ]"
  >
    <div v-if="title || subtitle" class="mb-4">
      <h3 v-if="title" class="text-xl font-bold text-gray-900 dark:text-gray-100">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="text-gray-600 dark:text-gray-400 mt-1">
        {{ subtitle }}
      </p>
    </div>
    <slot />
  </div>
</template>