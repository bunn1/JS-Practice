// Program to calculate * and / of two numbers (input from user)

let multi = document.getElementById("multi");

let del = document.getElementById("remove");

let dela = document.getElementById("divide");



multi.addEventListener("click", function multiply() {

    num1 = document.getElementById("firstNum").value;

    num2 = document.getElementById("secondNum").value;

    document.getElementById("result").innerHTML = num1 * num2;

})

dela.addEventListener("click", function divide() {

    num1 = document.getElementById("firstNum").value;

    num2 = document.getElementById("secondNum").value;

    document.getElementById("result").innerHTML = num1 / num2;

})

// Remove Multi and Divide Result
function remove() {
    let element = document.getElementById("result");
    element.remove();
}


// Hide button onclick
function hideButton(e) {
    e.style.display = "none";
}


// Change Color Body
let body1 = document.getElementById("body")

document.getElementById('change').onclick = changeColor;

function changeColor() {

    let backgroundColor = body1.style.backgroundColor;

    if (backgroundColor === "white") {
        body1.style.backgroundColor = "purple";
    } else
        body1.style.backgroundColor = "green";
{ }
    return false;
}

// Change Body backgroundColor
function changeBodyBg(color) {
    document.body.style.background = color;
}

// Triangle Ex s 37-------------------

let x = '';

for (let i = 0; i < 8; i++) {
    x = '#' + x;
    console.log(x);
}

// Triangle Ex 2 s 37--------------------

counter = "#"

for (let columns = 0; columns <= 8; columns++) {
    counter += "#"
    console.log(counter)
}

// Triangle Ex 3 s 37

for (let line = "#"; line.length < 8; line += "#")
    console.log(line)

// FizzBuzz s 38-----------------------------

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz")
    }
    if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    console.log(i)
}

// FizzBuzz s 38 Ex 2 -------------------------

const fizzBuzz = (n) => {

    for (let i = 1; i <= n; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }

    }
}

// ChessBoard Ex 1 s 38

let pattern = "" //empty string
let n = 8 //both the loop should run 8 times)
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
        if ((i + j) % 2 === 0) {
            pattern += " " // Even number
        } else {
            pattern += "#" // Odd number
        }
    }
    pattern += "\n"; //new line for each row
}
console.log(pattern);