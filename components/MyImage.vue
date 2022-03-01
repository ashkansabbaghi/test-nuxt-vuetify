<template>
    <v-container class="container-grid">
        <template v-if="gImage.length">
            <figure class="figure" v-for="(img, i) in gImage" :key="i">
                <img  class="img" :src="img.download_url" alt="A windmill" loading="lazy" />
                <figcaption class="figcaption">
                    <a href="#">{{ img.author }}</a>
                </figcaption>
            </figure>
        </template>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

    computed: {
        ...mapGetters('post', ['gImage'])
    }

}
</script>

<style lang="scss">
.img {
    max-width: 100%;
    display: block;
    min-width: 200px;
    min-height: 200px;
    border-radius: 15px;
}

.figure {
    position: relative;
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
    cursor: pointer;

    &:hover {
        .figcaption {
            background: none;
        }
        a {
            display: none;
        }
    }

    .figcaption {
        // grid-row: 2;
        // grid-column: 1;
        // background-color: rgba(255, 255, 255, 0.5);
        // padding: 0.2em 0.5em;
        // justify-self: start;
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: nowrap;
        align-items: center;
        background: #00000069;
        border-radius: 15px;

        a {
            color: rgb(255, 255, 255);
            text-decoration: none;
            width: 100%;
            text-align: center;
            text-shadow: 0px 0px 15px white;
        }
    }
}

// .figure > img {
//     grid-row: 1 / -1;
//     grid-column: 1;
// }

.container-grid {
    column-count: 4;
    column-gap: 10px;
}
</style>