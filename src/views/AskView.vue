<template>
  <div>
    <!-- <div v-for="items in ask">{{ items.title }}</div> -->
    <p v-for="items in ask">
      <a v-bind:href="items.url">{{ items.title }}</a>
      <small> {{ items.time_ago }} by {{ items.user }} </small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  // <div></div>에 this.$store.state.ask처럼 불러오면 나중에 알아보기 쉽지 않다. 특히 모듈화 이후에는 주소가 더 길어진다.
  // 그리고 속성의 접근하는 횟수가 늘어난다.
  computed: {
    // #3_1
    // index.js 의 getters
    ...mapGetters({
      ask: "fetchedAsk",
    }),
    // #3_2
    // index.js 의 getters
    // ...mapGetters(["ask"]), //ask : "ask" 로 일치할 때
    // #2
    // ...mapState({
    //   // mapState를 이용해서 vuex의 state.ask 를 ask에 담겠다.
    //   ask: (state) => state.ask,
    // }),
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    //var vm = this;
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
