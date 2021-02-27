<template>
  <v-list dense>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      :to="item.path"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'AppMenu',

  data() {
    return {
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-home-variant',
          path: '/dashboard',
        },
        {
          title: 'User',
          icon: 'mdi-account',
          path: '/user',
        },
        {
          title: 'Concept',
          icon: 'mdi-head-dots-horizontal-outline',
          path: '/concept',
        },
        {
          title: 'Community',
          icon: 'mdi-account-group',
          path: 'community',
        },
        {
          title: 'Problem',
          icon: 'mdi-book-open-outline',
          path: 'problem',
        },
      ],
    };
  },
};
</script>
