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
      :is-mobile="isMobile"
      @click-outside="closeDrawer()"
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
    isDrawer: true,
  }),

  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 600;
        case 'sm': return 960;
        case 'md': return 1264;
        case 'lg': return 1904;
        default: return Number.MAX_SAFE_INTEGER;
      }
    },
    isMobile() {
      return this.$vuetify.breakpoint.width < this.width;
    },
    drawer() {
      return this.isDrawer;
    },
  },

  methods: {
    toggleDrawer() {
      this.isDrawer = !this.isDrawer;
    },
    closeDrawer() {
      if (this.isMobile && this.isDrawer) {
        this.isDrawer = !this.isDrawer;
      }
    },
  },
};
</script>
