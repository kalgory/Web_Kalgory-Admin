<template>
  <v-app>
    <app-bar v-if="$route.meta.isAppbarShow" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import AppBar from '@/components/app/AppBar.vue';
import { getToken } from '@/plugins/token';

export default {
  components: { AppBar },
  data: () => ({
    isAuth: getToken(),
  }),
  computed: {

  },
  created() {
  },
};
</script>
