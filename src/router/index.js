import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/Home'
import Login from '../pages/Login'
import Earn from '../pages/Earn'
import Daily from '../pages/Daily'
import Giveaway from '../pages/Giveaway'
import Promocode from '../pages/Promocode'
import Payout from '../pages/Payout'
import Account from '../pages/Account'
import About from '../pages/About'
import Faq from '../pages/Faq'
import Admin from '../pages/Admin'
import AdminLogin from '../pages/AdminLogin'
import Reseller from '../pages/Reseller'
import ResellerLogin from '../pages/ResellerLogin'


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
      path: '/daily',
      name: 'Daily',
      component: Daily,
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
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        admin: true
      }
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/reseller',
      name: 'Reseller',
      component: Reseller,
      meta: {
        reseller: true
      }
    },
    {
      path: '/reseller/login',
      name: 'ResellerLogin',
      component: ResellerLogin
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
  if (to.meta.reseller && !localStorage.resellerAuth) next('/reseller/login')
  else next()
})

router.beforeEach((to, from, next) => {
  if (to.meta.protected && !localStorage.username) next('/login')
  else next()
})

export default router