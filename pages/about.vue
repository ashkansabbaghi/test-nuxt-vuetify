<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-card-text>
                        <div>prototype</div>
                        <p class="text--primary mt-3">{{ prototype }}</p>
                        <p class="text--primary">{{ prototype2 }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-card-text>
                        <div>iterator</div>
                        <p class="text--primary mt-3"><span v-for="(i ,index) in iterators" :key="index">{{i}} - </span></p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'about',
    data: () => ({
        prototype: "default",
        prototype2: "default2",
        reveal: false,
        iterators :[]
    }),
    created() {
        this.FunPrototype()
        this.funcIterator()
    },
    head: () => ({
        title: "about page",
        meta: [{
            hid: "description",
            name: "description"
        }],
        // script:[{src: "/test.js"},]
    }),
    methods: {
        FunPrototype() {

            //prototype PD
            class Dog {
                constructor(name) {
                    this.name = name;
                }

                bark() {
                    return this.name + " " + 'sabbaghi';
                }
            }
            class superDog extends Dog {
                constructor(name) {
                    super(name)
                }

                fly() {
                    return this.name + " " + 'fly';
                }
            }
            // console.log(Dog.prototype)
            const dog = new Dog("belfi");
            const dog2 = new superDog("super dog ");
            // console.log(dog.__proto__);

            this.prototype = dog.bark()
            this.prototype2 = dog2.fly()
        },
        funcIterator() {
            class Iterator {
                constructor(items) {
                    this.index = 0
                    this.items = items
                }
                next() { return this.items[this.index++] }
                hasNext() { return this.index < this.items.length }
            }
            const iterator = new Iterator(['ashkan', 'man', 27, 'developer','dog'])
            while (iterator.hasNext()) {
                this.iterators.push(iterator.next())
            }
        }
    }
}
</script>