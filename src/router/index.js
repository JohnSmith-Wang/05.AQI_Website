import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Aqi from '../views/Aqi.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aqi',
    name: 'Aqi',
    component: Aqi
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
