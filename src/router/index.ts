import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: () => import('@/views/PrivacyPolicy.vue')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/blog/:id',
      name: 'post',
      component: () => import('@/views/PostView.vue'),
      props: true
    },
    {
      path: '/author/:id',
      name: 'author',
      component: () => import('@/views/AuthorView.vue'),
      props: true
    },
    {
      path: '/:category(startup|business|economy|technology)',
      name: 'category',
      component: () => import('@/views/CategoryView.vue'),
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: import('@/views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
