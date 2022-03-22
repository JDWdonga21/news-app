<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
//import axios from "axios";
import { fetchNewsList } from "../api/index";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    //var vm = this;
    fetchNewsList()
      .then((response) => {
        console.log(response);
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
