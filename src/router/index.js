import Vue from 'vue'
import VueRouter from 'vue-router'
import tab from '../views/tab'
import tabItem from '../views/tabItem'
import reply from '../views/reply'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tab/:id',
    component: tab,
    children: [
      {
        path: '',
        component: tabItem
      }
    ]
  },
  {
    path: '/reply/:id',
    component: reply
  },
  {
    path: '/',
    redirect: '/tab/tech'
  }
]

const router = new VueRouter({
  routes
})

export default router
