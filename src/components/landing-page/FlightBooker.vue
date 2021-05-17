<template>
  <v-app>
    <v-container>
    <v-form class="flight-booker">
      <v-container class="flex items-center justify-center">
        <v-row class="flex flex-col lg:flex-row">
          <v-text-field solo dense label="From where?">
            <template v-slot:prepend-inner>
              <img width="24" height="24" src="../../assets/departure.svg" />
            </template>
          </v-text-field>
          <v-text-field solo dense label="Where to?">
            <template v-slot:prepend-inner>
              <img width="24" height="24" src="../../assets/arrival.svg" />
            </template>
          </v-text-field>
          <v-menu
            ref="departMenu"
            v-model="departMenu"
            :close-on-content-click="false"
            :return-value.sync="departDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="departDate"
                label="Departure date"
                readonly
                v-bind="attrs"
                v-on="on"
                solo
                dense
              >
                <template v-slot:prepend-inner>
                  <img width="24" height="24" src="../../assets/calendar.svg" />
                </template>
              </v-text-field>
            </template>
            <v-date-picker v-model="departDate" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="departMenu = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.departMenu.save(departDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-menu
            ref="returnMenu"
            v-model="returnMenu"
            :close-on-content-click="false"
            :return-value.sync="returnDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="returnDate"
                label="Return date"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                solo
                dense
              >
                <template v-slot:prepend-inner>
                  <img width="24" height="24" src="../../assets/calendar.svg" />
                </template>
              </v-text-field>
            </template>
            <v-date-picker v-model="returnDate" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="returnMenu = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.returnMenu.save(returnDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-text-field solo dense label="No. of travellers">
            <template v-slot:prepend-inner>
              <img width="24" height="24" src="../../assets/person.svg" />
            </template>
          </v-text-field>
          <v-btn color="#605dec" height="38px" class="white--text"
            >Search</v-btn
          >
        </v-row>
      </v-container>
    </v-form>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      departMenu: false,
      returnMenu: false,
      departDate: null,
      returnDate: null,
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 800px) and (max-width: 1024px) {
  .flight-booker{
    margin-bottom:200px;
  }
}
@media screen and (min-width: 1024px) {
  .v-text-field {
    width: 100px;
  }
  .v-btn {
    text-transform: none;
    border-radius: 4px;
  }
}
</style>