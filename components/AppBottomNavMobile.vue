<template>
    <v-footer class="footer-c d-sm-none" >
        <v-bottom-navigation class="dir-rtl" v-model="value" :background-color="color" dark shift>
            <v-btn>
                <span>Home</span>

                <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn>
                <span>About</span>

                <v-icon>mdi-information-variant</v-icon>

            </v-btn>

            <v-btn>
                <span>New</span>

                <v-icon>mdi-new-box</v-icon>
            </v-btn>

            <v-btn>
                <span>Blog</span>

                <v-icon>mdi-format-list-text</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-footer>
</template>

<script>
export default {
    data: () => ({ value: 1 }),

    computed: {
        color() {
            switch (this.value) {
                case 0: return 'blue-grey'
                case 1: return 'teal'
                case 2: return 'brown'
                case 3: return 'indigo'
                default: return 'blue-grey'
            }
        },
    },
}
</script>

<style>
.footer-c {
    padding: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>