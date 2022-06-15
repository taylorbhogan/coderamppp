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


// 1. Build an object representing a class, which stores the following:
// - teacher: Christine Umans
// - subject: JavaScript 101
// - students: alice, charlie, david
// - assignments: `quiz1, quiz2, midterm, final





// 2. Add a student "bob"




// 3. Create an array called courses that contains the course
// above and two new ones (you'll have to make the new courses, then
// create a courses variable that is an array with all the courses made so far)




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





// 6. Write a function, called getStudentSubjects given two parameters:
//      - array of courses
//      - name of student
//    Return the list of subjects that the student is taking

// For example:
//   getStudentSubjects(courses, "david") -> ["JavaScript 101", "Python 101"]

// HINT: this problem can be split up in two parts
//     - building the list of subjects the student is taking
//     - finding out if a student is taking a class
// Try calling the isStudentInCourse(course, student) helper function defined below!
// fill out the isStudentInCourse function afterwards, but call it here

// Steps:
// Define the getStudentSubjects function that takes two parameters (courses objects array and student name string)
// create an array that will eventually hold all of the student's subjects
// iterate over the courses
// for each course, check if the student is taking the course
// HINT: call the isStudentInCourse - it's ok if you haven't written the code for  yet!
// if the student is in the course, add the student to the subjects array
// return the subjects array





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
