import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ExtendDemoTs from "../views/ExtendTs.vue";
import ExtendDemoJs from "../views/ExtendJs.vue";
import Home2 from "../views/Home2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/extendTs",
    name: "ExtendDemoTs",
    component: ExtendDemoTs
  },
  {
    path: "/extendJs",
    name: "ExtendDemoJs",
    component: ExtendDemoJs
  },
  {
    path: "/Home2",
    name: "Home2",
    component: Home2
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
