<script setup lang="ts">
export interface BadgeProps {
  variant?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
}

withDefaults(defineProps<BadgeProps>(), {
  variant: 'blue',
  size: 'md',
  outline: false
});

const getVariantClasses = (variant: string, outline: boolean) => {
  const baseVariants = {
    blue: outline 
      ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    green: outline 
      ? 'border-green-500 text-green-600 dark:text-green-400' 
      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    yellow: outline 
      ? 'border-yellow-500 text-yellow-600 dark:text-yellow-400' 
      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    red: outline 
      ? 'border-red-500 text-red-600 dark:text-red-400' 
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    purple: outline 
      ? 'border-purple-500 text-purple-600 dark:text-purple-400' 
      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    gray: outline 
      ? 'border-gray-500 text-gray-600 dark:text-gray-400' 
      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  };
  return baseVariants[variant as keyof typeof baseVariants];
};

const getSizeClasses = (size: string) => {
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };
  return sizes[size as keyof typeof sizes];
};
</script>

<template>
  <span 
    :class="[
      'inline-flex items-center font-medium rounded-full',
      getSizeClasses(size),
      getVariantClasses(variant, outline),
      { 'border bg-transparent': outline }
    ]"
  >
    <slot />
  </span>
</template>