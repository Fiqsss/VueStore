import { createRouter, createWebHistory } from "vue-router"
import Product from "../components/product/index.vue"
import DetailProduct from "../components/product/detailproduct.vue"
import Cart from "../components/cart/index.vue"
import Notfound from "../components/errors/404.vue"
const routes = [
  {
    path : '/',
    name : 'product',
    component : Product
  },
  {
    path : '/product/:id',
    name : 'detailproduct',
    component : DetailProduct
  },
  {
    path : '/cart',
    name : 'cart',
    component : Cart
  },
  {
    path: '/:catchAll(.*)',
    component: Notfound
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
