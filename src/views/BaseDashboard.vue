<template>
  <v-container>
    <h1>content</h1>
    <v-btn @click="signOut">
      Logout
    </v-btn>
  </v-container>
</template>

<script>
import { signOut } from '@/plugins/firebase/auth';
import { removeToken } from '@/plugins/token';

export default {
  name: 'BaseDashboard',
  data: () => ({
  }),
  methods: {
    signOut() {
      signOut()
        .then(() => {
          removeToken();
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
