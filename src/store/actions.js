import { fetchNewsList } from "../api/index";
import { fetchJobsList } from "../api/index";
import { fetchAskList } from "../api/index";
import { fetchUserInfo } from "../api/index";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        //console.log(response.data);
        //Actions은 API에서 값을 호출, 값을 담아주는 Mutations은 별도로 호출
        //commit을 이용해서 mutations에 값을 넘기고 있다.
        //context를 인자로 준다. FETCH_NEWS(context)
        context.commit("SET_NEWS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    //이게 왜 가능하지? {내용} 인자에서 내용을 바로 꺼내 쓸 수 있다.
    fetchJobsList()
      .then(({ data }) => {
        //console.log(response);
        commit("SET_JOBS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        //console.log(response);
        commit("SET_ASK", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
