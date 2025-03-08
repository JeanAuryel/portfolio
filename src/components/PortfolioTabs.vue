<template>
  <transition name="modal">
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button @click="$emit('close')" class="absolute top-2 right-2 text-xl">✖</button>
        <h2 class="text-lg font-bold mb-4">Design Details</h2>
        <p v-if="portfolio">{{ portfolio.description }}</p>
        <p v-else class="text-gray-500">Aucune description disponible.</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    portfolio: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
