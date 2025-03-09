import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/portfolio', name: 'Home', component: HomeView },
  { path: '/about', name: 'AboutMe', component: AboutMeView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
  { path: '/skills', name: 'Skills', component: SkillsView },
  { path: '/contact', name: 'Contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
