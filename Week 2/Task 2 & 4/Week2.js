// displays text area box if user chooses 'others' from dropdown list
function NewsletterChoice(val) {
  var element=document.getElementById('txtOther');
  if(val=='Others')
    element.style.display='block';
  else  
    element.style.display='none';
}

// prompts user to enter number of students and their respective scores and display their average score
function show_prompt() {
var i = 0;
var sum = 0;
var number = [];
var amount = -1;
amount = prompt("How many students do you have?");
if (amount != null && amount > 0) {
  do {
    number[i] = prompt("Enter student score " + (i+1));
    sum += parseInt(number[i]);
    i++;
  }
  while (i < amount);
  document.getElementById("thirdrow").getElementsByClassName("firstcolumn")[0].innerHTML += "<br>The average of the students' score is " + sum/i
}
}

var clicked = false; 

// show today's date
// can only be clicked once to prevent more dates printed onto the screen
function show_date() {
const d = new Date();
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

if (clicked == false)
{
  document.getElementById("thirdrow").getElementsByClassName("secondcolumn")[0].innerHTML += "<br>Today's date is " + date + "-" + month + "-" + year
}

clicked = true;
}

var index = 0;

// code to create slideshow
function startslideshow() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  // hides all images 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index++;
  if (index > slides.length) {index = 1}    
  // changes dot color to create an 'active' illustration
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // moves image by incrementing the array index
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
  setTimeout(startslideshow, 2500);
}

startslideshow()

// =============this part of code uses geolocation API==============
var x = document.getElementsByClassName("geo")[0];

// draws the position on a canvas
function showPosition(position) {
  var c = document.getElementById("newCanvas");
  var ctx = c.getContext("2d");
  ctx.font = "18px Jost"
  ctx.fillText("Coordinates: (" + position.coords.latitude + " , " + position.coords.longitude + ")",100,30);
}

// get the position with the geolocation API
function getPosition() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML += "Geolocation is not supported by this browser.";
  }
}

// =============================================================

// html elements with this function allows item to be dropped on it
function dropAllowed(item) {
  item.preventDefault();
}

// allows to drag the html element
function drag(item) {
  item.dataTransfer.setData("text", item.target.id);
}

// alows to drop the item and places there permanently
function drop(item) {
  item.preventDefault();
  var data = item.dataTransfer.getData("text");
  item.target.appendChild(document.getElementById(data));
}

// vue instance to create a to-do list
const app = Vue.createApp ({
  // data property
data() {
  return {
    // title is a string
    title: "Betty's to-do-list for SIT120:",
    // list is an object
    list: [
      { id: 'code-editor', text: "Familiarize a code editor: codepen", checked: true},
      { id: 'html', text: "Learn HTML", checked: true},
      { id: 'css', text: "Learn CSS", checked: true},
      { id: 'javascript', text: "Learn Javascript", checked: true},
      { id: 'github', text: "Create a github account", checked: true},
      { id: 'figma', text: "Familiarize figma", checked: false},
      { id: 'vue3', text: "Learn VUE ver 3.0", checked: false}
    ]
  };
},
// method property
methods: {
  toggleItem(item) {
    item.checked = !item.checked
  }
}
});
// mount is only used in vue 3.0
app.mount('#app');
