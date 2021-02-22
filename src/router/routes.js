// Base
const Base404 = () => import('@/views/Base404');
// Auth
const AuthSignIn = () => import('@/views/auth/AuthSignIn');

export default [
  {
    path: '*',
    meta: {
      title: '',
    },
    component: Base404,
  },
  {
    name: 'sign in',
    path: '/signin',
    meta: {
      title: 'Sign In',
    },
    component: AuthSignIn,
  },
];
