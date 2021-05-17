<template>
  <v-main>
    <v-container>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Flight Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            Name of step 2
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card elevation="0" class="mb-12" height="600px">
              <v-form>
                <v-row
                  class="lg:px-52 flex flex-col items-center justify-center"
                >
                  <v-col class="flex items-center justify-center">
                    <v-radio-group v-model="radioGroup" row>
                      <v-radio
                        v-for="n in tripOption"
                        :key="n.id"
                        :label="n.label"
                        :value="n.value"
                        v-model="n.value"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      dense
                      outlined
                      label="Trip name"
                      v-model="trip.name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      dense
                      outlined
                      label="Location"
                      v-model="trip.location"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      dense
                      outlined
                      label="Destination"
                      v-model="trip.destination"
                    ></v-text-field>
                  </v-col>
                  <v-col>
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
                          label="Departure"
                          prepend-inner-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                          dense
                        ></v-text-field>
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
                  </v-col>
                  <v-col v-if="radioGroup === 'return'">
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
                          label="Return"
                          prepend-inner-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                          dense
                        ></v-text-field>
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
                  </v-col>
                  <v-col class="text-right">
                    <v-btn text class="mr-2"> Cancel </v-btn>
                    <v-btn color="primary" @click="e1 = 2"> next </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" height="600px">
              <v-form> </v-form>
            </v-card>

            <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="600px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      radioGroup: 1,
      trip: {
        name: "",
        location: "",
        destination: "",
      },
      tripOption: [
        {
          id: 1,
          label: "One Way",
          value: "oneWay",
        },
        {
          id: 2,
          label: "Return",
          value: "return",
        },
      ],
      departMenu: false,
      returnMenu: false,
      e1: 1,
      departDate: new Date().toISOString().substr(0, 10),
      returnDate: new Date().toISOString().substr(0, 10),
    };
  },
};
</script>