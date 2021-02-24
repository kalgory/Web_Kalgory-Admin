<template>
  <v-app>
    <app-bar v-if="$route.meta.isAppbarShow" />
    <v-main>
      <v-progress-linear
        v-if="isLoading"
        indeterminate
      />
      <router-view v-else />
    </v-main>
  </v-app>
</template>
<script>
import AppBar from '@/components/app/AppBar.vue';
import { onAuthStateChanged } from '@/plugins/firebase/auth';

export default {
  components: {
    AppBar,
  },

  data: () => ({
    isLoading: true,
  }),

  computed: {
    isAuthLoading() {
      return this.$store.getters.getIsAuthLoading;
    },
    isAuthenticated() {
      return this.$store.getters.getIsAuthenticated;
    },
  },

  watch: {
    isAuthLoading(value) {
      console.log('isAuthLoading is changed to', value);
      if (value) {
        this.isLoading = true;
      } else if (this.isAuthenticated) {
        if (this.$route.meta.title === 'Sign In') {
          this.$router.push('dashboard');
        }
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.pushAuthSignIn();
      }
    },
    isAuthenticated(value) {
      console.log('isAuthenticated is changed to', value);
      if (!value) {
        this.pushAuthSignIn();
      }
    },
  },

  created() {
    this.onAuthStateChanged();
  },

  methods: {
    pushAuthSignIn() {
      if (this.$route.path !== '/signin') {
        this.$router.push('/signin');
      }
    },
    onAuthStateChanged() {
      this.$store.commit('setIsAuthLoading', true);
      onAuthStateChanged((user) => {
        this.$store.commit('setIsAuthLoading', false);
        if (user) {
          this.$store.commit('setIsAuthenticated', true);
          this.$store.commit('setUser', user);
        } else {
          this.$store.commit('setIsAuthenticated', false);
          this.$store.commit('setUser', {});
        }
      });
    },
  },
};
</script>
