<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Qr</span>
                <span class="font-weight-light">Form</span>
            </v-toolbar-title>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({}),
};
</script>
