import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView";
import JobsView from "../views/JobsView";
import AskView from "../views/AskView";
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // url 주소
      path: "/news",
      // 표시될 컴포넌트
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/item",
      component: ItemView,
    },
    {
      //path: "/user",
      path: "/user/:id",
      component: UserView,
    },
  ],
});
