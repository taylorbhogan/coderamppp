// What is an object?
// kind of like a list to hold variables "in a function"
// used to hold data, different data types
// objects have keys (or properties) and values

let car = {
  "make": "nissan",
  "model": "pathfinder",
  "color": "red",
  "miles": 130000,
};

let ages = {
  "alice": 24,
  "robert": 23,
  "claire": 28,
};


// 1. Build an object representing a course, which stores the following:
// - teacher: Christine Umans
// - subject: JavaScript 101
// - students: alice, charlie, david
// - assignments: `quiz1, quiz2, midterm, final





// 2. Add a student "bob" to that course.




// 3. Create two new courses that mirror the format above.
// Then create an array called courses that contains the three courses.



// 4. Print a list of all teachers
let teachers = [];
// use a for loop over the courses array
// for each course, add the course's teacher to the teachers array
// log the courses array





// 5. Print a list of all subjects
// make an empty array that will eventually contain all the subjects
// write a for loop that iterates over the courses
// for each course add the course's subject to the subjects array
// print the subjects array at the end





// 6. Write a function, called getStudentSubjects.
// Hardest: can you write the function after reading only the prompt?
// Harder: can you write the function after reading only the prompt and hint?
// Hard: can you write the function after reading the prompt, hint, and steps?

// PROMPT:
//    Given two parameters:
//      - array of courses
//      - name of student
//    Return the list of subjects that the student is taking

// For example:
//   getStudentSubjects(courses, "david") -> ["JavaScript 101", "Python 101"]


// HINT:
// This problem can be split up in two parts:
//     Part 1: finding out if a student is taking a class
//     Part 2: building the list of subjects the student is taking
// You could do all of this work in one function, but try using a helper function!
// The isStudentInCourse(course, student) helper function is declared below.
// You can write out the logic of Part 1 above into the isStudentInCourse function,
// and then use the return value of that helper function to power Part 2,
// which you'll write in the body of your main function, getStudentSubjects.


// STEPS:
// Define the getStudentSubjects function that takes two parameters (courses objects array and student name string)
// Create an array that will eventually hold all of the student's subjects
// Iterate over the courses
// For each course, check if the student is taking the course
// HINT: call the isStudentInCourse - it's ok if you haven't written the code for yet!
//    Even without the logic written yet, you know
//    you will write isStudentInCourse to return either true or false.
// If the student is in the course, add the student to the subjects array
// Return the subjects array





// 7. Helper function for getStudentSubjects
// Fill this out after you call it above!
// Takes in a course object and a student string
// Checks if the student is in the course's "students" array
// course.students -> ["alice", "david", "charlie"]
// student -> "charlie"
function isStudentInCourse(course, student) {
	// iterate over the students, and check if any of them equal the student
  // if we find one that equals the student, return true
  // if we don't find one, return false


}

// 8. Call getStudentSubjects and print the result.
// pass in the array of courses and the name of a student
