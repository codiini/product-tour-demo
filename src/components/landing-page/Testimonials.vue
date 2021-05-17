<template>
  <v-main>
    <v-row class="py-16">
      <v-col cols="12">
        <div class="section_title">
          <h2>What <span>Tripma</span> Users are saying</h2>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <div class="flex">
          <div class="testimonial_img-container">
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
              class="testimonial_img"
            />
          </div>
          <div class="flex flex-col">
            <p class="user_name ma-0">{{ testimonial.name }}</p>
            <p class="user_location ma-0">
              {{ testimonial.location }} | {{ testimonial.year }}
            </p>
            <div><img :src="testimonial.star" alt="Star rating" /></div>
            <div>
              <p class="user_testimony">
                {{ testimonial.testimony }}
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import star1 from "../../assets/five-star.png";
import star2 from "../../assets/four-star.png";
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          image:
            "https://res.cloudinary.com/codiini/image/upload/v1616802107/avatar_umwuxa.png",
          name: "Yifei Chen",
          location: "Seoul, South Korea",
          year: "April, 2019",
          star: star1,
          testimony:
            "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me.",
        },
        {
          id: 2,
          image:
            "https://res.cloudinary.com/codiini/image/upload/v1616802107/avatar-1_b4vtix.png",
          name: "Kaori Yamaguchi",
          location: "Honolu, Hawaii",
          year: "February, 2017",
          star: star2,

          testimony:
            "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy.",
        },
        {
          id: 3,
          image:
            "https://res.cloudinary.com/codiini/image/upload/v1616802106/avatar-2_evpr5x.png",
          name: "Anthony Lewis",
          location: "Berlin, Germany",
          year: "April, 2019",
          star: star1,

          testimony:
            "When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend.",
        },
      ],
    };
  },
};
</script>

<style>
.section_title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #6e7491;
  margin-bottom: 24px;
}
.testimonial_img-container {
  width: 100%;
  height: auto;
  max-width: 50px;
  margin-right: 16px;
}
.testimonial_img {
  height: auto;
  width: 100%;
}
.user_name {
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #6e7491;
  margin: 0;
}
.user_location {
  color: #6e7491;
  margin: 0;
}
.user_location,
.user_testimony {
  line-height: 25px;
  font-size: 18px;
}
.user_testimony {
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #27273f;
}
</style>