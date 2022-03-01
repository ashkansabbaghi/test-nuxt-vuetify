<template>
    <v-app-bar app hide-on-scroll class="d-none d-sm-block">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>AshiTech</v-toolbar-title>

        <template v-slot:extension>
            <v-tabs  align-with-title class="d-flex justify-end">
                <v-tabs-slider color="yellow"></v-tabs-slider>

                <!-- <v-tab v-for="item in   ['home', 'about', 'new', 'blogs']" :key="item" >{{ item }}</v-tab> -->
                <v-tab to="/">Home</v-tab>
                <v-tab to="/about" >About</v-tab>
                <v-tab to="/news">New</v-tab>
                <v-tab to="/blogs">Blogs</v-tab>
                <v-tab to="/weather-app">weather app</v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>

export default ({

})
</script>
