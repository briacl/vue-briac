import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles
import "@/assets/styles/index.scss";

// mouting point for the whole app

import App from "@/App.vue";

// views for Admin layout

import Index from "@/views/IndexPage.vue";

// routes

const routes = [
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
