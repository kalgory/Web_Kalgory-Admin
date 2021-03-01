<template>
  <v-card>
    <v-app-bar
      dark
      app
    >
      <v-app-bar-nav-icon
        @click="isExpand = !isExpand"
      >
        <v-icon>
          {{ expandIcon }}
        </v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>Kalgory Admin</v-app-bar-title>
      <v-spacer />
      <v-btn @click="signOut()">
        Logout
      </v-btn>
    </v-app-bar>
    <app-navigation-drawer v-model="isExpand" />
  </v-card>
</template>

<script>
import AppNavigationDrawer from '@/components/app/AppNavigationDrawer.vue';
import { signOut } from '@/plugins/firebase/auth';

export default {
  name: 'AppBar',

  components: {
    AppNavigationDrawer,
  },

  data: () => ({
    isExpand: true,
  }),

  computed: {
    expandIcon() {
      if (this.isExpand) {
        return 'mdi-menu-left-outline';
      }
      return 'mdi-menu-right-outline';
    },
  },

  methods: {
    signOut() {
      this.$store.commit('setIsAuthLoading', true);
      signOut()
        .then(() => {
          this.$toasted.global.success({ message: '로그아웃 완료' });
          this.$router.push('/signin');
        })
        .catch((error) => {
          this.$toasted.global.error({ message: error.message });
        })
        .finally(() => {
          this.$store.commit('setIsAuthLoading', false);
        });
    },
  },
};
</script>
