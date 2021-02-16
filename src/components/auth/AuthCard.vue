<template>
  <v-card class="theme--light">
    <v-card-title class="justify-center">
      Log in to admin dashboard
    </v-card-title>
    <v-card-text>
      <sign-in-form class="sign-in-form" />
    </v-card-text>
  </v-card>
</template>
<script>
import SignInForm from '@/components/sign-in/SignInForm.vue';

export default {
  name: 'AuthCard',
  components: {
    SignInForm,
  },
};
</script>
