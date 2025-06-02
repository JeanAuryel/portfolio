<script setup lang="ts">
export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'surface' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
}

withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  size: 'md',
  outline: false
});

const getVariantClasses = (variant: string, outline: boolean) => {
  if (outline) {
    const outlineVariants = {
      primary: 'border-primary bg-transparent text-main',
      secondary: 'border-secondary bg-transparent text-secondary', 
      accent: 'border-accent bg-transparent text-accent',
      surface: 'border-main bg-transparent text-main'
    };
    return outlineVariants[variant as keyof typeof outlineVariants] || outlineVariants.primary;
  }

  const solidVariants = {
    primary: 'badge', // Utilise la classe composée définie dans le CSS
    secondary: 'bg-secondary text-on-dark',
    accent: 'bg-accent text-on-dark',
    surface: 'bg-surface text-main border border-main'
  };
  return solidVariants[variant as keyof typeof solidVariants] || solidVariants.primary;
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
      'inline-flex items-center font-medium rounded-full transition-all duration-200',
      getSizeClasses(size),
      getVariantClasses(variant, outline),
      { 'border': outline }
    ]"
  >
    <slot />
  </span>
</template>