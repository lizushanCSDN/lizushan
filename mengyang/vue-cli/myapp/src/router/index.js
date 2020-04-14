import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Tv',
    component: () => import('../views/tv/Tv.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/music/Music.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/book/Book.vue'),
    // beforeEnter: (to, from, next) => {
    //   console.log(to,from,next)
    // }
  },
  {
    path: '/talk',
    name: 'Talk',
    component: () => import('../views/talk/Talk.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
