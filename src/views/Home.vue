<template>
  <div class="home">
    <Hero />
    <v-container>
      <FlightDeals />
      <UniquePlaces />
      <Testimonials />
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/landing-page/Hero";
import FlightDeals from "@/components/landing-page/FlightDeals";
import UniquePlaces from "@/components/landing-page/UniquePlaces";
import Testimonials from "@/components/landing-page/Testimonials";
import Footer from "../components/landing-page/Footer.vue";
export default {
  name: "Home",
  components: {
    Hero,
    FlightDeals,
    UniquePlaces,
    Testimonials,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,300&display=swap");
* {
  font-family: "Nunito Sans", sans-serif;
  /* outline: 1px solid red; */
}
</style>
