<template>
  <v-app class="theme--dark">
    <app-bar v-if="$route.meta.isAppbarShow" />
    <v-main>
      <v-progress-linear
        v-if="isAuthLoading"
        indeterminate
      />
      <router-view />
    </v-main>
    <app-footer />
  </v-app>
</template>
<script>
import AppBar from '@/components/app/AppBar.vue';
import AppFooter from '@/components/app/AppFooter.vue';

export default {
  components: {
    AppFooter,
    AppBar,
  },

  computed: {
    isAuthLoading() {
      return this.$store.getters.getIsAuthLoading;
    },
  },
};
</script>
