<template>
  <div>
    <div v-for="items in this.$store.state.ask">{{ items.title }}</div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  created() {
    //var vm = this;
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
