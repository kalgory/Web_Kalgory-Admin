import Vue from 'vue';
import VueRouter from 'vue-router';

import Firebase from 'firebase/app';
import Routes from '@/router/routes';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

router.beforeEach(async (to, from, next) => {
  store.commit('setIsAuthLoading', true);
  const isRequireAuth = to.matched.some((record) => record.meta.isRequireAuth);
  const user = await Firebase.getCurrentUser();
  if (isRequireAuth && !user) {
    next('signin');
  } else if (user && to.path === '/signin') {
    next('/dashboard');
  } else {
    next();
  }
});
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  document.title = `${to.meta.title} - Kalgory Admin`;
  store.commit('setIsAuthLoading', false);
});

export default router;
