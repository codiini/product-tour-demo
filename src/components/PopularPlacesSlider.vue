<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="popularPlace in getPopularPlaces"
      :key="popularPlace.id"
    >
      <v-row>
        <v-col cols="12">
          <v-card
            elevation="0"
            height="100px"
            class="rounded-lg cursor-pointer"
          >
            <v-img :src="popularPlace.image" height="200px" width="150px">
              <div
                class="relative top-36 flex flex-col items-center bg-gray-900 bg-opacity-70 pb-2"
              >
                <h2 class="text-white font-bold">
                  {{ popularPlace.name }}
                </h2>
                <div class="flex items-center justify-center">
                  <div class="flex items-center justify-center text-white mr-2">
                    <v-icon color="white" small>mdi-calendar-blank</v-icon>
                    <small>
                      {{ popularPlace.duration }}
                    </small>
                  </div>
                  <div class="text-white">
                    <v-icon color="white" small>mdi-star</v-icon>
                    <small>
                      {{ popularPlace.rating }}
                    </small>
                  </div>
                </div>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          315: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          250: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  computed: {
    ...mapState({
      getPopularPlaces: (state) => state.popularplaces,
    }),
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/base.scss";
// .swiper {
//   // height: 100px;
// }
</style>