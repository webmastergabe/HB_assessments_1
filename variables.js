//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

const myName = 'Gabriel';
console.log(myName);


//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

const faveNum = 369
console.log(faveNum);


//////////////////PROBLEM 3////////////////////

/* Create a variable called 'lovesCode' and assign it a boolean value. */

let lovesCode = true
console.log(lovesCode);


//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/
if (faveNum === 13) {
  console.log('lucky 13!');
}
else {
  console.log('not lucky 13');
}


//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out the numbers from 1 through 5.
*/

for (let i = 0; i <= 5; i++) {
  console.log(i);
}