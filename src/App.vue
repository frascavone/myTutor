<template>
  <TheHeader />
  <RouterView />
</template>

<script setup>
import TheHeader from './layout/TheHeader.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
  font-size: 62.5%;
}
body {
  margin: 0;
}
#app {
  font-size: 1.25rem;
}
</style>
