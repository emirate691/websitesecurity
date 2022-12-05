import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Scan from '@/views/Scan.vue'
import Scansuccessful from '@/views/Scansuccessful.vue'
import Summary from '@/views/Summary.vue'




Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/scan',
    name: 'scan',
    component: Scan,
  },
  {
    path: '/Scansuccessful',
    name: 'Scansuccessful',
    component:Scansuccessful,
  },

  {
    path:'/summary',
    name: 'summary',
    component: Summary
  }
  /*{
    path: '/solution',
    name: 'solution',
    component: Solution,
    meta: {
      layout: 'default',
    },
  },*/
  

  
   
   
]
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
