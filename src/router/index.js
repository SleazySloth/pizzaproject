import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Extras from '../views/Extras.vue'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/extras',
    name: 'Extras',
    component: Extras
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
