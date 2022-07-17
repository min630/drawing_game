import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/default-awards',
    component: () => import('../views/DefaultAwards.vue'),
  },
  {
    path: '/custom-awards',
    component: () => import('../views/CustomAwards.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
