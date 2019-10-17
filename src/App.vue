<template lang="pug">
  v-app
    v-content(class="pt-5 pb-10")
      router-view
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
});
</script>

<style src="@/styles/main.scss" lang="scss"></style>
