// lesson 011
const app = Vue.createApp({
    data() {
        return {
           title: 'The Final Empire',
           author: 'Brandon Sanderson',
           age: 45,
           x: 0,
           y: 0,
        } 
    },
    methods: {
        handleEvent(e, str) {
            console.log(e, e.type, str)
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
    },
})

app.mount('#app')
