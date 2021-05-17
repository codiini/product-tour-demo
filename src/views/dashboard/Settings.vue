<template>
  <v-main>
    <v-container>
      <v-tabs class="text-left">
        <v-tab>
          <v-icon left> mdi-account </v-icon>
          General
        </v-tab>
        <v-tab>
          <v-icon left> mdi-lock </v-icon>
          Change Password
        </v-tab>

        <v-tab-item>
          <v-card elevation="0" class="p-2" height="100%">
            <v-form>
              <div class="mt-6">
                <v-avatar color="primary" size="100" rounded>
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"/>
                </v-avatar>
                <v-btn color="primary" elevation="0" small class="text-sm ml-6">
                  Upload
                </v-btn>
              </div>
              <v-row class="pt-10">
                <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    label="First name"
                    dense
                    v-model="firstName"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    label="Last name"
                    dense
                    v-model="lastName"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    label="E-mail"
                    dense
                    v-model="email"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Birth date"
                        readonly
                        outlined
                        v-bind="attrs"
                        dense
                        v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        color="primary"
                        text
                        @click="$refs.menu.save(date)">
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <div class="pt-5 md:pt-10">
                <v-btn color="primary" small elevation="0">Save Changes</v-btn>
                <v-btn color="primary" small class="ml-4" elevation="0">Reset</v-btn>
              </div>
            </v-form>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card elevation="0" class="p-2" height="100%">
            <v-form class="mt-6">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="show1 ? 'text' : 'password'"
                    outlined
                    name="input-10-2"
                    label="Old Password"
                    dense
                    @click:append="show1 = !show1"></v-text-field></v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="show2 ? 'text' : 'password'"
                    outlined
                    name="input-10-2"
                    label="New Password"
                    hint="At least 8 characters"
                    dense
                    @click:append="show2 = !show2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show3 ? 'text' : 'password'"
                    :rules="[rules.required, rules.emailMatch]"
                    outlined
                    name="input-10-2"
                    label="Confirm New Password"
                    hint="At least 8 characters"
                    dense
                    @click:append="show3 = !show3"></v-text-field>
                </v-col>
              </v-row>
              <div class="pt-5 md:pt-10">
                <v-btn color="primary" small elevation="0">Save Changes</v-btn>
                <v-btn color="primary" small class="ml-4" elevation="0">Reset</v-btn>
              </div>
            </v-form>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      firstName:"",
      lastName:"",
      email:"",
      menu: false,
      show1: false,
      show2: true,
      show3: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The password you entered don't match`,
      },
    };
  },
};
</script>

<style>
</style>