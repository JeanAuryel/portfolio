<script setup lang="ts">
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  fullWidth: false,
  iconPosition: 'left'
});

defineEmits<{
  click: [event: MouseEvent];
}>();

const getVariantClasses = (variant: string) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 border-gray-200 dark:border-gray-700',
    success: 'bg-green-600 hover:bg-green-700 text-white border-green-600',
    danger: 'bg-red-600 hover:bg-red-700 text-white border-red-600',
    outline: 'bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
  };
  return variants[variant as keyof typeof variants];
};

const getSizeClasses = (size: string) => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  return sizes[size as keyof typeof sizes];
};
</script>

<template>
  <button 
    @click="$emit('click', $event)"
    :disabled="disabled"
    :class="[
      'font-medium rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      getVariantClasses(variant),
      getSizeClasses(size),
      { 'w-full': fullWidth },
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
  >
    <span class="flex items-center justify-center">
      <svg 
        v-if="icon && iconPosition === 'left'" 
        class="mr-2 -ml-1 h-5 w-5" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path :d="icon"/>
      </svg>
      <slot />
      <svg 
        v-if="icon && iconPosition === 'right'" 
        class="ml-2 -mr-1 h-5 w-5" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path :d="icon"/>
      </svg>
    </span>
  </button>
</template>