import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/Register.vue";

const routes = [
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/",
    name: "*",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/landing",
    name: "landing",
    component: () => import("../components/Landing.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

export default router;
