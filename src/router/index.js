import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/awards',
    // component: () => import('../views/CheckAwards.vue'),
    children: [
      {
        path: 'default-awards',
        component: () => import('../views/DefaultAwards.vue'),
      },
      {
        path: 'custom-awards',
        component: () => import('../views/CustomAwards.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/AdminPage.vue'),
  },
  {
    path: '/kuji',
    component: () => import('../views/KujiPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
