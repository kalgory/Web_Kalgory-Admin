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

Vue.toasted.register('error', (payload) => {
  if (!payload.message) {
    return '특정되지 않은 오류임';
  }
  return payload.message;
}, {
  type: 'error',
  icon: 'mdi-alert-circle-outline',
});
