<template lang="pug">
  yandex-map#map(
    :settings="mapSettings"
    :coords="[53.7532778, 87.1144386]"
  )
</template>

<script lang="ts">
// Import
import Vue from 'vue';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default Vue.extend({
  components: {
    yandexMap,
    ymapMarker,
  },
  data:() => ({
    mapSettings: {
      apiKey: '52a7b0c7-e889-4f69-930f-1c78aacede59',
      lang: 'ru_RU',
      coordorder: 'latlong',
      version: '2.1',
    },
  }),
});
</script>

<style lang="scss" scoped>
#map {
  height: 400px;
}
</style>
