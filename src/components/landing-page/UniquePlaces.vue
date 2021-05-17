<template>
  <v-main class="container">
    <v-row class="py-16">
      <v-col cols="12">
        <div class="section_text">
          <p>Explore Unique places <span>to stay</span></p>
          <div class="arrow-text">
            <router-link :to="'/dashboard/upcoming-trips'">
              <p>All <v-icon>mdi-arrow-right</v-icon></p>
            </router-link>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        v-for="uniquePlace in uniquePlaces"
        :key="uniquePlace.id"
      >
        <v-card height="524px" class="uniqueplace_card">
          <v-img :src="uniquePlace.image" height="350px"> </v-img>
          <div class="uniqueplace_card-text">
            <h2>
              {{ uniquePlace.title }} <span>{{ uniquePlace.location }}</span>
            </h2>
            <p>
              {{ uniquePlace.description }}
            </p>
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
      uniquePlaces: [
        {
          id: 1,
          image:
            "https://res.cloudinary.com/codiini/image/upload/v1616800381/maldives_fbornz.png",
          title: "Stay among the atolls in",
          location: "Maldives",
          description:
            "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells. ",
        },
        {
          id: 2,
          image:
            "https://res.cloudinary.com/codiini/image/upload/v1616800381/morocco_h0wo5l.png",
          title: "Experience the Ourika Valley in",
          location: "Morocco",
          description:
            "Morocco’s Hispano-Moorish architecture blends influences from Berber culture.",
        },
        {
          id: 3,
          image:
            "https://res.cloudinary.com/codiini/image/upload/v1616800381/mongolia_el1s12.png",
          title: "Live traditionally in ",
          location: "Mongolia",
          description:
            "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.",
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
  color: #22c3a6;
}
.uniqueplace_card-text {
  padding: 16px 24px;
}
.uniqueplace_card h2 {
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #6e7491;
}
.uniqueplace_card p {
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #7c8db0;
}
@media screen and (min-width: 600px) and (max-width: 820px) {
  .uniqueplace_card-text {
    padding: 3px;
  }
  .uniqueplace_card p {
    font-size: 14px;
  }
}
@media screen and (min-width: 250px) and (max-width: 600px) {
  .section_text{
    font-size: 1rem;
  }
}
</style>