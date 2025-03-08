<template>
  <div
    class="min-h-screen flex flex-col transition-all duration-500"
    :class="{ 'bg-light text-dark': !nightMode, 'bg-dark2 text-light': nightMode }"
  >
    <!-- Page Content -->
    <main class="flex-grow pt-20">
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-bold opacity-0 animate-fade-in font-lobster mb-6">
          Bienvenue sur mon Portfolio
        </h1>
      </div>
      <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left"
      >
        <!-- Hero Image -->
        <img
          src="../components/assets/img/JA_Hi_picture.png"
          alt="Hero Image"
          class="w-full md:w-1/4 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8 animate-fade-in"
        />

        <div class="md:w-3/4">
          <p
            class="text-xl opacity-0 animate-fade-in delay-200 font-poppins max-w-3xl mx-auto md:mx-0 mt-4"
          >
            Je suis <span class="font-semibold">Jean-Auryel Akinotcho</span>, mais vous pouvez aussi
            m'appeler <span class="font-semibold">JA</span>. Passionné par le développement web,
            j’aime créer des expériences interactives et performantes.
          </p>

          <p
            class="text-xl opacity-0 animate-fade-in delay-400 font-poppins max-w-3xl mx-auto md:mx-0 mt-4"
          >
            Ce portfolio est une vitrine de mes compétences, de mes projets réalisés et de mon
            parcours. Découvrez mes réalisations et n'hésitez pas à me contacter pour en savoir plus
            !
          </p>
        </div>
      </div>
      <div class="text-center mt-8">
        <router-link
          to="/projects"
          class="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300 font-poppins"
        >
          Explorer mes projets
        </router-link>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      nightMode: true, // Ensure dark mode is on by default
    }
  },
  methods: {
    toggleNightMode() {
      this.nightMode = !this.nightMode
    },
  },
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300;400;600&display=swap';

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
