<template lang="pug">
  v-card(outlined)
    v-card-title Контейнерные площадки
    v-card-text
      v-data-table.customize-table(
        v-model="selected"
        :headers="headers"
        :items="filteredPlatforms"
        item-key="code"
        show-select
      )
        //- Code header column
        template(v-slot:header.code="{ header }")
          v-tooltip(bottom)
            template(v-slot:activator="{ on }")
              v-text-field(hide-details v-on="on" v-model="filters[header.value]")
                template(v-slot:label) {{ header.text }}
                template(v-slot:append)
                  v-icon.material-icons search
            span {{ header.text }}

        //- Address header column
        template(v-slot:header.address="{ header }")
          v-tooltip(bottom)
            template(v-slot:activator="{ on }")
              v-text-field(hide-details v-on="on" v-model="filters[header.value]")
                template(v-slot:label) {{ header.text }}
                template(v-slot:append)
                  v-icon.material-icons search
            span {{ header.text }}

        //- Lot header column
        template(v-slot:header.lot="{ header }")
          v-tooltip(bottom)
            template(v-slot:activator="{ on }")
              v-text-field(
                hide-details
                v-on="on"
                v-model="filters[header.value]"
              )
                template(v-slot:label) {{ header.text }}
                template(v-slot:append)
                  v-icon.material-icons arrow_drop_down
            span {{ header.text }}

        //- Status header column
        template(v-slot:header.status="{ header }")
          v-tooltip(bottom)
            template(v-slot:activator="{ on }")
              v-select(
                :items="statusName"
                clearable
                hide-details
                v-on="on"
              )
                template(v-slot:label) {{ header.text }}
                template(v-slot:append)
                  v-icon.material-icons arrow_drop_down
            span {{ header.text }}

        //- Contacts numbers header column
        template(v-slot:header.contactsNumbers="{ header }")
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

        //- Platform row
        template(v-slot:item="{ item }")
          tr
            td.text-start
              v-checkbox(
                v-model="selected"
                :value="item"
                color="primary"
                hide-details
              )
            td.text-start.short-row
              span {{ item.code }}
            td.text-start.middle-row
              span {{ item.address }}
            td.text-start.short-row
              span {{ item.lot }}
            td.text-start.short-row
              v-chip(:color="getStatusColor(item.status)")
                | {{ statusName[item.status] }}
            td.text-start.long-row
              span {{ item.contactsNumbers }}
            td.text-start.middle-row
              span {{ item.volume }}
            td.text-start.long-row
              span {{ item.volumeShipped }}
</template>

<script lang="ts">
// Import constants
import PLATFORM_STATUS from '../../constants/constants';

export default {
  data: () => ({
    filters: {
      code: '',
      address: '',
      lot: '',
    },
    selected: [],
    headers: [
      {
        text: 'Код',
        value: 'code',
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
        text: 'Количество контактов',
        value: 'contactsNumbers',
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
        code: '321',
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 24',
        lot: '342',
        status: PLATFORM_STATUS.shipped,
        contactsNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        code: '322',
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 23',
        lot: '342',
        status: PLATFORM_STATUS.atRegistration,
        contactsNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        code: '323',
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 25',
        lot: '342',
        status: PLATFORM_STATUS.filled,
        contactsNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
    ],
    statusName: [
      'Отгружено',
      'На оформлении',
      'Заполнено',
    ],
  }),
  computed: {
    filteredPlatforms() {
      return this.platforms.filter(d => {
        return Object.keys(this.filters).every(f => {
          return this.filters[f].length < 1 || d[f].includes(this.filters[f]);
        });
      });
    },
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
  },
};
</script>
