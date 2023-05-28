// lesson 009
const app = Vue.createApp({
    data() {
        return {
           title: 'The Final Empire',
           author: 'Brandon Sanderson',
           age: 45,
        } 
    },
    methods: {
        changeTitle() {
            this.title = 'Words of Randiance'
        },
        changeTitle2(newTitle) {
            this.title = newTitle
        },
    },
})

app.mount('#app')
