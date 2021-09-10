// calculate BMI

var calculatebmi= new Vue({
    el: '#calculatebmi',
    data: {
      height: '',
      weight: '',
      BMI: null,
    },
    methods: {
      calculate: function () {
        var heightsquared = this.height * this.height;
        var weight = this.weight;
        var BMI = Math.floor(weight/heightsquared);
        this.BMI = BMI;
      }
    }
  })

  // a game for clicking button and display the amount of times it has been clicked
  var buttonclicker = new Vue({
    el: '#buttonclicker',
    data: {
      clicked: 0,
      clickedStatus: 'You have not clicked the button',
    },
  
    methods: {
        increment_clicked_times: function () {
            this.clicked++;
            this.clickedStatus = 'Button has been clicked'
      },
  
      // restart the properties
      restart_button: function () {
            this.clicked = 0;
            this.clickedStatus = 'You have not clicked the button';
      }
    }
    })
