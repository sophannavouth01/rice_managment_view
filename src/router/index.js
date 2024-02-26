import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/page/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/page/about/AboutView.vue')
    }
  ]
})

export default router
