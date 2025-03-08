<template>
  <div
    class="min-h-screen flex flex-col transition-all duration-500"
    :class="{ 'bg-white text-black': !nightMode, 'bg-gray-900 text-white': nightMode }"
  >
    <!-- Navbar -->
    <PortfolioNavbar :nightMode="nightMode" @toggleNightMode="toggleNightMode" />

    <!-- Page Content -->
    <main class="flex-grow pt-20">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :nightMode="nightMode" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <PortfolioFooter />
  </div>
</template>

<script lang="ts">
import PortfolioNavbar from '@/components/PortfolioNavbar.vue'
import PortfolioFooter from '@/components/PortfolioFooter.vue'

export default {
  components: {
    PortfolioNavbar,
    PortfolioFooter,
  },
  data() {
    return {
      nightMode: false,
    }
  },
  methods: {
    toggleNightMode() {
      this.nightMode = !this.nightMode
      // Toggle dark class for Tailwind
      document.documentElement.classList.toggle('dark', this.nightMode)
    },
  },
  mounted() {
    // Check system preference on initial load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    this.nightMode = prefersDark
    document.documentElement.classList.toggle('dark', prefersDark)
  },
}
</script>

<style>
/* Page Transition Effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Global styles for consistent theme across pages */
body {
  transition:
    background-color 0.5s ease,
    color 0.5s ease;
}

.dark body {
  background-color: #111827;
  color: white;
}
</style>
