<template>
    <v-container>
        <h1>All blogs</h1>
        <!-- <p>{{ text }}</p> -->
        <p>{{ dyText.join('') }}</p>
        <vue-typer :text='["Arya Stark","Jon Snow","Daenerys Targaryen","Melisandre","Tyrion Lannister"]'
  :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='70'
  :pre-erase-delay='2000'
  :erase-delay='250'
  erase-style='clear'
  :erase-on-complete='true'
  caret-animation='smooth'></vue-typer>
    </v-container>
</template>

<script>
export default {
    name: 'blog',
    middleware: 'test',
    data: () => ({
        text: ['ashkan sabbaghi' , 'developer frontend'],
        speed: 300,
        deleteSpeed: 100,
        delayText: 1000,

        dyText: [],
        currentText: "",
        currentSpeed: 0,
        textInx: 0
    }),
    computed: {
        TYPE_SPEED() { return this.speed },
        DELETE_SPEED() { return this.deleteSpeed },
        timeoutSpeed: {
            get() { return this.currentSpeed * 0.8 },
            set(v) { this.currentSpeed = v }
        },
    },
    mounted() {
        setTimeout(this.start(), this.delayText + 200)

    },
    methods: {
        start() {
            if (this.text && this.text.length > 0) {
                this.currentText = this.text[this.textInx].split("")
                this.textInx++
                setTimeout(this.type, this.timeoutSpeed)
            }
        },
        type() {
            // if typing ...
            if (this.currentText.length > 0) {
                this.dyText.push(this.currentText.shift())
                this.timeoutSpeed = this.TYPE_SPEED
                // if done typing , then delete
            } else if (this.currentText.length === 0 && this.dyText.length > 0) {
                this.timeoutSpeed = this.DELETE_SPEED
                this.dyText.pop()
                // if done typing & deleting
            } else if (
                this.currentText.length === 0 &&
                this.dyText.length === 0
            ) {
                // change words
                if (this.textInx < this.text.length) {
                    this.currentText = this.text[this.textInx].split("")
                    this.textInx++
                    this.timeoutSpeed = this.TYPE_SPEED
                    this.dyText.push(this.currentText.shift())
                } else {
                    // rest
                    this.textInx = 0
                    this.currentText = this.text[this.textInx].split("")
                    this.dyText.push(this.currentText.shift())
                }
            }
            setTimeout(this.type, this.timeoutSpeed)
        },
    }
}
</script>

<style>
.vue-typer .custom.char.typed {
  color: #009688;
}
.vue-typer .custom.char.selected {
  color: #E91E63;
}
.vue-typer .custom.caret {
  width: 5px;
  background-color: #3F51B5;
}
</style>