import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../pages/Home.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      name: "Home",
      component: Home
    },
    {
      path: '/purchases',
      name: "Purchases",
      component: () => import('../pages/Purchases.vue')
    },
    {
      path: '/tagged',
      name: "Tagged",
      component:  () => import('../pages/Tagged.vue')
    }
  ],
});

export default router;