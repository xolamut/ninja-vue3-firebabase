// lesson 012
const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                },
                {
                    title: 'the final empire',
                    author: 'patrick rothfuss',
                },
            ],
        }
    },
})

app.mount('#app')
