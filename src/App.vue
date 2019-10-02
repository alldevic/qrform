<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Qr</span>
                <span class="font-weight-light">Form</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                    v-for="item in menu"
                    text
                    :to="item.link"
            >
                <span class="mr-2">{{ item.title }}</span>
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        menu: [
            {
                title: "Home",
                link: "/"
            },
            {
                title: "About",
                link: "/about"
            },
        ]
    }),
};
</script>
