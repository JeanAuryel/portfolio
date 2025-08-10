<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
}

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  closable: true
});

const emits = defineEmits<{
  close: [];
}>();

const getSizeClasses = (size: string) => {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-4xl',
    full: 'max-w-7xl'
  };
  return sizes[size as keyof typeof sizes];
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closable && props.isOpen) {
    emits('close');
  }
};

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget && props.closable) {
    emits('close');
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
  if (props.isOpen) {
    document.body.style.overflow = 'hidden';
  }
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = 'auto';
});

// Gérer l'overflow du body
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>

<template>
  <Transition name="modal" appear>
    <div 
      v-if="isOpen"
      class="fixed inset-0 z-50 overflow-y-auto"
      @click="handleBackdropClick"
    >
      <div class="flex min-h-screen items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
        
        <!-- Modal panel -->
        <div 
          :class="[
            'relative w-full transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-xl transition-all',
            getSizeClasses(size)
          ]"
        >
          <!-- Header -->
          <div v-if="title || closable" class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <h2 v-if="title" class="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {{ title }}
            </h2>
            <button 
              v-if="closable"
              @click="$emit('close')"
              class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Content -->
          <div class="px-6 py-4">
            <slot />
          </div>
          
          <!-- Footer -->
          <div v-if="$slots.footer" class="border-t border-gray-200 dark:border-gray-700 px-6 py-4">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>