<template lang="pug">
    v-app
        v-app-bar(app)
            v-toolbar-title(class="headline text-uppercase")
                span Qr
                span(class="font-weight-light") Form

            v-spacer
            v-btn(v-for="(item, i) in menu" text :key="i" :to="item.link")
                span(class="mr-2") {{ item.title }}
        v-content
            router-view
</template>

<script>
export default {
    name: "App",
    data: () => ({
        menu: [
            {
                title: "Home",
                link: "/"
            }
        ]
    })
};
</script>
