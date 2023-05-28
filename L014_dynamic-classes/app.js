// lesson 014
const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                    img: '../assets/cover.png',
                    isFav: true,
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                    img: '../assets/cover.png',
                    isFav: false,
                },
                {
                    title: 'the final empire',
                    author: 'patrick rothfuss',
                    img: '../assets/cover.png',
                    isFav: true,
                },
            ],
        } 
    },
})

app.mount('#app')
