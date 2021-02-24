<template>
  <v-card>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <app-side-bar
      :value="drawer"
    />
  </v-card>
</template>

<script>
import AppSideBar from '@/components/app/AppSideBar.vue';

export default {
  name: 'AppBar',

  components: {
    AppSideBar,
  },

  data: () => ({
    drawer: false,
  }),

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
