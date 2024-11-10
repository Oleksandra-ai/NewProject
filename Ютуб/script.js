// const app = Vue.createApp({
//     data() {
//         return {
//             url: 'https://ua.vuejs.org/guide/essentials/template-syntax.html#attribute-bindings',
//             showBooks: true,
//             books: [
//                 { title: 'name of the wind', author: 'patrick rothfuss', img:'./somePic/12.png', isFav:true},
//                 {title: 'the way of kings', author: 'brandon sanderson', img:'./somePic/33.png', isFav:false},
//                 {title: 'the final empire', author: 'brandon sanderson', img:'./somePic/77.png', isFav:true},
//             ]
//         }
//     },
//     methods: {
//         toggleShowBooks() {
//             this.showBooks = !this.showBooks
//         },
//         toggleFav(book) {
//             book.isFav = !book.isFav
//         }
//     },
//     computed: {
//         filteredBooks() {
//             return this.books.filter((book) => book.isFav)
//         }
//     }
// })

// app.mount('#app');

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    var el = document.getElementById('form');

    var username = el.username.value;
    var email = el.email.value;
    var password = el.password.value;
    var gender = el.gender.value;

    var error = '';
    if (username.length < 2)
        error = 'Name is too short';
    else if (email.length < 2)
        error = 'Email is too short';
    else if (!email.includes('@'))
        error = 'Email doesn\'t have \'@\'';
    else if (password.length < 2)
        error = 'Password is too short';
    else if (gender == null || gender == '')
        error = 'Gender is not indefied';

    if (error != '') {
        document.getElementById('error').innerText = error;
        return false;
    }

    document.getElementById('error').innerText = '';
    window.location = ''


    return false;

});
