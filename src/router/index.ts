import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Import des vues
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import E5View from '../views/E5View.vue'
import E6View from '../views/E6View.vue'
import TechnologyWatchView from '../views/TechnologyWatchView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Accueil - Portfolio Jean-Auryel',
      description: 'Bienvenue sur mon portfolio',
      requiresAuth: false,
      showLoading: false // Pas de loading car déjà fait au démarrage
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutMeView,
    meta: {
      title: 'À propos - Portfolio Jean-Auryel',
      description: 'En savoir plus sur mon parcours',
      showLoading: true,
      loadingText: 'Chargement de mon profil...'
    }
  },
  {
    path: '/e5',
    name: 'E5',
    component: E5View,
    meta: {
      title: 'E5 - Portfolio Jean-Auryel',
      description: 'Projets et compétences E5',
      showLoading: true,
      loadingText: 'Chargement des projets E5...'
    }
  },
  {
    path: '/e6',
    name: 'E6',
    component: E6View,
    meta: {
      title: 'E6 - Portfolio Jean-Auryel',
      description: 'Projets et compétences E6',
      showLoading: true,
      loadingText: 'Chargement des projets E6...'
    }
  },
  {
    // CORRECTION : Utiliser /tech-watch pour correspondre à votre navigation
    path: '/tech-watch',
    name: 'TechnologyWatch',
    component: TechnologyWatchView,
    meta: {
      title: 'Veille Technologique - Portfolio Jean-Auryel',
      description: 'Ma veille technologique et mes outils de recherche',
      showLoading: true,
      loadingText: 'Chargement de la veille technologique...'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contact - Portfolio Jean-Auryel',
      description: 'Me contacter',
      showLoading: false // Contact simple, pas besoin de loading
    }
  },
  {
    // Route de redirection pour l'ancienne URL (si nécessaire)
    path: '/technology-watch',
    redirect: '/tech-watch'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: 'Page non trouvée - Portfolio Jean-Auryel',
      showLoading: false
    }
  },
  {
  path: '/test-v3',
  name: 'TestV3',
  component: () => import('@/views/TestV3View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Guards de navigation avec gestion du loading
router.beforeEach(async (to, from, next) => {
  // Démarrer le loading si nécessaire (si vous utilisez useAppLoading)
  if (to.meta.showLoading) {
    // startPageLoading() - décommentez si vous utilisez le composable
  }
  
  // Mettre à jour le titre de la page
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  // Mettre à jour la meta description
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description as string)
    }
  }

  // Simuler un délai de chargement pour les pages avec showLoading
  if (to.meta.showLoading && from.name !== undefined) {
    // Petit délai pour montrer le loading (ajustez selon vos besoins)
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  
  next()
})

router.afterEach((to, from) => {
  // Terminer le loading (si vous utilisez useAppLoading)
  if (to.meta.showLoading) {
    // finishPageLoading() - décommentez si vous utilisez le composable
  }

  // Analytics (si vous en utilisez)
  // gtag('config', 'GA_MEASUREMENT_ID', {
  //   page_title: to.meta.title,
  //   page_location: to.fullPath
  // })
})

// Types pour TypeScript
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
    requiresAuth?: boolean
    showLoading?: boolean
    loadingText?: string
  }
}

export default router