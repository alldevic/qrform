<template lang="pug">
  v-app
    app-header

    v-content(class="pt-5 pb-10")
      router-view
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from '@/components/AppHeader.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
  },
  data: () => ({
    //
  }),
});
</script>

<style src="@/styles/index.scss" lang="scss"></style>
