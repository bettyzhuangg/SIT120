// this component calculates the score based on the gradient of the graph
const Score = Vue.component('score', {
    props: {events: {
      type: Array,
      required: true
    }},
    template: '<p class = "score">{{ calculateScore }}</p>',
    computed: {
        // formula to calculate score is gradient/5*100
        calculateScore: function() {
        var gradient = this.computeGradient();
        var score = Math.ceil((gradient/5)*100);

        if (score > 100) {score = 100;}
        return score;
  },
    },
    methods: {
    //   uses the formula of gradient to find the gradient of the graph
      computeGradient: function() {
        var x2 = this.computeX2();
        var y2 = this.computeY2();
        var gradient = (450 - y2)/(x2);
  
        return gradient;
      },
    // since it is a burn down chart, Y1 will always be 0 and X1 will start from 450
    //   calculate x2 where the y axis is the day passed
      computeX2: function() {
        var lastDay = new Date(this.events[this.events.length-1].date);
        var today = new Date();
        var milisecondsDifference = lastDay.getTime() - today.getTime();
        var x_axis = Math.ceil(milisecondsDifference/(1000*3600*24));
  
        return x_axis;
      },
  
    //   calculate y2 based on the number of events that has been planned. it has to be within 90 days according to 90-days-rule
      computeY2: function() {
        var eventCount = 0;
        var currentDate = new Date();
        var targetDate = new Date();
        targetDate.setDate(currentDate.getDate()+90);
  
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