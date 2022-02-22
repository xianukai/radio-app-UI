import Vue from 'vue'
import VueRouter from 'vue-router'
import Live from '../views/Live.vue'
import Talk from '../views/Talk.vue'
import Cast from '../views/Cast.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Live',
    component: Live
  },
  {
    path: '/talk',
    name: 'Talk',
    component: Talk
  },
  {
    path: '/cast',
    name: 'Cast',
    component: Cast
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
