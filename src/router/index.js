import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/Home'
import Login from '../pages/Login'
import Earn from '../pages/Earn'
import Giveaway from '../pages/Giveaway'
import Promocode from '../pages/Promocode'
import Payout from '../pages/Payout'
import Account from '../pages/Account'
import About from '../pages/About'
import Faq from '../pages/Faq'

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: {
        protected: true
      }
    },
    {
      path: '/earn',
      name: 'Earn',
      component: Earn,
      meta: {
        protected: true
      }
    },
    {
      path: '/giveaway',
      name: 'Giveaway',
      component: Giveaway,
      meta: {
        protected: true
      }
    },
    {
      path: '/promocode',
      name: 'Promocode',
      component: Promocode,
      meta: {
        protected: true
      }
    },
    {
      path: '/payout',
      name: 'Payout',
      component: Payout,
      meta: {
        protected: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: Faq
    },
    { path: '*', redirect: { name: 'Home' } }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.query['invite']) localStorage.refferal = to.query['invite']
  next()
})

router.beforeEach((to, from, next) => {
  if (to.meta.admin && !localStorage.adminAuth) next('/admin/login')
  else next()
})

router.beforeEach((to, from, next) => {
  if (to.meta.protected && !localStorage.username) next('/login')
  else next()
})

export default router