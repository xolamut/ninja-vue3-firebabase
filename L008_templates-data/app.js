// lesson 008
const app = Vue.createApp({
    // important!!!
    // we create a function
    data() {
        // and then we return an object inside this function 
        return {
           title: 'The Final Empire',
           author: 'Brandon Sanderson',
           age: 45,
        } 
    },
})

app.mount('#app')
