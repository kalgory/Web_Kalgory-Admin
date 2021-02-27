import Vue from 'vue';
import App from './App.vue';

import './plugins/firebase';
import './plugins/toasted';
import Store from './store';
import Vuetify from './plugins/vuetify';
import Router from './router';

import '@/permission';

Vue.config.productionTip = false;

new Vue({
  router: Router,
  store: Store,
  vuetify: Vuetify,
  render: (h) => h(App),
}).$mount('#app');
