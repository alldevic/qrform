<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card class="" outlined>
                    <v-data-table
                        class="fb-table-elem"
                        v-model="selected"
                        :headers="headers"
                        :items="platforms"
                        :items-per-page="10"
                        hide-default-footer
                        item-key="id"
                        show-expand
                        single-expand
                        show-select
                    >
                        <!--
                            <template v-slot:header="{ props: { headers } }">
                                <thead>
                                    <tr>
                                        <th v-for="item in headers" :key="item.name">
                                            <template v-if="item.value === 'data-table-select'">
                                                <v-checkbox class="ma-0"
                                                    v-model="item.selected"
                                                    primary
                                                    hide-details
                                                ></v-checkbox>
                                            </template>
                                            <template v-if="item.value === 'data-table-expand'">
                                                <div></div>
                                            </template>
                                            <template v-else-if="item.type === 'input'">
                                                {{ item.text }}
                                            </template>
                                        </th>
                                    </tr>
                                </thead>
                            </template>
                         -->
                        
                            <template v-slot:body="{ items }">
                                <tbody>
                                    <tr v-for="item in items" :key="item.name" @click="props.expanded = !props.expanded">
                                        <td>
                                            <v-checkbox class="ma-0"
                                            v-model="item.selected"
                                            primary
                                            hide-details
                                            ></v-checkbox>
                                        </td>
                                        <td>{{ item.name }}</td>
                                        <td class="text-xs-right">{{ item.calories }}</td>
                                        <td class="text-xs-right">{{ item.fat }}</td>
                                        <td class="text-xs-right">{{ item.carbs }}</td>
                                        <td class="text-xs-right">{{ item.protein }}</td>
                                        <td class="text-xs-right">{{ item.iron }}</td>
                                        <td class="text-xs-right">{{ item.iron }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        

                        <!--
                            <template v-slot:item.data-table-expand="{ item, isExpanded, expand }">
                                <v-btn @click="expand(true)" v-if="!isExpanded">Expand</v-btn>
                                <v-btn @click="expand(false)" v-if="isExpanded">Close</v-btn>
                            </template>
                         -->

                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length" class="pa-0">
                                <v-card tile class="elevation-0">
                                    <v-row justify="start">
                                        <v-col cols="auto" class="pa-0 mr-6">
                                            <v-img
                                                min-height="200px"
                                                max-height="400px"
                                                height="100%"
                                                max-width="600px"
                                                :src="item.photo ? 'http://dev-auk.kuzro.ru' + item.photo: 'nophoto.png'"
                                                contain
                                            ></v-img>
                                        </v-col>

                                        <v-col cols="auto" class="pa-0">
                                            <v-row
                                                class="flex-column ma-0 fill-height"
                                                justify="center"
                                            >
                                                <v-col class="pa-0">
                                                    <v-list class="pa-0">
                                                        <v-list-item
                                                            class="pa-0"
                                                        >
                                                            <v-list-item-content>
                                                                <v-list-item-title class="title mb-1">Площадка № {{item.id}}</v-list-item-title>
                                                            </v-list-item-content>
                                                            <v-chip class="ml-4" small>21.10.2019</v-chip>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>

                                                <v-col class="pa-0">
                                                    <v-list
                                                        class="pa-0"
                                                        disabled
                                                    >
                                                        <v-list-item-group
                                                            color="primary"
                                                        >
                                                            <v-list-item
                                                                v-for="(item, i) in items"
                                                                :key="i"
                                                                class="mb-4"
                                                                style="border-bottom: 1px solid black; background-color: #f0f3f8;"
                                                            >
                                                                <!-- <v-list-item-icon>
                                                                    <v-icon v-text="item.icon"></v-icon>
                                                                </v-list-item-icon> -->

                                                                <v-list-item-content>
                                                                    <v-list-item-title
                                                                        v-text="
                                                                            item.title
                                                                        "
                                                                    ></v-list-item-title>
                                                                    <v-list-item-subtitle
                                                                        v-text="
                                                                            item.text
                                                                        "
                                                                    ></v-list-item-subtitle>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list-item-group>
                                                    </v-list>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </td>
                        </template>

                        <template v-slot:item.calories="{ item }">
                            <v-chip :color="getColor(item.status)" dark>{{
                                item.calories
                            }}</v-chip>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import types from "@/store/types";

export default {
    name: "Platform",
    created() {
        // this.FETCH_PLATFORMS();
    },
    computed: {
        ...mapGetters(["platforms"]),
    },
    data: () => ({
        selected: [],
        dialog: false,
        headers: [
            {
                text: "Код",
                align: "left",
                value: "id",
                type: "input"
            },
            {
                text: "Адрес",
                value: "name",
                type: "input"
            },
            {
                text: "Лот",
                value: "lot",
                type: "input"
            },
            {
                text: "Статус",
                value: "status",
                type: "input"
            },
            {
                text: "Количество контейнеров",
                value: "count_fact",
                type: "input"
            },
            {
                text: "Объём",
                value: "iron",
                type: "input"
            },
            {
                text: "Объем отгруженного с места",
                value: "iron",
                type: "input"
            },
            { text: "", value: "data-table-expand" }
        ],
        items: [
            {
                title: "Вид площадки",
                text: "На 4 контейнера",
                icon: "mdi-folder"
            },
            { title: "Покрытие", text: "Гравий", icon: "mdi-account-multiple" },
            { title: "Ограждение", text: "Сетчатое", icon: "mdi-star" },
            { title: "Площадка КГО", text: "Отсутствует", icon: "mdi-history" }
        ]
    }),
    methods: {
        ...mapActions([types.FETCH_PLATFORMS]),
        getColor(status) {
            if (status < 160) return "green lighten-5 green--text";
            else if (status > 500) return "red lighten-5 red--text";
            else return "orange lighten-5 orange--text";
        }
    }
};
</script>

<style lang="css" scope>
table.table {
    margin:0 auto;
    width: 98%;
    max-width: 98%;
}

.datatable-cell-wrapper {
    width: inherit;
    position: relative;
    z-index: 4;
    padding: 10px 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.datatable__expand-content .card__text {
    z-index: 3;
    position: relative;
}
.datatable-container {
    position: absolute;
    background-color: white;
    top: -50px;
    left: -14px;
    right: -14px;
    bottom: 0;
    z-index: 2;
    border:1px solid #ccc;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.15), 0 1px 10px 0 rgba(0,0,0,0.15), 0 2px 4px -1px rgba(0,0,0,0.2);
}

.v-data-table tbody tr.v-data-table__expanded__content {
    box-shadow: none;
}
</style>
