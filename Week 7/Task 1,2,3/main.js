// task 1
// globally registered component
// creates a form to allow user to set a reminder
Vue.component('setreminder', {
      template: '<form class="set-reminder" v-on:submit.prevent="addEvent">' +
                  '<label for="event-type">Event</label>' +
                  '<select id="event-type" name="event-type" v-model="event">' + 
                  '<option value="Networking Event">Networking Event</option>' +
                  '<option value="Coding Bootcamp">Bootcamp</option>' +
                  '<option value="Coding Workshop">Workshop</option>' +
                  '<option value="Online Tutorial">Online Tutorial</option>' +
                  '</select>' +
                  '<label for="date">Date</label>' +
                  '<input type="date" id="date" name="date" v-model="date"/>' +
                  '<div class = submission>' +
                  '<button type="submit" value = "done">submit</button>' +
                  '</div>' +
                  '</form>',
      data(){
        return{
          event:'',
          date:''
        }
      },
      methods:{
        // passes user input to parent component
        // taask 3: event listener
        addEvent:function(){
          this.$emit('formdata', {event:this.event, date:this.date})
        }
      }
})

  //  locally defined variable which will then be used as a locally registered component
  // whenever there is changes in events, the score will be recalculated
var score = {
  // task 2: props
    props: {events: {
      type: Array,
      required: true
    }},
    data() {
      return {
        score: 0,
        gradient: 0,
      }
    },
    // watcher which computes score if events changes
    watch:{
      events:function(val){
        this.computeScore()
      }
    },
    // calls computescore everytime the component is rendered
    mounted() {
        this.computeScore()
    },
    template: '<p class = "score">Score you get: {{ score }} </p>',

    methods: {
      // calculate score based on the gradient given x2 and y2
      computeScore: function() {
        var x2 = this.computeX2();
        console.log('x2: ' + x2);
        var y2 = this.computeY2();
        console.log('y2: ' + y2);
        this.gradient = (450 - y2)/(x2);
        this.score = (this.gradient/5)*100;
        if (this.score > 100)
        {
         this.score = 100;
        }
        // passes this computed score to parent component
        // task 3: event listener
        this.$emit('scorecalculated', this.score)
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
  }
  
  // vue instance which controls the data of the app div
  var app = new Vue({
      el: '#app',
      data  : function(){
        return{
            events: [
              {
                event: 'Bootcamp',
                date: '2021-08-13'
              },
            ],
            score:0
        }
        },

        // task 1
        // locally register components
        components: {
          // task 2: props
            'notifications': {props:['score'],
            template: '<div class = "notifs"><p class = "greennotif" v-if="score > 70">' +
            'Good job, your learning progress is on track</p>' +
            '<p class = "rednotif" v-else>Add more events as your learning progress is off track</p></div>'},
            // passes score variable to be a component
            'score': score,
            // task 2:props
            'reminder': { props: ['event', 'date'],
                          template: '<div class="reminder"><h3>{{event}}</h3><p>{{ date }}</p></div>' },
            
        },

        methods: {
          addEvent: function(event) {
           this.events.push(event)
           console.log("Events", this.events)
          },
          assignScore: function(scorefromcomponent){
            this.score = scorefromcomponent
          }
        },

        template: '<div><h1>You can set your reminder here</h1><setreminder v-on:formdata="addEvent"></setreminder>' +
        '<h1>These are your reminders</h1><reminder v-for="x in events"' +
        'v-bind:date="x.date"' +
        'v-bind:event="x.event"></reminder>' +
        '<h1>This is your on track score</h1><score :events="events" v-on:scorecalculated="assignScore" />' +
        '<h1>This is what your on track score describes</h1><notifications :score="score" /></div>'
    });
