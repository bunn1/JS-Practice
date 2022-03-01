// Triangle Ex s 37-------------------

let x = '';

for (let i=0; i < 8; i++) {
    x='#' + x;
    console.log(x);
}

// Triangle Ex 2 s 37--------------------

counter = "#"

for (let columns = 0; columns <= 8; columns++) {
   counter += "#"
    console.log (counter)
}

// Triangle Ex 3 s 37

for(let line= "#"; line.length < 8; line += "#")
console.log(line)

// FizzBuzz s 38-----------------------------

for (let i = 1; i<=100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz")   
    }if (i % 5 == 0) {
        console.log("Buzz")   
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    console.log(i)
}

// FizzBuzz s 38 Ex 2 -------------------------

const  fizzBuzz = ( n ) => {
   
    for (let i = 1 ; i <= n ; i ++ )
  {
    
    if ( i % 3 == 0 && i % 5 == 0 ) { console.log ("fizzbuzz") }
    else if ( i % 3 == 0 ) { console.log ("fizz") }
    else if ( i % 5 == 0 ) { console.log ("buzz") }
    else { console.log ( i ) }
    
  }
}