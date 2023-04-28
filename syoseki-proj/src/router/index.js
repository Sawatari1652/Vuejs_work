import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookInfo from '../views/BookInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/BookSearch',
    name: 'BookSearch',
    component: () => import(/* webpackChunkName: "BookSearch" */ '../views/BookSearch.vue')
  },
  {
    path: '/BookInfo',
    name: 'BookInfo',
    component: BookInfo
  },
  {
    path: '/bookmodify/:bookid',
    name: 'BookModify',
    meta: {
      requiresAuth: true 
    }
  },
  {
    path: '/bookregist',
    name: 'BookRegist',
    meta: {
      requiresAuth: true 
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
