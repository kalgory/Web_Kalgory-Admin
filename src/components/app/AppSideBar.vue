<template>
  <v-navigation-drawer
    v-model="localDrawer"
    dark
    app
    width="300"
    :clipped="clipped"
    expand-on-hover
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Admin</v-list-item-title>
        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :href="item.path"
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
</template>

<script>
export default {
  name: 'AppSideBar',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      localDrawer: this.value,
      clipped: false,
      items: [
        {
          title: 'Home',
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

  watch: {
    value(newValue) {
      this.localDrawer = newValue;
    },
  },
};
</script>

<style scoped>

</style>
