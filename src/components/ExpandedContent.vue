<template lang="pug">
  span {{ itemId }}
</template>

<script lang="ts">
export default {
  props: {
    itemId: {
      type: Number,
      required: true,
    },
  },
  data:() => ({}),
};
</script>
