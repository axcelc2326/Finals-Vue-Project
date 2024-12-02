<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  components: {
    Home,
  },
};
</script>

<style scoped>
  .app{
    background: linear-gradient(to left, #833ab4, #fd1d1d, #fcb045);
  }
</style>
