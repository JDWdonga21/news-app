import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList } from "../api/index";
//Vuex는 플로그인 형태로 제공됨
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    //state를 첫번째 인자로 받음
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          console.log(response.data);
          //Actions은 API에서 값을 호출, 값을 담아주는 Mutations은 별도로 호출
          //commit을 이용해서 mutations에 값을 넘기고 있다.
          context.commit("SET_NEWS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
