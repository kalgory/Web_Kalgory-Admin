// Base
const Base404 = () => import('@/views/Base404');
const BaseDashboard = () => import('@/views/BaseDashboard');
const BaseSignIn = () => import('@/views/BaseSignIn');

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
    path: '/',
    redirect: '/signin',
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
    component: BaseSignIn,
  },
];
