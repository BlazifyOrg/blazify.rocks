import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../Views/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    alias: "/home",
  },
  {
    path: "/team",
    name: "team",
    component: () => import("../Views/team"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../Views/projects/index"),
  },
  {
    path: "/projects/:id",
    component: () => import ("../Views/projects/id")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../Views/about"),
  },
  {
    path: "/contact%20us",
    alias: ["/contact us", "/contact"],
    name: "contact us",
    component: () => import("../Views/contact"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
