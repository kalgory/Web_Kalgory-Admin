// Base
const Home = () => import('@/views/Home');

// Auth
const AuthSignIn = () => import('@/views/auth/AuthSignIn');

export default [
  {
    path: '*',
    component: Home,
  },
  {
    name: 'sign in',
    path: '/signin',
    component: AuthSignIn,
  },
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
];
