import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateBlog from '../views/blog/create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CreateBlog',
    component: CreateBlog
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/blog/list.vue')
  }, 
  {
    path: '/blog/:blogId',
    name: 'blogDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/blog/show.vue')
  },
  {
    path: '/blog/edit/:blogId',
    name: 'blogEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/blog/edit.vue')
  },
  {
    path: '/me',
    name: 'myhome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/me/index.vue')
  },
  {
    path: '/category',
    name: 'category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/category/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
