var app = new Vue({
    el: "#app",
    // data property
    data: {
        // left hand side 
        name: 'Betty',
        message: 'Hello World!',
        age: 2021 - Math.floor((Math.random() * (2010-1950)) + 1950),
        htmlrendering: '<p>This is what happens when we use v-html<p>',
        prendering: '<p>This is what happens when we don\'t use v-html<p>',
        number1: 130,
        number2: 140,
        favoritefruits: ['Pineapple', 'Blueberry', 'Avocado'],
        activeness: true,
        show: false,
        a: false
    },
    methods: {
        // function to show day and month based on their position in the array
        showDate: function() {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var date = new Date();
            var today = date.getDay();
            var day = date.getDate();
            var month = date.getMonth();
            var year = date.getFullYear();
            return days[today] + ", " + day + " " + months[month] + " " + year;
        },
    }
});
