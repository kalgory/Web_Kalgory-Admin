<template>
  <v-card>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer">
        <v-icon v-if="drawer">
          mdi-menu-left-outline
        </v-icon>
        <v-icon v-else>
          mdi-menu-right-outline
        </v-icon>
      </v-app-bar-nav-icon>
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
    drawer: true,
  }),

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
