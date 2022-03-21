import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView";
import JobsView from "../views/JobsView";
import AskView from "../views/AskView";

Vue.use(VueRouter);

export const router = new VueRouter({
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
  ],
});
