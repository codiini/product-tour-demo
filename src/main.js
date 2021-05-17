import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vuetify from './plugins/vuetify';
import VueTour from 'vue-tour';
import 'vue-tour/dist/vue-tour.css';

Vue.use(VueTour);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
