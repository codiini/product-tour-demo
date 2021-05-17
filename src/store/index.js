import Vue from "vue";
import Vuex from "vuex";
import popularplaces from "./popularplaces";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    popularplaces: popularplaces,
  },
  mutations: {},
  actions: {},
});
