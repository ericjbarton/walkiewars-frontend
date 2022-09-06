import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/create",
    name: "create",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/CreateView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/map",
    name: "map",
    component: () => import(/* webpackChunkName: "about" */ "../views/MapView.vue"),
  },
  {
    path: "/dogs",
    name: "dog",
    component: () => import(/* webpackChunkName: "about" */ "../views/DogsView.vue"),
  },
  {
    path: "/geomap",
    name: "geomap",
    component: () => import(/* webpackChunkName: "about" */ "../views/GeoMapView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
