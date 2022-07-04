import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home.index',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/add',
    name: 'product.add',
    component: () => import('../pages/AddProduct.vue'),
  },
  {
    path: '/edit',
    name: 'product.edit',
    component: () => import('../pages/EditProduct.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
