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

    <bar-menu />
  </v-navigation-drawer>
</template>

<script>
import BarMenu from '@/components/app/bar/BarMenu.vue';

export default {
  name: 'AppSideBar',
  components: { BarMenu },
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
