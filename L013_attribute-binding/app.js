// lesson 013
const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk/',
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                    img: '../assets/cover.png',
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                    img: '../assets/cover.png',
                },
                {
                    title: 'the final empire',
                    author: 'patrick rothfuss',
                    img: '../assets/cover.png',
                },
            ],
        } 
    },
})

app.mount('#app')
