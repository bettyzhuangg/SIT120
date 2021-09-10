// display the reminder based on user's input of event and date
const Reminder = Vue.component('reminder', {
  props: ['event', 'date'],
  template: '<div class="reminder"><h3>{{event}}</h3><p>{{ date }}</p></div>'
 });

//  displays score based on the calculation of gradient
const Score = Vue.component('score', {
  props: {events: {
    type: Array,
    required: true
  }},
  template: '<p class = "score">Score you get: {{ calculateScore() }}</p>',
  methods: {

    // calculates score given the gradient
    calculateScore: function() {
      var gradient = this.computeGradient();
      var score = (gradient/5)*100;

      if (score > 100)
      {
        score = 100;
      }

      return score;
    },

    // calculate gradient given x2 and y2
    computeGradient: function() {
      var x2 = this.computeX2();
      console.log('x2: ' + x2);
      var y2 = this.computeY2();
      console.log('y2: ' + y2);
      var gradient = (450 - y2)/(x2);

      return gradient;
    },

    // find x2
    computeX2: function() {
      var lastDay = new Date(this.events[this.events.length-1].date);
      var today = new Date();
      var milisecondsDifference = lastDay.getTime() - today.getTime();
      var x_axis = Math.ceil(milisecondsDifference/(1000*3600*24));

      return x_axis;
    },

    // find y2
    computeY2: function() {
      var eventCount = 0;
      var currentDate = new Date();
      var targetDate = new Date();
      targetDate.setDate(currentDate.getDate()+30);

      for (var i = 0; i < this.events.length; i++ ) {
        var eventDate = new Date(this.events[i].date);
        if (eventDate <= targetDate && eventDate >= currentDate) {
          eventCount++;
        }
      }
      var y_axis = 450 - (eventCount*30);
      return y_axis;
    }
  }
})

// vue instance which controls the data of the app div
const app = new Vue({
    el: '#app',
    data  : function(){
      return{
     thisevent: '',
          thisdate: '',
          events: [
            {
              event: 'Bootcamp',
              date: '2021-08-13'
            },
          ],
      }
      },
      methods: {
        addEvent: function() {
         this.events.push({
            event:this.thisevent,
            date:this.thisdate
          })
        },
      }
  });
