// Base
const Base404 = () => import('@/views/Base404');
const BaseDashboard = () => import('@/views/BaseDashboard');
const BaseSignIn = () => import('@/views/BaseSignIn');
const BaseUser = () => import('@/views/BaseUser');
const BaseConcept = () => import('@/views/BaseConcept');
const BaseProblem = () => import('@/views/BaseProblem');
const BaseCommunity = () => import('@/views/BaseCommunity');

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
      isRequireAuth: true,
    },
    component: BaseDashboard,
  },
  {
    name: 'user',
    path: '/user',
    meta: {
      title: 'User',
      isAppbarShow: true,
      isRequireAuth: true,
    },
    component: BaseUser,
  },
  {
    name: 'Concept',
    path: '/concept',
    meta: {
      title: 'Concept',
      isAppbarShow: true,
      isRequireAuth: true,
    },
    component: BaseConcept,
  },
  {
    name: 'Problem',
    path: '/problem',
    meta: {
      title: 'Problem',
      isAppbarShow: true,
      isRequireAuth: true,
    },
    component: BaseProblem,
  },
  {
    name: 'Community',
    path: '/community',
    meta: {
      title: 'Community',
      isAppbarShow: true,
      isRequireAuth: true,
    },
    component: BaseCommunity,
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
