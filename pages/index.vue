<template>
  <div>
    <MyImage/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "IndexPage",
    data: () => ({}),
    computed: {
        ...mapGetters("post", ["gImage"])
    },
    async mounted() {
        try {
            await this.getImage();
        }
        catch (e) {
            console.log(e.message);
        }
    },
    methods: {
        ...mapActions("post", ["getImage"]),
    },

}
</script>
