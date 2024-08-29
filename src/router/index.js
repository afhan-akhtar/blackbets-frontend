import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Coinflip from '../views/Coinflip.vue'
import Jackpot from '../views/Jackpot.vue'
import NotFound from '../views/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'
import Miscellaneous from '../views/Miscellaneous.vue'
import Users from '../views/Users.vue'
import ProvablyFair from '../views/ProvablyFair.vue'
import Faqs from '../views/Faqs.vue'
import TermsOfService from '../views/TermsOfService.vue'
import JackpotDeposit from '../views/JackpotDeposit.vue'


import ProfileSettings from '../views/ProfileSettings.vue'


import Affiliate from '../views/Affiliate.vue'
import AffiliateWithdraw from '../views/AffiliateWithdraw.vue'
import PromoCode from '../views/PromoCode.vue'
import Maintenance from '../views/Maintenance.vue'


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
      path: '/affiliate',
      name: 'Affiliate',
      component: Affiliate
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
      path: '/faq',
      name: 'Faqs',
      component: Faqs
    },
    {
      path: '/jackpot/deposit',
      name: 'JackpotDeposit',
      component: JackpotDeposit
    },
    
    {
      path: '/terms',
      name: 'TermsOfService',
      component: TermsOfService
    },
    
   
    {
      path: '/provably-fair',
      name: 'ProvablyFair',
      component: ProvablyFair
    },

    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/promo-code',
      name: 'PromoCode',
      component: PromoCode
    },
    {
      path: '/profile-settings',
      name: 'ProfileSettings',
      component: ProfileSettings
    },
  
    {
      path: '/affiliate/withdraw',
      name: 'AffiliateWithdraw',
      component: AffiliateWithdraw
    },
    {
      path: '/maintenance',
      name: 'Maintenance',
      component: Maintenance
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
