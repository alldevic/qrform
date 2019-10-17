<template lang="pug">
  v-card(outlined)
    v-card-title Контейнерные площадки
    v-card-text
      v-data-table(
        v-model="selected"
        :headers="headers"
        :items="platforms"
        item-key="code"
        show-select
      )
        template(v-slot:header.code="{ header }")
          v-text-field
            template(v-slot:label)
              | {{ header.text }}
            template(v-slot:append)
              v-icon.material-icons search

        template(v-slot:header.address="{ header }")
          v-text-field
            template(v-slot:label)
              | {{ header.text }}
            template(v-slot:append)
              v-icon.material-icons search

        template(v-slot:header.lot="{ header }")
          v-text-field
            template(v-slot:label)
              | {{ header.text }}
            template(v-slot:append)
              v-icon.material-icons arrow_drop_down

        template(v-slot:header.status="{ header }")
          v-text-field
            template(v-slot:label)
              | {{ header.text }}
            template(v-slot:append)
              v-icon.material-icons arrow_drop_down

        template(v-slot:header.contactsNumbers="{ header }")
          v-text-field
            template(v-slot:label)
              | {{ header.text }}
            template(v-slot:append)
              span 123 / 322

        template(v-slot:header.volume="{ header }")
          v-text-field
            template(v-slot:label)
              | {{ header.text }}
            template(v-slot:append)
              span 123 / 322

        template(v-slot:header.volumeShipped="{ header }")
          v-text-field
            template(v-slot:label)
              | {{ header.text }}
            template(v-slot:append)
              span 123 / 322

        template(v-slot:item="{ item }")
          tr
            td.text-start
              v-checkbox(
                v-model="selected"
                :value="item"
                color="primary"
              )
            td.text-start
              span {{ item.code }}
            td.text-start.short-row
              span {{ item.address }}
            td.text-start
              span {{ item.lot }}
            td.text-start
              span {{ item.status }}
            td.text-start
              span {{ item.contactsNumbers }}
            td.text-start
              span {{ item.volume }}
            td.text-start
              span {{ item.volumeShipped }}
</template>

<script lang="ts">
export default {
  data: () => ({
    selected: [],
    headers: [
      { text: 'Код', value: 'code', sortable: false },
      {
        text: 'Адрес',
        value: 'address',
        class: 'short-row',
        sortable: false,
      },
      { text: 'Лот', value: 'lot', sortable: false },
      { text: 'Статус', value: 'status', sortable: false },
      { text: 'Количество контактов', value: 'contactsNumbers', sortable: false },
      { text: 'Объём', value: 'volume', sortable: false },
      { text: 'Объём отгруженного с места', value: 'volumeShipped', sortable: false },
    ],
    platforms: [
      {
        code: '321',
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 23',
        lot: '342',
        status: 'Отгружено',
        contactsNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
      {
        code: '322',
        address: 'Россия, Кемеровская область, Мыски, ул.Советская 23',
        lot: '342',
        status: 'Отгружено',
        contactsNumbers: '34532',
        volume: '300',
        volumeShipped: '450',
      },
    ],
  }),
};
</script>
