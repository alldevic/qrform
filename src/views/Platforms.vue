<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="6" md="4">
                <v-card class="elevation-2 rounded-card" tile>
                    <v-col class="pa-0">
                        <v-list-item three-line class="flex-column px-6">
                            <v-img
                                class="mt-8"
                                src="../../public/logo_ecotec.png"
                                max-height="125"
                                contain
                                alt="Ecotec logo"
                            ></v-img>
                            <v-list-item-content>
                                <v-list-item-title
                                    class="headline my-6 text-center font-weight-light"
                                >Страница контейнера</v-list-item-title>
                                <v-list-item-subtitle
                                    class="font-weight-light"
                                >Контейнек расположен по адресу г. Новокузнецк ул. Кирова, 33</v-list-item-subtitle>
                                <v-list-item-subtitle
                                    class="font-weight-light"
                                >Последний раз контейнер вывозился 03 часа назад</v-list-item-subtitle>
                                <v-list-item-subtitle
                                    class="font-weight-light"
                                >Контейнер принадлежит ООО Экотек</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    <ValidationObserver v-slot="{ passes }">
                        <v-card-text class="px-6 pb-0">
                            <v-form>
                                <header
                                    class="mb-4 font-weight-light"
                                    style="font-size: 16px"
                                >Помогите нам и ответьте на несколько вопросов:</header>
                                <div v-for="question in currentChecklist.questions" :key="question.id">
                                    <v-list-item-title>
                                        <span>{{ question.title }}</span>
                                    </v-list-item-title>
                                    <v-flex
                                        v-for="answer in question.answers"
                                        :key="answer.id"
                                        class="mx-auto"
                                        style="width: 70%"
                                    >
                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                            <v-radio-group
                                                v-model="answer.body"
                                                row
                                                class="justify-end"
                                            >
                                                <header class="mr-4">{{ answer.title }}</header>
                                                <v-radio
                                                    v-for="n in ['Да', 'Нет']"
                                                    :key="n"
                                                    :label="n"
                                                    :value="n"
                                                ></v-radio>
                                            </v-radio-group>
                                            <v-list-item-content
                                                v-for="(error, i) in errors"
                                                :key="i"
                                            >
                                                <v-list-item-subtitle
                                                    class="font-weight-light text-center red--text"
                                                >{{error}}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </ValidationProvider>
                                    </v-flex>
                                </div>
                            </v-form>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions class="justify-end px-6">
                            <v-btn class="ma-2" tile outlined color="primary">Очистить</v-btn>
                            <v-btn tile color="primary" @click="passes(onSubmit)">Отправить</v-btn>
                        </v-card-actions>
                    </ValidationObserver>
                    {{currentChecklist}}
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import types from '../store/types.js';

export default {
    name: "Platform",
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data: () => ({})
};
</script>
