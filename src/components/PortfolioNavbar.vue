<template>
  <nav
    class="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300"
    :class="{
      'bg-white/60 text-black': !nightMode,
      'bg-gray-900/60 text-white': nightMode,
    }"
  >
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img src="../components/assets/img/JA_logo.png" alt="Logo" class="w-12 h-12" />
        <router-link
          to="/"
          class="text-2xl font-bold hover:opacity-80 transition-opacity duration-300"
        >
          Portfolio
        </router-link>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="hover:underline transition-colors duration-300"
          :class="{ 'text-black': !nightMode, 'text-white': nightMode }"
        >
          {{ link.name }}
        </router-link>
      </div>

      <!-- Dark Mode Toggle -->
      <button
        @click="$emit('toggleNightMode')"
        class="p-2 rounded-full transition-colors duration-300"
        :class="{
          'bg-gray-200 hover:bg-gray-300': !nightMode,
          'bg-gray-700 hover:bg-gray-600': nightMode,
        }"
      >
        <span v-if="!nightMode" class="text-xl">🌙</span>
        <span v-else class="text-xl">☀️</span>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  props: {
    nightMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        { path: '/about', name: 'À propos de moi' },
        { path: '/projects', name: 'Projets' },
        { path: '/skills', name: 'Compétences' },
        { path: '/contact', name: 'Contact' },
      ],
    }
  },
}
</script>

<style>
/* Base styles for glassmorphism */
nav {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Improved hover effects */
.router-link-active {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
