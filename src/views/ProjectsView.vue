<template>
  <div class="min-h-screen flex flex-col transition-all duration-500">
    <!-- Page Content -->
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Projects Section -->
    <section class="py-10 text-center">
      <h1 class="text-4xl font-bold font-lobster">Mes Projets</h1>
      <p>Vous trouverez ici quelques projets que j'ai eu à réaliser</p>

      <!-- Academic Projects -->
      <h2 class="text-3xl font-semibold font-poppins mt-8">Projets Académiques</h2>
      <div class="mt-6 flex flex-wrap justify-center gap-6">
        <HexCard v-for="project in academicProjects" :key="project.name" :project="project" />
      </div>

      <!-- Professional Projects -->
      <h2 class="text-3xl font-semibold font-poppins mt-8">Projets Professionnels</h2>
      <div class="mt-6 flex flex-wrap justify-center gap-6">
        <HexCard v-for="project in professionalProjects" :key="project.name" :project="project" />
      </div>

      <!-- Personal Projects -->
      <h2 class="text-3xl font-semibold font-poppins mt-8">Projets Personnels</h2>
      <div class="mt-6 flex flex-wrap justify-center gap-6">
        <HexCard v-for="project in personalProjects" :key="project.name" :project="project" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import PortfolioFooter from '@/components/PortfolioFooter.vue'
import PortfolioNavbar from '@/components/PortfolioNavbar.vue'
import adLogo from '@/components/assets/img/active_directory.png'
import glpiLogo from '@/components/assets/img/logo-GLPI-500-blue.png'
import organizheurLogo from '@/components/assets/img/Organizheur.png'
import delivereasyLogo from '@/components/assets/img/Deliver_easy.png'
import nursecareLogo from '@/components/assets/img/NurseCare.png'
import vigieitLogo from '@/components/assets/img/Vigie_IT_EVT.png'
import kerhopeLogo from '@/components/assets/img/kerhope.jpg'
import HexCard from '@/components/helpers/HexCard.vue'

export default {
  name: 'ProjectsView',
  components: {
    PortfolioNavbar,
    PortfolioFooter,
    HexCard,
  },
  data() {
    return {
      nightMode: false,
      academicProjects: [
        {
          name: 'Active Directory',
          category: 'Academics',
          logo: new URL(adLogo, import.meta.url).href,
          description:
            'Mise en place sous windows server d´un annuaire permettant la gestion des utilisateurs et de leurs accès.',
          file: '/docs/ad.pdf',
        },
        {
          name: 'GLPI',
          category: 'Academics',
          logo: new URL(glpiLogo, import.meta.url).href,
          description:
            'Mise en place d´un outil de gestion de parc informatique, de suivi des incidents et de service helpdesk',
          file: '/docs/glpi.pdf',
        },
        {
          name: 'Organizheur',
          category: 'Academics',
          logo: new URL(organizheurLogo, import.meta.url).href,
          description:
            'Organizheur est un outil de gestion de tâches destiné à faciliter la gestion du temps et le suivi des tâches au sein d´une entreprise.',
          file: '/docs/organizheur.pdf',
        },
        {
          name: "Deliver'Easy",
          category: 'Academics',
          logo: new URL(delivereasyLogo, import.meta.url).href,
          description: 'Deliver´Easy est une application de gestion des livraisons de colis.',
          file: '/docs/delivereasy.pdf',
        },
        {
          name: 'NurseCare',
          category: 'Academics',
          logo: new URL(nursecareLogo, import.meta.url).href,
          description: 'NurseCare est une application de gestion des soins infirmiers.',
          file: '/docs/nursecare.pdf',
        },
      ],
      professionalProjects: [
        {
          name: 'Vigie IT EVT',
          category: 'Professional',
          logo: new URL(vigieitLogo, import.meta.url).href,
          description:
            'Vigie IT EVT est une application de gestion des outils informatiques mis à la disposition des collaborateurs.',
          file: '/docs/vigieit.pdf',
        },
      ],
      personalProjects: [
        {
          name: 'KERHOPE',
          category: 'Personal',
          logo: new URL(kerhopeLogo, import.meta.url).href,
          description:
            'KERHOPE est un site web vitrine pour une association basée à Nantes chargée d´aider les personnes étrangères en difficulté.',
          file: '/docs/kerhope.pdf',
        },
      ],
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
/* Smooth Page Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
