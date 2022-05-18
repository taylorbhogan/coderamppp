// Print number 0 - 10
// We can do everything by hand:
// console.log(0)
// console.log(1)

// Or we can write a loop to handle that repeatable work for us:
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// We can do the same thing with a different format:
// let i = 0;
// while (i < 10){
//   console.log(i);
//   i++
// }

// So far we've repeated a task using a counter. Another very common use case: iterate using an index.

const arr = [1, 2, 3];
// let i = 0;

// while (i < arr.length){
//   console.log(i);
//   i++;
// }

// This will log i, our index, itself. To access the element at that index:
// while (i < arr.length){
//   console.log(arr[i]);
//   i++;
// }


// We can do the same exact thing with a different format:
// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

// How would we go about printing these numbers backwards?
// Will this work?
// for (let i = 0; i < arr.length; i--){
//   console.log(arr[i])
// }

// for (let i = arr.length; i >= 0; i--){
//   console.log(arr[i])
// }

// We can use a for...of loop to iterate over iterables, like arrays and strings.
for (let el of arr) {
  console.log(el)
}

// We can use a very similar loop to achieve similar results:
// We iterate over PROPERTIES in ARBITRARY order
for (let el in arr){
  console.log(el)
}

for (let el in arr){
  console.log(arr[el])
}
