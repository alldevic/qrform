<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="6"
                    md="4"
            >
                <v-card class="elevation-2 rounded-card" tile>
                    <v-col>
                        <v-toolbar
                                class="flex flex-column"
                                color="primary"
                                dark
                        >
                            <v-toolbar-title class="">Страница контейнера {{id}}</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-toolbar
                                class="flex flex-column"
                                color="primary"
                                dark
                        >
                            <v-subheader>test</v-subheader>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                    </v-col>

                    <v-card-text class="px-6 pt-6 pb-0">
                        <ValidationObserver v-slot="{ passes }">
                            <v-form>
                                <header class="mb-4 text-center">Помогите нам и ответьте на несколько вопросов:</header>
                                <template v-for="question in questions">
                                    <v-list-item-title>{{question.title}}</v-list-item-title>
                                    <v-flex v-for="answer in question.answers">
                                        <v-radio-group v-model="answer.body" row class="justify-center">
                                            <header class="mr-4">{{answer.title}}</header>
                                            <v-radio
                                                    v-for="n in ['Да', 'Нет']"
                                                    :key="n"
                                                    :label="n"
                                                    :value="n"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-flex>
                                </template>
                            </v-form>
                            <div v-if="errors" class="subtitle1 text-center red--text">
                                <p v-for="(errorMessage, i) in errors" :key="i">{{ errorMessage[0] }}</p>
                            </div>
                        </ValidationObserver>
                    </v-card-text>
                    <v-card-actions class="justify-end px-6">
                        <v-btn class="ma-2" tile outlined color="primary" @click="clear">Очистить</v-btn>
                        <v-btn tile color="primary" @click="login">Отправить</v-btn>
                    </v-card-actions>

                    {{questions}}
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapGetters } from "vuex";

export default {
    name: "Login",
    components: {
        ValidationObserver,
        ValidationProvider
    },
    props: {
        source: String,
    },
    data: () => ({
        id: "№8957",
        address: "",
        questions: [
            {
            	title: "Контейнер переполнен?",
                answers: [
                    {
                    	title: "",
                        body: ""
                    },
                ]
            },
            {
            	title: "У контейнера сломана?",
                answers: [
                    {
                    	title: "Крышка",
                        body: ""
                    },
                    {
                    	title: "Педаль",
                        body: ""
                    },
                    {
                    	title: "Корпус",
                        body: ""
                    },
                    {
                    	title: "Колесо",
                        body: ""
                    },
                ]
            },
        ]
    }),
    methods: {
        login() {
            let email = this.email;
            let password = this.password;
            this.$store.dispatch('login', { email, password })
                .then(() => this.$router.push('/profile'))
                .catch(err => console.log(err))
        },
        clear() {
            this.email = '';
            this.password = '';
        }
    },
    computed: {
        ...mapGetters(['errors'])
    },
};
</script>
