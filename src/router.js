import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import FullCard from "./components/FullCard.vue";

Vue.use(VueRouter);
Vue.use(Vuex)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card/:id",
    name: "FullCard",
    component: FullCard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
