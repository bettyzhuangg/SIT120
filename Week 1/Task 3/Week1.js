// displays a text area box if user chooses 'others' from the dropdown list
function NewsletterChoice(val) {
    var element=document.getElementById('txtOther');
    if(val=='Others')
      element.style.display='block';
    else  
      element.style.display='none';
}

// prompts user to input number of students and their respective score and output the average
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

// show the date, only allows it to be clicked once
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

// vue instance which creates a to-do list
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
  // methods property
  methods: {
    toggleItem(item) {
      item.checked = !item.checked
    }
  }
});
// mount app is used only in vue 3.0
app.mount('#app');
