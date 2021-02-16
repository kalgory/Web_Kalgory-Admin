import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignIn from '../views/auth/AuthSignIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
