<template>
  <v-card>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" sm="3">
        <v-img
          class="rounded-md"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        >
        </v-img>
      </v-col>
      <v-col class="flex items-center">
        <div class="p-2">
          <p class="text-base"><slot name="trip-name"></slot></p>
          <small class="text-xs text-gray-500"
            ><slot name="trip-duration"></slot
          ></small>
        </div>
        <!-- <div class="flex justify-end pr-3">
          <v-btn small color="primary" class="rounded-lg" elevation="0"
            >Details</v-btn
          >
        </div> -->
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>

</style>