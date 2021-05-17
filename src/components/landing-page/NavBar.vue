<template>
  <div class="navbar">
    <div class="navbar_logo">
      <img
        src="https://res.cloudinary.com/codiini/image/upload/v1616765127/tripma-blue_mausgl.svg"
        alt="Tripma Logo"
      />
    </div>
      <div class="md:hidden cursor-pointer">
        <img src="../../assets/menu.svg" alt="Hamburger menu"/>
      </div>
    <div class="navbar_links hidden md:flex hidden">
      <ul class="navbar_link_group flex items-center">
        <li class="navbar_link"><a href="#">Flights</a></li>
        <li class="navbar_link"><a href="#">Hotels</a></li>
        <li class="navbar_link"><a href="#">Packages</a></li>
        <li class="navbar_link">
         <router-link :to="'/dashboard/main'">Sign in</router-link>
        </li>
        <li class="navbar_link">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                elevation="0"
                color="#605DEC"
                class="white--text sign-up-btn"
                v-bind="attrs"
                v-on="on"
                >Sign up</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Sign up for Tripma</span>
              </v-card-title>
              <v-card-subtitle class="mt-3 w-9/12">
                Tripma is totally free to use. Sign up using your email address
                or phone number below to get started.
              </v-card-subtitle>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Email or Phone Number"
                        required
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        label="Password"
                        outlined
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-checkbox v-model="termsCheckbox">
                        <template v-slot:label>
                          <div>
                            I agree to the
                            <a target="_blank" href="#" @click.stop>
                              Terms and Conditions
                            </a>
                          </div>
                        </template>
                      </v-checkbox>
                      <v-checkbox v-model="dealsCheckbox">
                        <template v-slot:label>
                          <div>Send me the latest deals and alerts</div>
                        </template>
                      </v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-btn
                        elevation="0"
                        color="#605DEC"
                        class="white--text w-full"
                        >Create account</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </li>
      </ul>
    </div>
    <!-- nav bar on smalll screen sizes -->
    <!-- <div class="small_nav-bar">
      <div class="md:hidden cursor-pointer">
        <img src="../../assets/menu.svg" alt="Hamburger menu" v-on:click="navMenu"/>
      </div>
      <div class="navbar_links">
        <ul class="navbar_link_group flex flex-col items-center">
          <li class="navbar_link"><a href="#">Flights</a></li>
          <li class="navbar_link"><a href="#">Hotels</a></li>
          <li class="navbar_link"><a href="#">Packages</a></li>
          <li class="navbar_link">
            <a href="#" elevation="0">Sign in</a>
          </li>
          <li class="navbar_link">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  elevation="0"
                  color="#605DEC"
                  class="white--text sign-up-btn"
                  v-bind="attrs"
                  v-on="on"
                  >Sign up</v-btn
                >
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Sign up for Tripma</span>
                </v-card-title>
                <v-card-subtitle class="mt-3 w-9/12">
                  Tripma is totally free to use. Sign up using your email
                  address or phone number below to get started.
                </v-card-subtitle>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Email or Phone Number"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          label="Password"
                          outlined
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-checkbox v-model="termsCheckbox">
                          <template v-slot:label>
                            <div>
                              I agree to the
                              <a target="_blank" href="#" @click.stop>
                                Terms and Conditions
                              </a>
                            </div>
                          </template>
                        </v-checkbox>
                        <v-checkbox v-model="dealsCheckbox">
                          <template v-slot:label>
                            <div>Send me the latest deals and alerts</div>
                          </template>
                        </v-checkbox>
                      </v-col>
                      <v-col cols="12">
                        <v-btn
                          elevation="0"
                          color="#605DEC"
                          class="white--text w-full"
                          >Create account</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      termsCheckbox: false,
      dealsCheckbox: false,
      navBars: true,
    };
  },
  methods: {
    navMenu: function() {
      console.log(this.navBars)
      this.navBars = !this.navBars
    },
  },
};
</script>

<style scoped>
.v-application a {
  color: #605dec;
}
.sign-up-btn {
  text-transform: none;
  border-radius: 4px;
  width: 95px;
  height: 48px;
}
.navbar {
  height: 96px;
}
.navbar,
.navbar_link_group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
}
.navbar_link {
  margin: 0 16px;
}
@media screen and (max-width: 767px) {
  .small_nav-bar {
    display: flex;
    flex-direction: column;
    /* margin-top: 00px; */
  }
}
</style>