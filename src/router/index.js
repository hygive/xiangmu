import Vue from 'vue'
import VueRouter from 'vue-router'
import TestOne from '../views/TestOne.vue'
import TestTwo from '../views/TestTwo.vue'
import TestThree from '../views/TestThree.vue'
import TestSucess from '../views/TestSucess.vue'   
import Appointment from '../views/Appointment.vue' 
import Application from '../views/Application.vue' 
import CommodityDetails from "../views/CommodityDetails.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'testone',
    component: TestOne
  },
  {
    path: '/testtwo',
    name: 'testtwo',
    component: TestTwo
  },
  // {
  //   path: '/testtwo/:list',
  //   name: 'testtwo',   
  //   component: TestTwo
  // },
  {
    path: '/testtwo/testthree',
    name: 'testthree',
    component: TestThree
  },
  {
    path: '/testtwo/testthree/testsucess',
    name: 'testsucess',
    component: TestSucess
  },
  {
    path: '/testtwo/testthree/testsucess/appointment',
    name: 'appointment',
    component: Appointment
  },
  {
    path:'/application',
    name: 'application',
    component: Application
  },
  {
    path:'/application/commoditydetails',
    name: 'commoditydetails',
    component: CommodityDetails
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
