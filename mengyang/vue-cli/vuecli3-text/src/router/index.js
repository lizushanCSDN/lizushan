import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    alias:"/aboutpage"

  },
  {
    path: '/page1',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/page2',
    name: 'Page2',
    component: () => import('../views/Page2.vue'),
    children:[
      {
        path: 'child1/:id',
        name: 'Child1',
        component: () => import('../views/Child1.vue')
      },
      {
        path: 'child2',
        name: 'Child2',
        component: () => import('../views/Child2.vue')
      },
    ]
  },
  {
    path: '/page3',
    name: 'Page3',
    component: () => import('../views/Page3.vue')
  },
  {
    path: '/backhome',
    redirect:"/"
  },
  {
    path: '*',
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
