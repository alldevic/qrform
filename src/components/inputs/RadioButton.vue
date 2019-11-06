<template lang="pug">
    ValidationProvider(
        rules="required"
        v-slot="{ errors }"
    )
        v-radio-group(
            v-model="question.body"
            row
            class="justify-end"
        )
            header(class="mr-4") {{ question.text }}
            v-radio(
                v-for="n in question.choices ? question.choices.split(';') : ['Да', 'Нет']"
                :key="n"
                :label="n"
                :value="n"
            )
        v-list-item-content(
            v-for="(error, i) in errors"
            :key="i"
        )
            v-list-item-subtitle(
                class="font-weight-light text-center red--text"
            )
                | {{ error }}
</template>

<script>
export default {
    props: [],
    data: () => ({}),
    methods: {}
};
</script>
