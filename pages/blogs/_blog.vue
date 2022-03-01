<template>
    <v-app>
        <v-main>
            <v-container>
                <h1>this is page blog</h1>
                <p v-text="slug.blog"></p>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    validate({ params }) {
        return /^\d+$/.test(params.blog)
    },
    data: () => ({
        slug: ''
    }),
    created() {
        // console.log(this.$route.params)
        this.slug = this.$route.params
    },


}
</script>