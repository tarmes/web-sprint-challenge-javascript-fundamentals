// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// nestedFunction() and internal are both scoped the same. Within the closure of myFunction()


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(n){
  let f = 0;
  for (let i = 1; i <= n; i++){
    f = f + i;
  }
  return f;
}

console.log(summation(10));

// Wasn't sure if they wanted us to use reduce() or something, but they didn't specify so I just used a for loop.