// modifies name (passed in parameter) to uppercase
function printNameUpper(name) {
    document.getElementById("message").innerHTML += '<br>' + name.toUpperCase();
}
// modifies name (passed in parameter) to lowercase
function printNameLower(name) {
    document.getElementById("message").innerHTML += '<br>' + name.toLowerCase();
}
// prints name vertically
function printNameEnter(name) {
    for (let i = 0; i < name.length; i++) {
        document.getElementById("message").innerHTML += '<br>' + name.charAt(i);
    }
}
// slices name array and prints out the first letter
function getInitial(name) {
    document.getElementById("message").innerHTML += '<br>' + name.slice(0,1);
}
// replaces name with another name (passed in parameter)
function replaceName(name) {
    let text = document.getElementById("message").innerHTML;
    document.getElementById("message").innerHTML = text.replace("Betty", name);
}
// concatenates two strings
function joinWords(name1, name2) {
    document.getElementById("message").innerHTML += '<br>' + 'This function combines ' + name1.concat(" and ", name2);
}
// splits name by slicing each individual character and separate iwth a comma,
// and print them in the array form with brackets []
function toArray(name) {
    let array = name.split("");
    document.getElementById("message").innerHTML += '<br>';
    document.getElementById("message").innerHTML += '[';
    for (let i = 0; i < array.length; i++) {
        document.getElementById("message").innerHTML += array[i] + ',';
    }
    document.getElementById("message").innerHTML += ']';
}
