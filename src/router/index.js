import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Delivery from '../views/Delivery'
import Payment from '../views/Payment'
import Complete from '../views/RegisterComplete'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/delivery',
    component: Delivery
  },
  {
    path: '/payment',
    component: Payment
  },
  {
    path: '/complete',
    component: Complete
  },
]

const router = new VueRouter({
  routes
})

export default router
