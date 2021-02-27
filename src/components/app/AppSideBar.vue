<template>
  <v-navigation-drawer
    v-model="localDrawer"
    v-click-outside="onClickOutside"
    disable-resize-watcher
    dark
    app
    width="300"
    :clipped="clipped"
  >
    <v-list-item>
      <v-img
        lazy-src="../../assets/Logo-Initial-Background-lazy.svg"
        src="../../assets/Logo-Initial-Background.svg"
        max-width="32"
        max-height="32"
        class="mr-5"
      />
      <v-list-item-content>
        <v-list-item-title>Kalgory-admin</v-list-item-title>
        <v-list-item-subtitle>test version</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

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
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppSideBar',

  props: {
    value: {
      type: Boolean,
      default: true,
    },
    isMobile: {
      type: Boolean,
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

  created() {
    console.log(this.$vuetify.breakpoint.name);
  },

  methods: {
    onClickOutside() {
      if (this.isMobile && !this.localDrawer) this.$emit('click-outside');
    },
  },
};
</script>

<style scoped>

</style>
