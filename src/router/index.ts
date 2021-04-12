import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/setting',
    component: () => import(/* webpackChunkName: "home" */ '../views/Setting.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router