<template>
  <v-app>
    <NavBar/>
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
  name:"Dashboard",
  components:{
    NavBar,
  }
};
</script>

<style>
</style>