import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import IndexView from '@/views/IndexView.vue'
import { useTokenStore } from '@/stores/mytoken'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginView.vue')
    },
    {
      path: '/:xxx(.*)*',
      name: 'ErrorPage',
      component: () => import('@/views/ErrorPage.vue')
    },
    {
      path: '/user_look_index',
      name: 'user_look_index',
      component: () => import('@/views/user_look/AppHp.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'user_home',
          component: () => import('@/views/user_look/user_layout/appMain.vue')
        },
        {
          path: '/ocr_project',
          name: 'ocr_project',
          component: () => import('@/views/user_look/user_project/user_ocr.vue')
        },
        {
          path: '/lpdr_project',
          name: 'lpdr_project',
          component: () => import('@/views/user_look/user_project/user_lpdr.vue')
        }
      ]
    },
    {
      path: '/',
      name: '',
      component: AppLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'home',
          component: IndexView
        },
        {
          path: '/user_menu',
          name: 'user_menu',
          component: () => import('@/views/menu/user_managent.vue')
        },
        {
          path: '/lpdr',
          name: 'lpdr',
          component: () => import('@/project/LPDR.vue')
        },
        {
          path: '/ocr',
          name: 'ocr',
          component: () => import('@/project/OCR.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta?.requiresAuth)) {
    const store = useTokenStore()
    if (!store.token.access_token) {
      next({ name: 'login', query: { redirect: to.fullPath } })
      return
    }
  }
  next()
})

export default router
