<template>
  <v-navigation-drawer
    v-model="isExpand"
    disable-resize-watcher
    dark
    app
    width="300"
    :clipped="isClipped"
  >
    <v-list-item>
      <v-img
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

  components: {
    BarMenu,
  },

  props: {
    value: {
      type: Boolean,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    isClipped: false,
  }),

  computed: {
    isExpand: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
