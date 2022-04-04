<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ this.$store.state.user.karma }}</p>
    <p>created: {{ this.$store.state.user.created }}</p>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    console.log("1");
    console.log(userName);
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
