import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Coinflip from '../views/Coinflip.vue'
import Jackpot from '../views/Jackpot.vue'
import NotFound from '../views/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'
import Miscellaneous from '../views/Miscellaneous.vue'
import Users from '../views/Users.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coinflip',
      name: 'coinflip',
      component: Coinflip
    },
    {
      path: '/jackpot',
      name: 'jackpot',
      component: Jackpot
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/miscellaneous',
      name: 'Miscellaneous',
      component: Miscellaneous
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    { path: '/:pathMatch(.*)*', redirect: '/404' }
  ]
})

export default router
