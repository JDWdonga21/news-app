<template>
  <div>
    <!-- <div v-for="user in users">{{ user.title }}</div> -->
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_NEWS");
    //var vm = this;
    // fetchNewsList()
    //   .then((response) => {
    //     console.log(response);
    //     this.users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
