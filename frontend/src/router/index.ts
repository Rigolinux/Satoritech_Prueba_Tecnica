import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { isUserLoggedIn } from '@/guards/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/Category/IndexCategory.vue'),
      redirect: { name: 'category-list' },
      children: [
        {
          //create
          path: 'create',
          name: 'category-create',
          component: () => import('../views/Category/CreateCategory.vue')
        },
        {
          //list all
          path: 'list',
          name: 'category-list',
          component: () => import('../views/Category/ListCategory.vue')
        },
        {
          //edit
          path: 'edit/:id',
          name: 'category-edit',
          component: () => import('../views/Category/EditCategory.vue')
        }
      ],
      beforeEnter: (to, from, next) => { isUserLoggedIn(to, from, next) }
    },
    
  ]
})

export default router
