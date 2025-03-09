import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactView from '@/views/ContactView.vue'
import Epreuve_E4 from '@/views/Epreuve_E4.vue'
import Epreuve_E5 from '@/views/Epreuve_E5.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/portfolio', name: 'Home', component: HomeView },
  { path: '/about', name: 'AboutMe', component: AboutMeView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
  { path: '/skills', name: 'Skills', component: SkillsView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/e4', name: 'E4', component: Epreuve_E4 },
  { path: '/e5', name: 'E5', component: Epreuve_E5 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
