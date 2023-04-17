import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [

  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/RegisterPage.vue')
  },
  {
    path: '/',
    component: () => import('layouts/BasicLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      {
        path: 'road',
        name: 'road',
        component: () => import('pages/RoadPage.vue')
      },
      {
        path: 'reactionGame',
        name: 'reactionGame',
        component: () => import('pages/ReactionGame.vue')
      },
      {
        path: 'memoryGame',
        name: 'memoryGame',
        component: () => import('pages/MemoryGamePage.vue')
      },
      {
        path: 'differenceGame',
        name: 'differenceGame',
        component: () => import('pages/SpotDifferencePage.vue')
      },
      {
        path: 'informations',
        name: 'informations',
        component: () => import('pages/InformationPage.vue')
      },
      {
        path: 'videos',
        name: 'videos',
        component: () => import('pages/VideosPage.vue')
      },
      {
        path: 'games',
        name: 'games',
        component: () => import('pages/GamesPage.vue')
      },
      {
        path: 'main',
        name: 'main',
        component: () => import('pages/MainPage.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
