import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Home/Home.vue"),
    redirect: '/capitalIdentify',
    children: [
      {
      path: 'capitalIdentify',
      name: 'capitalIdentify',
      component: () => import("@/views/Home/CapitalIdentify.vue")
      },
      {
        path: 'capitalQuery',
        name: 'capitalQuery',
        component: () => import("@/views/Home/CapitalQuery.vue")
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login/Login.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
