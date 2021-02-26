<template>
  <v-app class="theme--dark">
    <app-bar v-if="$route.meta.isAppbarShow" />
    <v-main>
      <v-progress-linear
        v-if="isLoading"
        indeterminate
      />
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import AppBar from '@/components/app/AppBar.vue';

export default {
  components: {
    AppBar,
  },

  computed: {
    isLoading() {
      return this.$store.getters.getIsAuthLoading;
    },
  },
};
</script>
