import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

//Vuex는 플로그인 형태로 제공됨
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations: mutations,
  actions: actions,
});
