<template>
  <v-app class="theme--dark">
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
import { isAdminUser } from '@/plugins/firebase/firestore/user';

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
        this.pushAuthSignIn();
        this.isLoading = false;
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
          isAdminUser(user.uid).then((isAdmin) => {
            if (isAdmin) this.$store.commit('setIsAuthenticated', true);
          });
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
