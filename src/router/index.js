import Vue from "vue";
import VueRouter from "vue-router";
import ProfileInfo from "../components/profile-info.vue";

Vue.use(VueRouter);

const routes = [{ path: "/profile-info", component: ProfileInfo }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
