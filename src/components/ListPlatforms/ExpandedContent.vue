<template lang="pug">
  v-container(fluid class="px-0")
    v-row(no-gutters)
      v-col(cols='6')
        v-card(
          flat
          tile
          class="fill-height"
          color="transparent"
        )
          v-row(justify="space-between" no-gutters)
            v-col(cols="6")
              v-img.white--text.align-end(
                src='http://dev-auk.kuzro.ru/media/files/jpeg_20191007_141216__8j5gp1P.jpg'
                height="100%"
                max-height="400px"
              )
            v-col(
              cols="6"
            )
              v-card-title(class="py-0 px-4")
                v-list-item(two-line class="px-0")
                  v-list-item-content
                    v-list-item-title(class="headline mb-1")
                      | Площадка № {{ itemId }}
                  v-chip(small label color="grey lighten-3 grey--text")
                    | 21.10.2019
              v-card-text(class="py-0")
                v-list(
                  two-line
                  disabled
                  color="grey lighten-3"
                  class="pa-0"
                )
                  v-list-item-group(multiple)
                    template(v-for="(item, i) in items")
                      v-list-item(:key="item.title")
                        v-list-item-avatar(v-if="item.icon")
                          v-icon(class="blue white--text" v-text="item.icon")
                        v-list-item-content(class="pa-0")
                          v-list-item-title(class="subtitle-2" v-text="item.title")
                          v-list-item-subtitle(class="subtitle-1" v-text="item.text")
                      v-divider(
                        v-if="i + 1 < items.length"
                        :key="i"
                      )
      v-col(cols='6')
        v-card(
          flat
          tile
          class="fill-height"
          color="transparent"
        )
          v-card-title(class="pa-0")
            v-list-item(two-line class="px-0")
              v-list-item-content
                v-list-item-title(class="headline mb-1")
                  | Контейнер № {{ itemId }}
              div(class="text-center mx-8")
                v-btn(
                  class="elevation-0 text-capitalize mr-4"
                  rounded
                  color="grey lighten-3 grey--text"
                  dark
                  small
                  ) Предыдущий
                v-btn(
                  class="elevation-0 text-capitalize"
                  rounded
                  color="primary"
                  dark
                  small
                ) Следующий
              v-chip(
                small
                rounded
                color="grey lighten-3 grey--text"
              )
                | 2/4
          v-row(justify="space-between" no-gutters style="height: 336px")
            v-col(cols="4")
              v-img.white--text.align-end(
                src='http://dev-auk.kuzro.ru/media/files/jpeg_20191011_124649__QfY5HJA.jpg'
                height="100%"
              )
            v-col(cols="8")
              v-row(justify="space-between" no-gutters)
                v-col(cols="10")
                  v-card-text(class="py-0")
                    v-tabs(
                      slot="extension"
                      v-model="tabs"
                      background-color="transparent"
                      show-arrows
                    )
                      v-tab(
                        v-for="(item, i) in tabItems"
                        :key="i"
                      )
                        | {{ item.title }}
                    v-tabs-items(v-model="tabs")
                      v-tab-item(
                        v-for="(foo, i) in tabItems"
                        :key="i"
                      )
                        v-list(
                          two-line
                          disabled
                          class="pa-0"
                          color="grey lighten-3"
                        )
                          v-list-item-group(multiple)
                            template(v-for="(item, i) in foo.container")
                              v-list-item(:key="item.title")
                                v-list-item-avatar(v-if="item.icon")
                                  v-icon(class="blue white--text" v-text="item.icon")
                                v-list-item-content(class="pa-0")
                                  v-list-item-title(class="subtitle-2" v-text="item.title")
                                  v-list-item-subtitle(class="subtitle-1" v-text="item.text")
                              v-divider(
                                v-if="i + 1 < items.length"
                                :key="i"
                              )
                v-col(cols="2")
                  v-card(
                    flat
                    tile
                    class="fill-height"
                    color="transparent"
                  )
                    div.card__front-qr
                      v-card-title(class="caption py-0 px-2 text-center")
                        | Передний QR
                      v-img(src="http://www.pngmart.com/files/10/Qr-Code-Background-PNG.png" width="100%" contain)
                    div.card__back-qr
                      v-card-title(class="caption py-0 px-2")
                        | Задний QR
                      v-img(src="http://www.pngmart.com/files/10/Qr-Code-Background-PNG.png" width="100%" contain)
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    itemId: {
      type: Number,
      required: true,
    },
  },
  data:() => ({
    tabs: null,
    tabItems: [
      {
        title: 'Основная информация',
        container: [
          { title: 'Тип и объём (план. / факт.)', text: 'Пластик 1.1 / Металл 0.36' },
          { title: 'Имя массива', text: 'Дворы спартака 14' },
          { title: 'Имя маршрута', text: 'O321AA' },
        ],
      },
      {
        title: 'Отгрузки',
        container: [
          { title: 'Тип и объём (план. / факт.)', text: 'Пластик 1.1 / Металл 0.36' },
          { title: 'Имя массива', text: 'Дворы спартака 14' },
          { title: 'Имя маршрута', text: 'O321AA' },
        ],
      },
      {
        title: 'Данные',
        container: [
          { title: 'Тип и объём (план. / факт.)', text: 'Пластик 1.1 / Металл 0.36' },
          { title: 'Имя массива', text: 'Дворы спартака 14' },
          { title: 'Имя маршрута', text: 'O321AA' },
        ],
      },
      {
        title: 'График',
        container: [
          { title: 'Тип и объём (план. / факт.)', text: 'Пластик 1.1 / Металл 0.36' },
          { title: 'Имя массива', text: 'Дворы спартака 14' },
          { title: 'Имя маршрута', text: 'O321AA' },
        ],
      },
    ],
    items: [
      {
        title: 'Вид площадки',
        text: 'На 4 контейнера',
        icon: '',
      },
      { title: 'Покрытие', text: 'Гравий', icon: '' },
      { title: 'Ограждение', text: 'Сетчатое', icon: '' },
      { title: 'Площадка КГО', text: 'Отсутствует', icon: '' },
      { title: 'Комментарий от Николая', text: 'Скоро приедем поменяем на новые! ;-)', icon: 'mdi-forum' },
    ],
  }),
});
</script>
