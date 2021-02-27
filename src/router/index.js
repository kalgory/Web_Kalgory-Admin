import Vue from 'vue';
import VueRouter from 'vue-router';

import Routes from '@/router/routes';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  document.title = `${to.meta.title} - Kalgory Admin`;
  store.commit('setIsAuthLoading', false);
});

export default router;
