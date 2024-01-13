import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/print",
      name: "print",
      component: () => import("../views/PrintView.vue"),
    },
    {
      path: "/magazine",
      name: "magazine",
      component: () => import("../views/MagazineView.vue"),
    },
  ],
});

export default router;
