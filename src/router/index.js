import Vue from 'vue';
import VueRouter from 'vue-router';

import Routes from '@/router/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  document.title = `${to.meta.title} - Kalgory Admin`;
});

export default router;
