// guess the number game
function guesstheNumber() {
    let num = Math.floor(Math.random() * 100);

    let guess;
    let guesscount = 0;
    
    do {
        guesscount++;
        guess = prompt("Please guess a number between 0 to 100");
        if (guess < num) {
        alert("Number is bigger than " + guess);
        }
        else if (guess > num) {
            alert("Number is smaller than " + guess);
        }
        else {
            alert("Yay! you got it");
        }
    } while (guess != num && guess != null);
    let text = document.querySelector("#text").innerHTML = "<br>" + "You have guessed " + guesscount + " times!";
}

// prompts user to enter two numbers and display the result from the multiplication
function multiply() {
    num1 = prompt("Please enter the first number");
    num2 = prompt("Please enter the second number");
    document.getElementById("text").innerHTML += '<br>' + 'The multiplication of ' + num1 + " and " + num2 + " resulted in " + (num1*num2).toString();
    
}

// joins all element array into a string, seperate with a comma
function join() {
    var names = ['Betty', 'Janice', 'Tiffany'];
    document.getElementById("message").innerHTML += names.join(',');
}
join();
