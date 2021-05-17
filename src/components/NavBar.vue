<template>
  <v-container>
    <v-app-bar app elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon medium color="primary" class=""> mdi-bell </v-icon>
      <v-avatar rounded color="primary" class="ml-4">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <h2 class="user-name ml-2 font-light hidden md:block">Iniubong Obonguko</h2>
    </v-app-bar>

    <v-navigation-drawer
      fixed
      app
      v-model="drawer"
      elevation="0"
      height="100%"
      max-width="230px"
      color="primary"
    >
      <v-layout column align-center>
        <v-flex class="mt-4 mb-3">
          <a href="/dashboard/main">
            <img
              src="https://res.cloudinary.com/codiini/image/upload/v1616764731/tripma-white_mif2b2.svg"
              alt=""
              class="px-6"
            />
          </a>
        </v-flex>
      </v-layout>
      <v-list class="text-left">
        <v-list-item router :to="'/dashboard/main'">
          <v-list-item-icon>
            <v-icon color="grey lighten-3">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-gray-200">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="'/dashboard/reservations'">
          <v-list-item-icon>
            <v-icon color="grey lighten-3">mdi-ticket</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-gray-200"
              >My Reservations</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="'/dashboard/settings'">
          <v-list-item-icon>
            <v-icon color="grey lighten-3">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content color="grey lighten-3">
            <v-list-item-title class="text-gray-200"
              >Account Settings</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
/* *{
  outline:1px solid red;
} */
input {
  outline: none;
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: 0;
}
</style>