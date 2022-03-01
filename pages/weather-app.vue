<template>
    <v-container>
        <h1 class="display-1 text-center mt-5 mb-10">weather app</h1>
        <v-form>
            <v-container>
                <v-row>
                    <v-alert
                        v-if="info.length"
                        border="left"
                        color="blue"
                        elevation="11"
                        type="info"
                    >{{ info }}</v-alert>
                </v-row>
                <v-row>
                    <v-col sm="12">
                        <v-text-field v-model="searchCity" label="Enter city name" outlined></v-text-field>
                        <span v-if="isTyping">typing ...</span>
                    </v-col>
                    <v-col sm="12">
                        <template>
                            <v-card v-show="gCity.length > 0" class="mx-auto card-custom">
                                <!-- <v-list> -->
                                <!-- <v-list-item-group v-model="selectedItem"> -->
                                <v-list-item v-for="(c, i) in gCity" :key="i">
                                    <v-chip
                                        class="ma-2"
                                        @click="subGetWeather(c.lat, c.lon, c.state)"
                                        v-if="c.state"
                                    >{{ c.state }}</v-chip>
                                    <v-chip
                                        class="ma-2"
                                        @click="subGetWeather(c.lat, c.lon, c.state)"
                                        v-else
                                    >{{ c.country }}</v-chip>
                                    <!-- <v-list-item-content>
                                                <v-list-item-title
                                                    @click="subGetWeather(c.lat, c.lon, c.state)"
                                                    v-if="c.state"
                                                    v-html="c.state"
                                                ></v-list-item-title>
                                                <v-list-item-title v-else v-html="c.country"></v-list-item-title>
                                    </v-list-item-content>-->
                                </v-list-item>
                                <!-- </v-list-item-group> -->
                                <!-- </v-list> -->
                            </v-card>
                        </template>
                    </v-col>
                </v-row>
                <v-row></v-row>
            </v-container>
        </v-form>
        <v-flex v-show="!loading" v-if="gWeather.cod === 200">
            <v-container>
                <v-row justify="space-around">
                    <v-card >
                        <!-- <span>{{ gWeather }}</span> -->
                        <v-img
                            height="200px"
                            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                        >
                            <v-app-bar flat color="rgba(0, 0, 0, 0)">
                                <v-toolbar-title
                                    class="text-h6 white--text pl-0"
                                    v-if="gWeather.sys"
                                    v-text="gWeather.sys.country"
                                ></v-toolbar-title>
                            </v-app-bar>

                            <v-card-title class="white--text mt-8">
                                <v-avatar size="56">
                                    <img
                                        alt="user"
                                        src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                </v-avatar>
                                <p class="ml-3" v-text="gWeather.name"></p>
                            </v-card-title>
                        </v-img>

                        <v-card-text>
                            <div class="font-weight-bold ml-8 mb-2">Today</div>

                            <v-timeline align-top dense>
                                <v-timeline-item small>
                                    <div>
                                        <div
                                            class="font-weight-normal"
                                            v-for="w in gWeather.weather"
                                            :key="w.length"
                                        >
                                            <img
                                                class="img-could"
                                                :src="icon(w.icon)"
                                                alt="icon weather"
                                            />
                                            <strong v-text="w.main"></strong>
                                            {{ w.description }}
                                        </div>
                                        <v-divider class="mt-5 mb-5"></v-divider>
                                        <p class="font-weight-black">wind</p>
                                        <div class="font-weight-normal">
                                            <span class="font-weight-thin me-10">speed</span>
                                            <strong class="button">{{gWeather.wind.speed}} m/s</strong>
                                            <br />
                                            <span class="font-weight-thin me-10">deg</span>
                                            <strong
                                                class="button"
                                            >{{ Math.round(gWeather.wind.deg - 273) }} F</strong>
                                        </div>
                                        <v-divider class="mt-5 mb-5"></v-divider>
                                        <p class="font-weight-black">wind</p>
                                    </div>
                                </v-timeline-item>
                            </v-timeline>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-container>
        </v-flex>
        <!-- <v-sheet v-if="loading" class="pa-3">
            <v-skeleton-loader class="mx-auto" max-width="100%" type="card"></v-skeleton-loader>
        </v-sheet> -->
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
    data: () => ({
        searchCity: '',
        isTyping: false,
        info: {},
        selectedItem: 1,
        loading: false//none=0 - active=1 - deActive=3
    }),
    computed: {
        ...mapGetters('weather', ['gWeather', 'gCity'])
    },
    async mounted() {

    },

    methods: {
        ...mapActions('weather', ['getWeather', 'getCity']),

        icon(icon) {
            return icon ? `https://openweathermap.org/img/w/${icon}.png` : ''
        },

        async subCityWeather() {
            this.loading = true
            try {
                if (this.searchCity.length >= 3) {
                    await this.getCity(this.searchCity)
                    this.info = ""
                    this.loading = false
                } else {
                    this.info = "3 character"
                    this.$store.commit('weather/reCity')
                    this.loading = false
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        }
        ,
        async subGetWeather(lat, lon, name) {
            const info = { lat: lat, lon: lon }
            this.searchCity = name
            this.loading = true
            this.$store.commit('weather/reCity')
            try {
                if (this.searchCity.length >= 3) {
                    await this.getWeather(info)
                    this.info = ""
                    this.loading = false
                } else {
                    this.info = "3 character"
                    this.$store.commit('weather/reCity')
                    this.loading = false
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        }
    },
    watch: {
        searchCity() {
            try {
                if (!this.isTyping) {
                    setTimeout(async () => {
                        await this.subCityWeather()
                        this.isTyping = false
                    }, 1500)
                }
            } catch (e) {
                console.log('error')
            }
            this.isTyping = true

        }
    }

}
</script>

<style lang="scss">
.card-custom {
    position: relative;
    top: -50px;
    display: inline-flex;
    background: none;
    box-shadow: none;

    .v-list-c {
        border-bottom: 3px solid #3bedff;
        border-radius: 3px;
        background: none;
    }
}
.img-could {
    position: relative;
    bottom: -15px;
}
</style>