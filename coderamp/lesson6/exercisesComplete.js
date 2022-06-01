// 1. Write a while loop that prints each number between 0 and 10.
// (We're just practicing loops, so no need to put it into
// a function for now.)

let whileNum = 0;
while (whileNum < 11){
  // console.log(whileNum)
  whileNum++;
}


// 2. What does that look like as a for loop?

for (let i = 0; i < 11; i++) {
  // console.log(i)
}



// 3. Let's say we have a total exam time and we want to finish our loop
// when the time elapsed has exceeded that total exam time.

// Write a while loop that uses the two variables already defined below
// (examTimeTotal and timeElapsed) in the condition. With each iteration
// print the amount of time remaining, and then print "Time's Up!".
let examTimeTotal = 60;
let timeElapsed = 0;

while (timeElapsed < examTimeTotal) {
  console.log(examTimeTotal - timeElapsed);
  timeElapsed += 10;
}
console.log("Time's Up!")




// 4. Try it as a do-while loop





// 5. FizzBuzz:
// Take in a number x.
// For all numbers between 1 and x inclusive: log only "Fizz" if
// the number is divisible by 3, only "Buzz" if the number is divisible
// by 5, and only "FizzBuzz" if the number is divisible by both 5 and 3.
// Try using a for loop for this solution.
function fizzBuzz(x) {


}



// 6. Try using a while loop to solve the FizzBuzz problem above ^.
function fizzBuzz(x) {


}

// 7. Try using a do-while loop to solve the FizzBuzz problem above
function fizzBuzz(x) {


}

// 8. Create a string and find out how many characters it has.




// 9. How would you make that string all uppercase? How about lowercase?




// 10. Let's say we wanted to introduce a newline character into a string.




// 11. Or perhaps remove some extra space trailing characters in a string?




// 12. What is we want to split the following string on the ","? What kind of
// data structure does that result in?
let grades = "98,100,97";






// 13. What similarity does this data structure have to the string
// that we started with? E.g., how could we find the length of items?




// 14. How could we find a specific grade, say the middle one?




// 15. How could we add new grades or remove one?





// 16. Make an array of numbers with the numbers 1, 2, 3, 4, ..., 1000





// 17. Using the following array of names, let's great each individual
// by printing e.g., "Hi, Alice!". Notice our names are not capitalized
// in the array, but we do want to capitalize them in our greeting.
let names = ["alice", "bob", "charlie", "danielle", "eric"];





// 18. What if we get lazy, and only want to greet every other person
// in this list?




// 19. Print the names that are at least 5 letters long
// alice
// charlie
// danielle
