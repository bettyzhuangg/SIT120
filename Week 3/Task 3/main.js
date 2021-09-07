// prints today's date
function printdate() {
    let d = new Date();
    let day = d.getDay();
    // array for days in which it can be accessed with today's day as the index
    var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = d.getDate();
    let month = d.getMonth();
    // array for months in which it can be accessed with today's month as the index
    var monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];           
    let year = d.getFullYear();
    document.getElementById("message").innerHTML += '<br>' + daylist[day] + ', ' + date + ' ' + monthlist[month] + ' ' + year;

    // set month to october
    d.setMonth(9);
    // get month and add 1 month to it
    month = d.getMonth() +1;
    document.getElementById("message").innerHTML += '<br>' + daylist[day] + ', ' + date + ' ' + monthlist[month] + ' ' + year;
}
printdate();

// creates a constant of students, which consist of students array
// the getter returns the names, and setter sets the name of the second student
const students = {
    students: [{
        name: 'Betty Yuliani',
        age: 20,
    },
    {
        name: 'Justin Bieber',
        age: 30,
    }],

    get getName() {
        return this.students[0].name + ", " + this.students[1].name;
    },

    set setName(name) {
        this.students[1].name = name;
    }
}

// pdisplays the name onto the screen
function printNames() {
    document.getElementById("message").innerHTML += '<br>' + students.getName;
    document.getElementById("message").innerHTML += '<br> changing Justin to Ariana...';
    students.setName = 'Ariana Grande';
    document.getElementById("message").innerHTML += '<br>' + students.getName;
}
printNames();
