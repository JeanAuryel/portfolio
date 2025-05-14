import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Importer les composants de vues (chargement paresseux pour les performances)
const HomeView = () => import('@/views/HomeView.vue');
const AboutMeView = () => import('@/views/AboutMeView.vue');
const E5View = () => import('@/views/E5View.vue');
const E6View = () => import('@/views/E6View.vue');
const TechnologyWatchView = () => import('@/views/TechnologyWatchView.vue');
const ContactView = () => import('@/views/ContactView.vue');
const NotFoundView = () => import('@/views/NotFoundView.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Accueil - Jean-Auryel Akinotcho'
    }
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutMeView,
    meta: {
      title: 'À Propos de Moi - Jean-Auryel Akinotcho'
    }
  },
  {
    path: '/e5',
    name: 'E5',
    component: E5View,
    meta: {
      title: 'E5 - Réalisations - Jean-Auryel Akinotcho'
    }
  },
  {
    path: '/e6',
    name: 'E6',
    component: E6View,
    meta: {
      title: 'E6 - Documentation - Jean-Auryel Akinotcho'
    }
  },
  {
    path: '/tech-watch',
    name: 'TechnologyWatch',
    component: TechnologyWatchView,
    meta: {
      title: 'Veille Technologique - Jean-Auryel Akinotcho'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contact - Jean-Auryel Akinotcho'
    }
  },
  // Route pour les pages non trouvées
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: 'Page non trouvée - Jean-Auryel Akinotcho'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Comportement de défilement
  scrollBehavior(to, from, savedPosition) {
    // Revenir à la position sauvegardée si disponible
    if (savedPosition) {
      return savedPosition;
    }
    
    // Comportement personnalisé pour les ancres
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Tenir compte de la barre de navigation fixe
      };
    }
    
    // Sinon, revenir en haut de la page
    return { top: 0, behavior: 'smooth' };
  }
});

// Mettre à jour le titre de la page
router.beforeEach((to, from, next) => {
  // Mettre à jour le titre de la page
  if (to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = 'Jean-Auryel Akinotcho - Portfolio';
  }
  
  next();
});

export default router;