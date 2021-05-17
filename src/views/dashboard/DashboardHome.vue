<template>
  <v-main>
    <v-container>
      <div class="lg:flex">
        <v-container class="left-side">
          <v-row>
            <v-col cols="12">
              <h2 class="text-xl">Hello, Iniubong!</h2>
              <p class="text-sm mt-2 text-gray-400">
                Let's travel around the world again
              </p>
            </v-col>
            <v-col cols="6">
              <v-card
                id="v-step-0"
                height="150px"
                class="rounded-lg text-center cursor-pointer"
              >
                <router-link :to="'/dashboard/plan-trip'">
                  <div>
                    <v-avatar class="icon avatar-badge mt-6" size="50">
                      <v-icon color="primary">mdi-plus</v-icon>
                    </v-avatar>
                    <p class="mt-3">Add Trip</p>
                  </div>
                </router-link>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                height="150px"
                class="rounded-lg text-center cursor-pointer v-step-1"
              >
                <router-link :to="'/dashboard/fund-wallet'">
                  <div>
                    <v-avatar class="icon avatar-badge mt-6" size="50">
                      <v-icon color="primary">mdi-plus</v-icon>
                    </v-avatar>
                    <p class="mt-3">Fund Wallet</p>
                  </div>
                </router-link>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card height="300px" class="rounded-lg">
                <v-card-title>Popular Destinations</v-card-title>
                <v-container>
                  <PopularPlacesSlider />
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="right-side">
          <v-row>
            <v-flex class="flex-col">
              <v-col>
                <div class="flex justify-between items-center">
                  <p>Upcoming Trips</p>
                  <div>
                    <router-link
                      :to="'/dashboard/upcoming-trips'"
                      class="flex justify-end items-start"
                    >
                      <p>See all</p>
                      <v-icon>mdi-arrow-right</v-icon>
                    </router-link>
                  </div>
                </div>
              </v-col>
              <v-col cols="12">
                <UpcomingTrips>
                  <template v-slot:trip-name>Desert Surfing</template>
                  <template v-slot:trip-duration
                    >30th June 2021 - 20th July 2021</template
                  >
                </UpcomingTrips>
              </v-col>
              <v-col cols="12">
                <UpcomingTrips>
                  <template v-slot:trip-name>Flexing in Hawaii</template>
                  <template v-slot:trip-duration
                    >30th June 2021 - 20th July 2021</template
                  >
                </UpcomingTrips>
              </v-col>
              <v-col data-tour-step="2">
                <VectorMap />
              </v-col>
            </v-flex>
          </v-row>
        </v-container>
      </div>
    </v-container>
    <v-tour name="myTour" :steps="steps"></v-tour>
  </v-main>
</template>

<script>
import VectorMap from "@/components/VectorMap";
import UpcomingTrips from "@/components/UpcomingTrips";
import PopularPlacesSlider from "@/components/PopularPlacesSlider";
export default {
  components: {
    VectorMap,
    UpcomingTrips,
    PopularPlacesSlider,
  },
  data() {
    return {
         steps: [
          {
            target: '#v-step-0',
            header: {
              title: 'Plan Trip',
            },
            content: `Click here to plan a solo trip or with family and friends`
          },
          { 
            header: {
              title: 'Fund Wallet',
            },
            target: '.v-step-1',
            content: 'Add funds to your wallet or setup up a schedule to save up for that big trip you\'ve always planned for'
          },
          {
            target: '[data-tour-step="2"]',
            // You can use HTML tags. Even emojis too 😏
            content: 'Here\'s a map showing all of your travels as you go on amazing journies to amazing places.<br> Click on each point to relieve memories from each trip &#127776;',
            params: {
              // This sets the placement of the popup
              placement: 'top'
            }
          }
        ]
    };
  },
  mounted: function () {
    this.$tours['myTour'].start()
  }
};
</script>

<style scoped>
.avatar-badge {
  background-color: rgba(21, 5, 197, 0.12);
  padding: 10px;
}
.v-card > :first-child:not(.v-btn):not(.v-chip) {
  border-radius: 100%;
}

@media only screen and (min-width: 1024px) {
  .left-side,
  .right-side {
    width: 50%;
  }
}
</style>