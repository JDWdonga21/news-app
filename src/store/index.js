import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList } from "../api/index";
import { fetchJobsList } from "../api/index";
import { fetchAskList } from "../api/index";
//Vuex는 플로그인 형태로 제공됨
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  mutations: {
    //state를 첫번째 인자로 받음
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
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
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((response) => {
          //console.log(response);
          context.commit("SET_JOBS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then((response) => {
          //console.log(response);
          context.commit("SET_ASK", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
