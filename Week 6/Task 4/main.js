var app = new Vue({
    el: "#app",
    data: {
        title: 'Form User',
        // data which will be binded as user fills in the form
        username: '',
        fullname: '',
        password: '',
        email: '',
        age: '',
    },
    methods: {
        // function to display * for every character of password
        // hides password from display
        hidePassword: function() {
            let len = this.password.length;
            let pass = '';

            for (var i = 0; i < len; i++) {
                pass += '*';
            }
            return pass;
        },
        // function to verify if the user has input all the fields before submission
        verify: function() {
            if (this.username == '' || this.password == '' || this.email === '' || this.fullname == '' || this.age == '') {
                alert("Please fill in all the fields");
            }
            else
            {
                alert("Successfully stored");
            }
        }
    }
})

