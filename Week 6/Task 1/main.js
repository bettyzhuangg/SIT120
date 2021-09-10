var app = new Vue({
    el: "#app",
    data: {
        title: 'Form User',
        // these are the data that will be replaced with user input
        username: '',
        password: '',
        email: '',
        btnText: 'Show Password',
        type: 'password'
    },
    methods: {
        // a function which helps to hide the passsword input
        showPassword() {
            if(this.type === 'password') {
              this.type = 'text'
              this.btnText = 'Hide Password'
            } else {
              this.type = 'password'
              this.btnText = 'Show Password'
            }
          },
        hidePassword: function() {
            let len = this.password.length;
            let pass = '';

            for (var i = 0; i < len; i++) {
                pass += '*';
            }
            return pass;
        },
        // a function which detects if all the fields have been filled in by the user
        verify: function() {
            if (this.username == '' || this.password == '' || this.email === '' ) {
                alert("Please fill in all the fields");
            }
            else
            {
                alert("Successfully stored");
            }
        }
    }
})
