<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow pt-20 container mx-auto px-6">
      <h1 class="text-4xl font-bold font-lobster text-center mb-6">Épreuve E4</h1>
      <p class="text-lg font-poppins max-w-2xl mx-auto text-center">
        Description de l'épreuve E4 du BTS SIO option SLAM : mise en situation professionnelle,
        analyse de dossiers, préparation et présentation des solutions techniques...
      </p>

      <!-- Lien de téléchargement du fichier Excel -->
      <div class="text-center mt-8">
        <a
          href="/components/assets/docs/E4- Tableau de synthèse - Epreuve E4 - BTS SIO 2022.xlsx"
          download
          class="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          Télécharger le fichier Excel
        </a>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EpreuveE4View',
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
