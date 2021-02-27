<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col>
        <auth-card />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AuthCard from '@/components/auth/AuthCard.vue';

export default {
  components: {
    AuthCard,
  },
};
</script>
