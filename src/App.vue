<template>
  <head>
    <link rel="stylesheet" href="./assets/tailwind" />
  </head>
  <div>  
    <router-view></router-view>
  
  </div>
</template>

<script>
import JobList from "./components/jobsList.vue";

export default {
  name: "App",
  components: {
    JobList,
  },
};
</script>

<style src="./assets/tailwind.css" />
