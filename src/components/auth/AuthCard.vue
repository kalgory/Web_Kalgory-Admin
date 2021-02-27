<template>
  <v-card
    width="600"
    class="ma-auto"
  >
    <v-card-title class="justify-center">
      Log in to admin dashboard
    </v-card-title>
    <v-card-text>
      <sign-in-form class="sign-in-form" />
    </v-card-text>
  </v-card>
</template>
<script>
import SignInForm from '@/components/auth/sign-in/SignInForm.vue';

export default {
  name: 'AuthCard',

  components: {
    SignInForm,
  },
};
</script>
