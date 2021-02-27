<template>
  <v-card>
    <v-app-bar
      dark
      app
    >
      <v-app-bar-nav-icon @click="toggleDrawer">
        <v-icon v-if="drawer">
          mdi-menu-left-outline
        </v-icon>
        <v-icon v-else>
          mdi-menu-right-outline
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer />
      <v-btn @click="signOut()">
        Logout
      </v-btn>
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
import { signOut } from '@/plugins/firebase/auth';

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
    signOut() {
      signOut()
        .then(() => {
          this.$toasted.show('로그아웃 완료');
          this.$router.replace('/signin');
        })
        .catch((error) => {
          this.$toasted.show(error.message);
        })
        .finally(() => {
        });
    },
  },
};
</script>
