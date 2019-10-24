<template lang="pug">
  span {{ itemId }}
</template>

<script lang="ts">
// Import
import Vue from 'vue';

export default Vue.extend({
  props: {
    itemId: {
      type: Number,
      required: true,
    },
  },
  data:() => ({}),
});
</script>
