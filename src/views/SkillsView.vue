<template>
  <div class="min-h-screen flex flex-col transition-all duration-500">
    <main class="flex-grow pt-20">
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-bold font-lobster animate-fade-in mb-6">
          Mes Compétences Techniques
        </h1>
        <p class="text-lg font-poppins max-w-2xl mx-auto animate-fade-in delay-200">
          Voici un aperçu des langages, frameworks et outils que j'utilise dans le développement
          web.
        </p>
      </div>

      <!-- Coding Skills Sections -->
      <div class="container mx-auto px-6 mt-10">
        <h2 class="text-3xl font-semibold font-poppins mb-4">Langages de Programmation</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard v-for="skill in programmingLanguages" :key="skill.name" :skill="skill" />
        </div>
      </div>

      <div class="container mx-auto px-6 mt-10">
        <h2 class="text-3xl font-semibold font-poppins mb-4">Technologies Frontend</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard v-for="skill in frontendTechnologies" :key="skill.name" :skill="skill" />
        </div>
      </div>

      <div class="container mx-auto px-6 mt-10">
        <h2 class="text-3xl font-semibold font-poppins mb-4">Technologies Backend</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard v-for="skill in backendTechnologies" :key="skill.name" :skill="skill" />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import SkillCard from '@/components/helpers/SkillCard.vue'
import typescriptIcon from '@/components/assets/img/typescript.png'
import javascriptIcon from '@/components/assets/img/javascript.png'
import phpIcon from '@/components/assets/img/php.png'
import pythonIcon from '@/components/assets/img/python.png'
import kotlinIcon from '@/components/assets/img/kotlin.png'
import nuxtIcon from '@/components/assets/img/nuxt_logo.png'
import sqlIcon from '@/components/assets/img/sql.png'
import vuejsIcon from '@/components/assets/img/vuejs.png'
import tailwindIcon from '@/components/assets/img/tailwind.png'
import html5Icon from '@/components/assets/img/html5.png'
import css3Icon from '@/components/assets/img/css3.png'
import angularIcon from '@/components/assets/img/angular.png'
import expressIcon from '@/components/assets/img/express.png'
import symfonyIcon from '@/components/assets/img/symfony.png'
import mysqlIcon from '@/components/assets/img/mysql.png'
import mariadbIcon from '@/components/assets/img/mariadb.png'
import heidisqlIcon from '@/components/assets/img/heidisql.png'

export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      programmingLanguages: [
        {
          name: 'TypeScript',
          icon: new URL(typescriptIcon, import.meta.url).href,
          description: 'Langage moderne pour des applications robustes.',
        },
        {
          name: 'JavaScript',
          icon: new URL(javascriptIcon, import.meta.url).href,
          description: 'Le langage du web pour des interfaces interactives.',
        },
        {
          name: 'PHP',
          icon: new URL(phpIcon, import.meta.url).href,
          description: 'Langage backend utilisé avec Symfony.',
        },
        {
          name: 'Python',
          icon: new URL(pythonIcon, import.meta.url).href,
          description: "Utilisé pour l'automatisation et les scripts.",
        },
        {
          name: 'Kotlin',
          icon: new URL(kotlinIcon, import.meta.url).href,
          description: "Développement d'applications Android.",
        },
        {
          name: 'SQL',
          icon: new URL(sqlIcon, import.meta.url).href,
          description: 'Gestion de bases de données MySQL & MariaDB.',
        },
      ],
      frontendTechnologies: [
        {
          name: 'Vue.js 3',
          icon: new URL(vuejsIcon, import.meta.url).href,
          description: 'Framework JavaScript pour des interfaces modernes.',
        },
        {
          name: 'Nuxt.js 3',
          icon: new URL(nuxtIcon, import.meta.url).href,
          description: 'Framework JavaScript pour des interfaces modernes.',
        },
        {
          name: 'Tailwind CSS',
          icon: new URL(tailwindIcon, import.meta.url).href,
          description: 'Framework CSS pour un design rapide et fluide.',
        },
        {
          name: 'HTML5',
          icon: new URL(html5Icon, import.meta.url).href,
          description: 'Langage de structuration du web.',
        },
        {
          name: 'CSS3',
          icon: new URL(css3Icon, import.meta.url).href,
          description: 'Mise en page et design avancé du web.',
        },
        {
          name: 'Angular',
          icon: new URL(angularIcon, import.meta.url).href,
          description: 'Framework utilisé pour certaines applications.',
        },
      ],
      backendTechnologies: [
        {
          name: 'Express.js',
          icon: new URL(expressIcon, import.meta.url).href,
          description: 'Framework Node.js rapide et léger.',
        },
        {
          name: 'Symfony',
          icon: new URL(symfonyIcon, import.meta.url).href,
          description: 'Framework PHP puissant pour le backend.',
        },
        {
          name: 'MySQL',
          icon: new URL(mysqlIcon, import.meta.url).href,
          description: 'Framework PHP puissant pour le backend.',
        },
        {
          name: 'MariaDB',
          icon: new URL(mariadbIcon, import.meta.url).href,
          description: 'Framework PHP puissant pour le backend.',
        },
        {
          name: 'HeidiSQL',
          icon: new URL(heidisqlIcon, import.meta.url).href,
          description: 'Framework PHP puissant pour le backend.',
        },
      ],
    }
  },
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300;400;600&display=swap';

.font-lobster {
  font-family: 'Lobster', cursive;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

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
