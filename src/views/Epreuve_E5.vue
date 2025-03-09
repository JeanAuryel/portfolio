<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow pt-20 container mx-auto px-6">
      <h1 class="text-4xl font-bold font-lobster text-center mb-6">Épreuve E5</h1>
      <p class="text-lg font-poppins max-w-2xl mx-auto text-center">
        Description de l'épreuve E5 : projet de développement, soutenance orale, etc. Présentation
        de deux projets réalisés dans le cadre du BTS SIO option SLAM.
      </p>

      <!-- Liste des projets E5 -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(project, index) in e5Projects"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-all hover:scale-105"
        >
          <h2 class="text-xl font-semibold font-poppins mb-2">{{ project.title }}</h2>
          <p class="text-sm font-poppins mb-4">{{ project.description }}</p>
          <div class="flex space-x-4">
            <!-- Lien téléchargement -->
            <a
              :href="project.docLink"
              download
              class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg"
            >
              Télécharger la Doc
            </a>
            <!-- Lien démo -->
            <a
              :href="project.demoLink"
              target="_blank"
              class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg"
            >
              Voir la Démo
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EpreuveE5View',
  data() {
    return {
      e5Projects: [
        {
          title: 'Projet 1 : Gestion de Stock',
          description:
            'Application permettant la gestion de stock en temps réel, réalisée en Vue.js et Express.js.',
          docLink: '/docs/projet1_doc.pdf', // place le PDF dans public/docs/
          demoLink: 'https://domaine-de-demo.fr/projet1',
        },
        {
          title: 'Projet 2 : Plateforme E-learning',
          description:
            "Plateforme de cours en ligne, développée en Angular et Node.js, intégration d'un système de quiz.",
          docLink: '/docs/projet2_doc.pdf',
          demoLink: 'https://domaine-de-demo.fr/projet2',
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300;400;600&display=swap');

.font-lobster {
  font-family: 'Lobster', cursive;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
