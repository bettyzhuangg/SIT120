// this function adds some specific keywrods to the navigation bar class such that it can be styled in css for responsiveness
function navbarFunc() {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }

// ================================= //
// these functions are temporary, to show the interactiveness when user clicks on an object
function getTickets() {
  alert("a get ticket window will appear");
}

function clickProfile() {
  alert("credit balance will appear");
}

function playQuiz() {
  alert("play quiz to get results");
}

function newWindow() {
  alert("a window for further details of event will appear");
}

// ================================= //

// these are listener functions which adds specific keywords to navigation bar class such that it can be styled in css
// to achieve sticky nav bar
window.addEventListener("scroll", function(){
  var navbar = document.getElementById("nav-bar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function(){
  var navbar = document.getElementById("nav-bar");
  var estimate = window.innerHeight/6;
  navbar.classList.toggle("sticky1", window.scrollY > window.innerHeight-estimate);
})

// ================================== //

// this is a vue instance, adding event is still included in here
const app = new Vue({
  el: '#app',
  // initializes data
  data: {
    thisevent: null,
    thisdate: null,
    score: 0,
    events: [
      {
        event: 'Coding Bootcamp',
        date: 'Friday, 19 August 2021',
      },
    ],
  },
  methods: {

    //this method here adds event to the event array
    addEvent: function() {
      var d = new Date(this.thisdate);
      var today = new Date();
      var day = d.getDay();
      // this part helps setting the date in a user-readable form
      var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var daydate = d.getDate();
      var month = d.getMonth();
      var monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var year = d.getFullYear();
      var date = daylist[day] + ', ' + daydate + ' ' + monthlist[month] + ' ' + year;

      // creates a new event instance
      var newEvent = {
        event: this.thisevent,
        date: date,
      }
      // the event can only be set if both the event title and event is properly set
      if (newEvent.event != null && d >= today) {
        this.events.push(newEvent);
        console.log(today);
      }
      else {
        alert('Invalid input!');
      }
      // the dummy variables are set back to null
      this.thisevent= null;
      this.thisdate= null;
    },

    // this function deletes an event from the events array
    deleteEvent: function() {
      this.events.shift();
    },
  }
});
