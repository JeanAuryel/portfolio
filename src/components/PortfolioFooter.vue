<template>
  <footer
    class="w-full p-4 mt-auto text-center transition-all duration-500"
    :class="{ 'bg-gray-100 text-black': !nightMode, 'bg-gray-900 text-white': nightMode }"
  >
    <div class="container mx-auto">
      <p class="text-sm">© 2025 Portfolio | Développé avec ❤️ en Vue.js</p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  props: {
    nightMode: Boolean,
  },
}
</script>

<style scoped>
footer {
  bottom: 0;
  width: 100%;
}
</style>
