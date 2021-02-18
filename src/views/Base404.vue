<template>
  <v-container class="fill-height">
    <v-row
      justify="center"
      class="text-center"
    >
      <v-col>
        <p class="text-h1">
          404
        </p>
        <p>
          Please check that the URL you entered is correct
          , or click the button below to return to the homepage
        </p>
        <div>
          <v-btn href="/">
            Back to Home
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Base404',
};
</script>
