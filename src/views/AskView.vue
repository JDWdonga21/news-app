<template>
  <div>
    <div v-for="items in ask">{{ items.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index";
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    //var vm = this;
    fetchAskList()
      .then((response) => {
        //console.log(response);
        this.ask = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
