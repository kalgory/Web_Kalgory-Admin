import { getToken } from '@/plugins/token';
import router from './router';

const whiteList = ['/signin'];

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken('__session');
  if (hasToken) {
    if (to.path === '/signin') {
      next({ path: '/' });
    } else {
      next();
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next('signin');
  }
});
