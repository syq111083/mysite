import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/email',
    name: 'email',
    component: () => import('../views/Email.vue')
  },
  {
    path: '/comic',
    name: 'comic',
    component: () => import('../views/Comic.vue')
  },
  {
    path: '/comicUpload',
    name: 'comicUpload',
    component: () => import('../views/ComicUpload.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
