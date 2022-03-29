<template>
  <div>
    <div v-for="Job in this.$store.state.jobs">{{ Job.title }}</div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  created() {
    //var vm = this;
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
