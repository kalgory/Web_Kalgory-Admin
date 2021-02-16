<template>
  <v-app class="theme--dark">
    <v-main>
      <v-container
        class="fill-height"
      >
        <v-layout class="align-center">
          <v-flex class="login-form">
            <v-card
              class="theme--light mx-auto"
              max-width="600"
            >
              <v-card-title class="justify-center">
                Log in to admin dashboard
              </v-card-title>
              <v-card-text>
                <sign-in-form class="sign-in-form" />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import SignInForm from '@/components/sign-in/SignInForm.vue';

export default {
  components: {
    SignInForm,
  },
};
</script>
