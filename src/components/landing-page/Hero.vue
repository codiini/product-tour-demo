<template>
  <div>
    <NavBar />
    <div class="hero_bg">
      <div class="hero_text_gradient">
        <h1 class="leading-none">It's more than just a trip</h1>
      </div>
      <FlightBooker />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/landing-page/NavBar";
import FlightBooker from "@/components/landing-page/FlightBooker";
export default {
  components: {
    NavBar,
    FlightBooker,
  },
};
</script>

<style scoped>
.hero_bg {
  height: 700px;
  padding: 8px 0px 160px;
  background-image: url("../../assets/world-map.png");
}
.hero_text_gradient {
  margin: 50px auto;
  width: 756px;
  height: 305px;
  text-align: center;
}
h1 {
  font-size: 90px;
  font-weight: 800;
  background: -webkit-linear-gradient(30deg, #605dec, #1513a0, #605dec);
  background-clip: text;
  color: transparent;
  text-align: center;
}
@media screen and (max-width: 800px) {
  .hero_text_gradient {
    height: 200px;
    width: 100vw;
    text-align: center;
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 60px;
    padding: 0 30px;
  }
  .hero_bg {
    height: 800px;
    width: 100vw;
    padding: 8px 0px 160px;
    background-size: 100%;
  }
}
@media screen and (min-width: 700px) and (max-width: 800px) {
  h1 {
    padding: 0 130px;
  }
}
@media screen and (min-width: 800px) and (max-width: 1023px) {
  .hero_bg {
    height: 900px;
  }
}
</style>

