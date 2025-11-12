import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import HowItWorksPage from '../pages/HowItWorksPage.vue'
import ReposPage from '../pages/ReposPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorksPage
  },
  {
    path: '/repos',
    name: 'Repos',
    component: ReposPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

