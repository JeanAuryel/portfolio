<script setup lang="ts">
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
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
    primary: 'btn-primary', // Utilise la classe composée définie dans le CSS
    secondary: 'btn-secondary', // Utilise la classe composée définie dans le CSS
    accent: 'bg-accent hover:bg-accent text-on-dark border border-accent',
    outline: 'bg-transparent hover:bg-primary/10 text-main border border-primary',
    ghost: 'bg-transparent hover:bg-secondary/20 text-secondary border-transparent'
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
      'font-medium rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
      getVariantClasses(variant),
      getSizeClasses(size),
      { 'w-full': fullWidth },
      { 'opacity-50 cursor-not-allowed': disabled },
      { 'transform hover:-translate-y-0.5 hover:shadow-md': !disabled }
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