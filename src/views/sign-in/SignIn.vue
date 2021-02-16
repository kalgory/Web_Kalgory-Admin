<template>
  <v-app class="theme--dark">
    <v-main>
      <v-container
        class="fill-height"
      >
        <v-row>
          <v-col />
          <v-col
            :cols="6"
          >
            <v-card
              class="theme--light"
            >
              <v-card-title class="justify-center">
                Log in to admin dashboard
              </v-card-title>
              <v-card-text>
                <sign-in-form class="sign-in-form" />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col />
        </v-row>
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
