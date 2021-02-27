import router from '@/router';
import store from '@/store';
import { getCurrentUser } from './plugins/firebase/auth';

router.beforeEach(async (to, from, next) => {
  store.commit('setIsAuthLoading', true);
  const isRequireAuth = to.matched.some((record) => record.meta.isRequireAuth);
  const user = await getCurrentUser();
  if (isRequireAuth && !user) {
    next('signin');
  } else if (user && to.path === '/signin') {
    next('/dashboard');
  } else {
    next();
  }
});
