<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");
* {
  font-family: "Open Sans", sans-serif;
}
#map svg {
  /* border: 1px solid red; */
  width: 100%;
  max-height: calc(100% - 75px);
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
