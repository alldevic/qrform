<template lang="pug">
  div
    ymap
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
// Import constants
import PLATFORM_STATUS from '@/constants/constants';
// Import components
import ExpandedContent from '@/components/ExpandedContent.vue';
// Import data
import dataHeaders from './data/headers.json';
import dataPlatforms from './data/platforms.json';

export default {
  components: {
    ExpandedContent,
  },
  data: () => ({
    filters: {
      // id: '',
      // address: '',
      // status: '',
    },
    expanded: [],
    selected: [],
    headers: dataHeaders,
    platforms: dataPlatforms,
    statusList: [
      { id: PLATFORM_STATUS.shipped, name: 'Отгружено' },
      { id: PLATFORM_STATUS.atRegistration, name: 'На оформлении' },
      { id: PLATFORM_STATUS.filled, name: 'Заполнено' },
    ],
  }),
  computed: {
  // filteredPlatforms() {
    // return this.platforms.filter(function(platform) {
    //   return Object.keys(self.filters).every(function(prop) {
    //     if (hasKey(self.filters, prop)) {
    //       // Depricated
    //       return self.filters[prop].length < 1 || platform[prop].includes(self.filters[prop]);
    //     }
    //   });
    // });
  // },
  },
  methods: {
    getStatusColor(status: Number) {
      switch (status) {
        case PLATFORM_STATUS.shipped:
          return 'successLight';
        case PLATFORM_STATUS.atRegistration:
          return 'warningLight';
        case PLATFORM_STATUS.filled:
          return 'errorLight';
        default:
          return null;
      }
    },
    getRowValue(item: Object) {
      const [expItem] = this.expanded;
      this.expanded = this.expanded.includes(item) ? [] : [item];
    },
  },
  // prepareFilters() {
  //   const preparedFilters = {} as Object;
  //   Object.entries(this.filters).forEach((key, value) => {
  //     if (value) {
  //       preparedFilters[key] = value;
  //     }
  //   });
  // },
};
</script>
