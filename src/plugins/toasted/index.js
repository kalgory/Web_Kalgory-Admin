import Vue from 'vue';
import Toasted from 'vue-toasted';

const Options = {
  singleton: true,
  duration: 5000,
  keepOnHover: true,
  theme: 'outline',
  position: 'top-center',
  iconPack: 'mdi',
};

Vue.use(Toasted, Options);
