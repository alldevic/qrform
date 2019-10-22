<template lang="pug">
  div
    map
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
                  @click:append="toggle"
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
                  @click:append="toggle"
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
                  @click:append="toggle"
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
import ExpandedContent from '@/components/ExpandedContent.vue';
import Map from '@/components/Map.vue';

export default {
  components: {
    ExpandedContent,
    Map,
  },
  data: () => ({
    filters: {
      // id: '',
      // address: '',
      // status: '',
    },
    expanded: [],
    selected: [],
    headers: [
      {
        text: 'Код',
        value: 'id',
        sortable: false,
      },
      {
        text: 'Адрес',
        value: 'address',
        sortable: false,
      },
      {
        text: 'Лот',
        value: 'lot',
        sortable: false,
      },
      {
        text: 'Статус',
        value: 'status',
        sortable: false,
      },
      {
        text: 'Количество контейнеров',
        value: 'containersNumbers',
        sortable: false,
      },
      {
        text: 'Объём',
        value: 'volume',
        sortable: false,
      },
      {
        text: 'Объём отгруженного с места',
        value: 'volumeShipped',
        sortable: false,
      },
    ],
    platforms: [
      {
        id: 321,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 24',
        lot: '342',
        status: PLATFORM_STATUS.shipped,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 322,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 23',
        lot: '342',
        status: PLATFORM_STATUS.atRegistration,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 323,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 324,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 325,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 326,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 327,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 328,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 329,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 330,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        id: 331,
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        containersNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
    ],
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
    getRowValue(item: never) {
      const [expItem] = this.expanded;
      this.expanded = this.expanded.includes(item) ? [] : [item];
    },
    toggle(value: any) {
      console.log(value);
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
