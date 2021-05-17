import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";

Vue.use(VueRouter);
function loadDashboard(view) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/dashboard/${view}.vue`
    );
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "Sign",
    component: SignIn,
  },
  {
    path: "/dashboard",
    component: loadDashboard("Dashboard"),
    children: [
      {
        path: "main",
        name: "DashboardHome",
        component: loadDashboard("DashboardHome"),
      },
      {
        path: "plan-trip",
        name: "PlanTrip",
        component: loadDashboard("PlanTrip"),
      },
      {
        path: "reservations",
        name: "Reservations",
        component: loadDashboard("Reservations"),
      },
      {
        path: "settings",
        name: "Settings",
        component: loadDashboard("Settings"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
