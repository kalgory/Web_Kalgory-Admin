import router from './router';
import store from './store';

const whiteList = ['/signin'];

router.beforeEach(async (to, from, next) => {
  const user = store.getters.getUser;

  if (user) {
    if (to.path === 'signin') {
      next({ path: '/' });
    } else {
      next();
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next('/signin');
  }
});
