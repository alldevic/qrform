<template lang="pug">
  v-container(fluid class="px-0")
    v-row(no-gutters)
      v-col(cols="6")
        .platform-expanded-info
          v-img.platform-expanded-info__img(
            src="http://dev-auk.kuzro.ru/media/files/jpeg_20191007_141216__8j5gp1P.jpg"
          )
          v-list.platform-expanded-info__list(subheader)
            v-subheader
              h3 Площадка №321
            v-list-item(v-for="(item, i) in items" :key="i")
              v-list-item-avatar(v-if="item.icon")
                v-icon(class="blue white--text" v-text="item.icon")
              v-list-item-content
                v-list-item-title
                  | {{ item.title }}
                v-list-item-subtitle
                  | {{ item.text }}
      v-col(cols="6" class="pl-8")
        .container-expanded-info
          .container-expanded-info__head
            v-subheader
              h3 Контейнер №321
            .container-expanded-info__pagination
              v-btn(
                class="mr-4"
                color="midLight grey--text"
                rounded
                small
              ) Предыдущий
              v-btn(
                class="mr-8"
                color="primary"
                rounded
                small
              ) Следующий
              v-chip(
                color="midLight grey--text"
                rounded
                small
              ) 2/4
          .container-expanded-info__wrapper
            v-img.container-expanded-info__img(
              src="http://dev-auk.kuzro.ru/media/files/jpeg_20191007_141216__8j5gp1P.jpg"
            )
            .container-expanded-info__content
              v-tabs(
                slot="extension"
                v-model="tabs"
                grow
              )
                v-tab Основная информация
                v-tab Отгрузки
                v-tab Данные
                v-tab График
              v-tabs-items(v-model="tabs")
                v-tab-item
                  v-list.container-expanded-info__list
                    v-list-item
                      v-list-item-content
                        v-list-item-title Тип и объём (план. / факт.)
                        v-list-item-subtitle Пластик 1.1 / Металл 0.36
                    v-list-item
                      v-list-item-content
                        v-list-item-title Имя массива
                        v-list-item-subtitle Дворы спартака 14
                    v-list-item
                      v-list-item-content
                        v-list-item-title Имя маршрута
                        v-list-item-subtitle O321AA
                v-tab-item
                  v-list.container-expanded-info__list
                    v-list-item
                      v-list-item-content
                        v-list-item-title Тип и объём (план. / факт.)
                        v-list-item-subtitle Пластик 1.1 / Металл 0.36
                v-tab-item
                  v-list.container-expanded-info__list
                    v-list-item
                      v-list-item-content
                        v-list-item-title Тип и объём (план. / факт.)
                        v-list-item-subtitle Пластик 1.1 / Металл 0.36
                v-tab-item
                  v-list.container-expanded-info__list
                    v-list-item
                      v-list-item-content
                        v-list-item-title Тип и объём (план. / факт.)
                        v-list-item-subtitle Пластик 1.1 / Металл 0.36
            .qrcode__wrapper
              .qrcode__front-block.qrcode__item
                span.qrcode__text Передний QR
                v-img.qrcode__img(
                  src="https://pngimg.com/uploads/qr_code/qr_code_PNG34.png"
                )
              .qrcode__back-block.qrcode__item
                span.qrcode__text Задний QR
                v-img.qrcode__img(
                  src="https://pngimg.com/uploads/qr_code/qr_code_PNG34.png"
                )
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
