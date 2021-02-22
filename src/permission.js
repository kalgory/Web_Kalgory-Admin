import { getToken, removeToken } from '@/plugins/token';
import Firebase from 'firebase/app';
import router from './router';

const whiteList = ['/signin'];

router.beforeEach(async (to, from, next) => {
  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken(false)
        .then((token) => {
          if (token === getToken()) {
            if (to.path === '/signin') {
              next({ path: '/dashboard' });
            } else {
              next();
            }
          } else if (whiteList.indexOf(to.path) !== -1) {
            next();
          } else {
            alert('다시 로그인해주세요');
            removeToken();
            next('/signin');
          }
        })
        .catch((error) => {
          this.$toasted.global.error({ message: error.message });
          removeToken();
          next('/signin');
        });
    } else if (whiteList.indexOf(to.path) !== -1) {
      // 정상
      next();
    } else {
      next('/signin');
    }
  });
  // console.log(hasToken);
  // if (hasToken === getToken) {
  //   if (to.path === '/signin') {
  //     next({ path: '/dashboard' });
  //   } else {
  //     next();
  //   }
  // } else if (whiteList.indexOf(to.path) !== -1) {
  //   next();
  // } else {
  //   next('/signin');
  // }
});
