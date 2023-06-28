import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WordcloudChart from "@/components/WordcloudChart.vue";
import HotBar from "@/components/HotBar.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/wordcloud",
    name: "wordcloud",
    // component: () => import("../views/WordcloudChart.vue"),
    component: WordcloudChart,
  },
  {
    path: "/hotbar",
    name: "hotbar",
    component: HotBar,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
