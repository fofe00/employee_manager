import { createRouter, createWebHistory } from 'vue-router'
//  import Home from '../views/Home.vue'
//  import Edit from '../views/Edit-emp.vue'
import Newemployee from '../components/Newemployee.vue'
import Dashboard from '../components/Dashboard.vue'
import Viewemployee from '../components/Viewemployee.vue'
import Editemployee from '../components/Editemployee.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/new',
    name: 'Newemployee',
    component: Newemployee
  },
  {
    path: '/edit:employee_id',
    name: 'Editemployee',
    component: Editemployee
  },
  {
    path: '/view',
    name: 'Viewemployee',
    component: Viewemployee
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
