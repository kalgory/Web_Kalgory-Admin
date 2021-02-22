<template>
  <v-card>
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      width="300"
      :clipped="clipped"
      expand-on-hover
    >
      <template #prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    drawer: true,
    clipped: false,
    item: {
      title: 'Home',
      icon: 'mdi-check',
    },
  }),
};
</script>
