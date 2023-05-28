// lesson 015
const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                    img: '../assets/cover.png',
                    isFav: true,
                    id: 1,
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                    img: '../assets/cover.png',
                    isFav: false,
                    id: 2,
                },
                {
                    title: 'the final empire',
                    author: 'patrick rothfuss',
                    img: '../assets/cover.png',
                    isFav: true,
                    id: 3,
                },
            ],
        } 
    },
    methods: {
        toggleIsFav(bookId) {
            const selectedBook = this.books.find(book => book.id === bookId)
            selectedBook.isFav = !selectedBook.isFav
        },
    },
})

app.mount('#app')
