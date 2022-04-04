<template>
  <div>
    <!-- <div v-for="Job in this.$store.state.jobs">
      {{ Job.title }}
    </div> -->
    <p v-for="Job in this.$store.state.jobs">
      <a v-bind:href="Job.url"> {{ Job.title }} </a>
      <small> {{ Job.time_ago }} {{ Job.domain }} </small>
    </p>
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
