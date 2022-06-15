// 1. Declare an empty object with a variable name of person1.



// 2. Add properties to your object (which data type makes the most sense for each property?):
//   - name
//   - age
//   - interests
//   - isProgrammer



// 3. Make a copy of your person object with a variable name of person2 (read explanation first).
// ================================================================================= //
// Explanation:
// In JavaScript, objects are stored in memory according to their memory address.
// This means that if you write the following:
const oldObject = {name: "Old object"};
const newObject = oldObject;
// newObject is not actually a new object; rather it is a pointer that points to the old object.

// What does that mean? Let's do an experiment. Uncomment the console.logs below and run the file.
// console.log("oldObject before:",oldObject);
// console.log("newObject before:",newObject);

newObject.name = "New object";

// console.log("oldObject after:",oldObject);
// console.log("newObject after:",newObject);

// While we might think setting newObject.name would only affect newObject,
// our console.log of oldObject proves that we modified oldObject.
// In fact, there is no newObject at all! newObject is a POINTER, not an OBJECT.

// =============================================== //

// So how CAN we make a copy of an object?

// There are a few ways. We'll use the simplest to implement first: the spread operator.
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// We use spread syntax like this: {...objectToSpread}.
// This will take each property of objectToSpread and make a copy of it in a new object defined by the above curly braces {}.

// Uncomment the console.logs below and run the file.

const objectToSpread = {purpose: "I am an object to be spread"};
const copyOfObjectToSpread = {...objectToSpread};

// console.log("objectToSpread before",objectToSpread);
// console.log("copyOfObjectToSpread before",copyOfObjectToSpread);

copyOfObjectToSpread.purpose = "To prove that I am different from objectToSpread";

// console.log("objectToSpread after",objectToSpread);
// console.log("copyOfObjectToSpread after",copyOfObjectToSpread);

// Note that while in our previous example, our modification line appeared to alter both objects because one was simply a reference to another.
// In contrast, the above modification line actually changes the property of the second object, and does not affect the first.

// ================================================================================= //


// 4. Make some changes to person2.
//   - give them a new name
//   - increment their age
//   - remove their first interest
//   - add a new interest to the end of their interests list
//   - change their isProgrammer status
//    Before moving on, print person1 and person2 to the console to check your work.


// 5. Copy person2 into another person, person3.
//   - give them a new name
//   - multiply their age by 2.5 and round up
//   - remove their last interest
//   - add a new interest to the beginning of their interests list
//   - change their isProgrammer status


// 6. Here are some additional people. Add the people you've already created to this array.

const person4 = {
  name: "Carlos",
  age: 34,
  interests: ["Geography", "Cartography", "Space"],
  isProgrammer: true
};
const person5 = {
  name: "Marguerite",
  age: 53,
  interests: ["Racing", "Gardening", "Checkers"],
  isProgrammer: true
};
const person6 = {
  name: "Hasaan",
  age: 17,
  interests: ["Skiing", "Space", "Painting"],
  isProgrammer: false
};

const people = [person4, person5, person6];


// 7. Let's analyze some data! Consider writing a function to find each of the following:

// 7.a. How many people are programmers?
// 7.b. What is the average age?
// 7.c. What is the oldest age?
// 7.d. What is the youngest age?
// 7.e. Create one array with everyone's interests.
// 7.f. Create one array with everyone's interests and no duplicates.
// 7.g. Create one object with people's names as properties, and whether they are a programmer as each property's value.
