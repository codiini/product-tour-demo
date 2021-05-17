<template>
  <v-main>
    <v-row class="pd-16">
      <v-col cols="12">
        <div class="section_text">
          <p>Find your next adventure with these <span>flight deals</span></p>
          <div class="arrow-text">
            <router-link :to="'/dashboard/upcoming-trips'">
              <p>All <v-icon>mdi-arrow-right</v-icon></p>
            </router-link>
          </div>
        </div>
      </v-col>
      <v-col
        v-for="flightDeal in flightDeals"
        :key="flightDeal.index"
        cols="12"
        sm="4"
      >
        <v-card class="deal_card" height="480px">
          <v-img :src="flightDeal.image" height="350px"> </v-img>
          <div class="flex flex-col m-4">
            <div class="flex items-start justify-between">
              <h2>
                {{ flightDeal.place }},<span> {{ flightDeal.city }}</span>
              </h2>
              <p class="deal_card_price">${{ flightDeal.price }}</p>
            </div>
            <p class="deal_card_description">{{ flightDeal.description }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      flightDeals: [
        {
          id: 1,
          image:
            "https://res.cloudinary.com/codiini/image/upload/v1616796112/shanghai_ujerrz.png",
          place: "The Bund",
          city: "Shanghai",
          price: "598",
          description: "China's most international city",
        },
        {
          id: 2,
          image:
            "https://res.cloudinary.com/codiini/image/upload/v1616796111/operahouse_yto6te.png",
          place: "Sydney Opera House",
          city: "Sydney",
          price: "981",
          description: "Take a stroll along the famous harbor",
        },
        {
          id: 3,
          image:
            "https://res.cloudinary.com/codiini/image/upload/v1616796112/kyoto_qvsejw.png",
          place: "Kodaiji Temple",
          city: "Kyoto",
          price: "633",
          description: "Step back in time in the Gion district",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section_text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: #6e7491;
  font-size: 1.5rem;
}
.section_text span,
span {
  color: #605dec;
}
.arrow-text p{
  display:flex;
}
.arrow-text p {
  color: #a1b0cc;
}
.deal_card {
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(28, 5, 77, 0.1),
    0px 12px 32px rgba(0, 0, 0, 0.05);
}
.deal_card h2 {
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
}
.deal_card_description {
  font-weight: normal;
  position: relative;
  top: -6px;
}
.deal_card_price {
  font-size: 16px;
  line-height: 22px;
  color: #7c8db0;
}
@media screen and (min-width: 250px) and (max-width: 600px) {
  .section_text {
    font-size: 1rem;
  }
  .section_text {
    padding: 0 23px 0 0;
  }
}
</style>