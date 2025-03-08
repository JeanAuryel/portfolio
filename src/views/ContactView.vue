<template>
  <div
    class="min-h-screen flex flex-col transition-all duration-500"
    :class="{ 'bg-light text-dark': !nightMode, 'bg-dark2 text-light': nightMode }"
  >
    <!-- Page Content -->
    <main class="flex-grow pt-20">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <section class="py-10 text-center">
      <h1 class="text-4xl font-bold font-lobster">Me Contacter</h1>
      <p class="text-lg font-poppins mt-4">
        Vous souhaitez me contacter ? Utilisez les informations ci-dessous ou envoyez-moi un message
        directement.
      </p>
      <!-- Contact Form -->
      <div class="mt-8 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-white mb-4">Envoyez-moi un message</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-white text-left">Nom</label>
            <input
              type="text"
              v-model="form.name"
              required
              class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-white text-left">Adresse Email</label>
            <input
              type="email"
              v-model="form.email"
              required
              class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-white text-left">Message</label>
            <textarea
              v-model="form.message"
              required
              class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
          >
            Envoyer
          </button>
        </form>
      </div>
      <!-- Contact Section -->
      <div class="mt-6 flex flex-col items-center space-y-4">
        <div class="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/jean-auryel" target="_blank">
            <img
              src="../components/assets/img/LI-In-Bug.png"
              alt="LinkedIn"
              class="w-12 h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://github.com/aureusonly" target="_blank">
            <img
              src="../components/assets/img/github-mark.png"
              alt="GitHub"
              class="w-12 h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
        <p class="text-lg font-poppins">
          📧 Email:
          <a href="mailto:contact@example.com" class="text-blue-500 hover:underline"
            >contact@example.com</a
          >
        </p>
        <p class="text-lg font-poppins">📱 Téléphone: +33 6 12 34 56 78</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      nightMode: true, // Ensure dark mode is on by default
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    toggleNightMode() {
      this.nightMode = !this.nightMode
    },
    submitForm() {
      alert('Votre message a été envoyé !')
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
