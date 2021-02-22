// Base
const Base404 = () => import('@/views/Base404');
const BaseDashboard = () => import('@/views/BaseDashboard');
// Auth
const AuthSignIn = () => import('@/views/auth/AuthSignIn');

export default [
  {
    path: '*',
    meta: {
      title: '',
      isAppbarShow: false,
    },
    component: Base404,
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    meta: {
      title: 'Dashboard',
      isAppbarShow: true,
    },
    component: BaseDashboard,
  },
  {
    name: 'sign in',
    path: '/signin',
    meta: {
      title: 'Sign In',
      isAppbarShow: false,
    },
    component: AuthSignIn,
  },
];
