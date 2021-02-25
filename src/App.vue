<template>
  <v-app class="theme--dark">
    <app-bar v-if="$route.meta.isAppbarShow" />
    <v-main>
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

  data: () => ({
    isLoading: true,
  }),

  created() {
  },

  methods: {
  },
};
</script>
