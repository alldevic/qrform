<template lang="pug">
  //- EcotecMap
  div
    ecotec-map
    v-card(outlined)
      v-card-title Контейнерные площадки
      v-card-text
        v-data-table(
          v-model="selected"
          :headers="headers"
          :items="platforms"
          :expanded.sync="expanded"
          item-key="id"
          show-select
          single-expand
          pointer
          @click:row="getRowValue"
        )
          //- id header column
          template(v-slot:header.id="{ header }")
            v-tooltip(bottom)
              template(v-slot:activator="{ on }")
                v-text-field(
                  hide-details
                  v-on="on"
                  v-model="filters[header.value]"
                  append-icon="search"
                )
                  template(v-slot:label) {{ header.text }}
              span {{ header.text }}

          //- Address header column
          template(v-slot:header.address="{ header }")
            v-tooltip(bottom)
              template(v-slot:activator="{ on }")
                v-text-field(
                  hide-details
                  v-on="on"
                  v-model="filters[header.value]"
                  append-icon="search"
                )
                  template(v-slot:label) {{ header.text }}
              span {{ header.text }}

          //- Lot header column
          template(v-slot:header.lot="{ header }")
            v-tooltip(bottom)
              template(v-slot:activator="{ on }")
                v-text-field(
                  hide-details
                  readonly
                  single-line
                  v-on="on"
                  append-icon="arrow_drop_down"
                )
                  template(v-slot:label) {{ header.text }}
              span {{ header.text }}

          //- Status header column
          template(v-slot:header.status="{ header }")
            v-tooltip(bottom)
              template(v-slot:activator="{ on }")
                //- Tooltip doesn't work with v-select [bug]
                //- Clerable props return undefined [error for filter]
                v-select(
                  :items="statusList"
                  item-text="name"
                  item-value="id"
                  clearable
                  hide-details
                  v-on="on"
                  append-icon="arrow_drop_down"
                )
                  template(v-slot:label) {{ header.text }}
              span {{ header.text }}

          //- Contacts numbers header column
          template(v-slot:header.containersNumbers="{ header }")
            v-tooltip(bottom)
              template(v-slot:activator="{ on }")
                v-text-field(hide-details v-on="on")
                  template(v-slot:label) {{ header.text }}
                  template(v-slot:append)
                    v-chip(small) 123 / 322
              span {{ header.text }}

          //- Volume header column
          template(v-slot:header.volume="{ header }")
            v-tooltip(bottom)
              template(v-slot:activator="{ on }")
                v-text-field(hide-details v-on="on")
                  template(v-slot:label) {{ header.text }}
                  template(v-slot:append)
                    v-chip(small) 123 / 322
              span {{ header.text }}

          //- Volume shipped header column
          template(v-slot:header.volumeShipped="{ header }")
            v-tooltip(bottom)
              template(v-slot:activator="{ on }")
                v-text-field(hide-details v-on="on")
                  template(v-slot:label) {{ header.text }}
                  template(v-slot:append)
                    v-chip(small) 123 / 322
              span {{ header.text }}

          //- Platform row customization
          template(v-slot:item.address="{ item }")
            span {{ item.address }}

          template(v-slot:item.status="{ item }")
            v-chip(:color="getStatusColor(item.status)")
              | {{ statusList[item.status].name }}

          //- Expanded row
          template(v-slot:expanded-item="{ headers, item }")
            td(:colspan="headers.length")
              expanded-content(:itemId="item.id")
</template>

<script lang="ts">
// Imports
import Vue from 'vue';
import axios from 'axios';
import { Platforms, Headers } from 'typings/interface/platforms';
import ExpandedContent from './ExpandedContent.vue';
import EcotecMap from '@/components/EcotecMap.vue';
import { $PLATFORM_STATUS } from '@/constants/constants';

export default Vue.extend({
  components: {
    ExpandedContent,
    EcotecMap,
  },
  data: () => ({
    filters: {},
    expanded: [],
    selected: [],
    headers: [] as Array<Headers>,
    platforms: [] as Array<Platforms>,
    statusList: [
      { id: $PLATFORM_STATUS.shipped, name: 'Отгружено' },
      { id: $PLATFORM_STATUS.atRegistration, name: 'На оформлении' },
      { id: $PLATFORM_STATUS.filled, name: 'Заполнено' },
    ],
  }),
  mounted(): void {
    axios
      .get('http://localhost:3000/platforms')
      .then((response) => {
        this.headers = response.data.headers;
        this.platforms = response.data.items;
      })
      .catch((error) => {
        // console.log(error);
      });
  },
  methods: {
    getStatusColor(status: Number): string {
      switch (status) {
        case $PLATFORM_STATUS.shipped:
          return 'successLight';
        case $PLATFORM_STATUS.atRegistration:
          return 'warningLight';
        case $PLATFORM_STATUS.filled:
          return 'errorLight';
        default:
          return '';
      }
    },
    getRowValue(item: never): void {
      const [expItem] = this.expanded;
      this.expanded = this.expanded.includes(item) ? [] : [item];
    },
  },
});
</script>
