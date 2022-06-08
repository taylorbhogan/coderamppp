// 1. Given the string below write a function that removes
// the surrounding white space
// (Hint: Look up the trim method!)
let str = " heeeBEEEEeeejeeEeebeee s !!!   ";

const removeWhiteSpace = str => {
  return str.trim();
}



// 2. Build on your prior function to also convert all
// characters to lower case.

const toLowerCase = str => {
  const res = []
  for (let i = 0; i < str.length; i++){
    res.push(str[i].toLowerCase())
  }
  return res.join("")
}


// 3. Keep building on the same function so that you also
// split the string on spaces to get an array back.

const splitOnSpace = str => {
  return str.split(" ")
}




// 4. For each item in the array, convert the element to
// Sentence Case (first letter capitalized and all
// subsequent letters lower case)

const sentenceCase = arr => {
  const res = []
  for (let i = 0; i < arr.length; i++){
    const item = arr[i]
    res.push(item[0].toUpperCase() + item.slice(1))
  }
  return res;
}




// 5. Join the newly-cased sentence into a single string (with
// no spaces). This new string will be what we call UpperCamelCase.

const upperCamelCaseMaker = arr => {
  return arr.join("")
}




// 6. Medium: Write a function that takes in a string and replaces
// every other character in the string with the opposite case
// (i.e., if there’s an upper case character, replace with
// lower case & vice versa)

const everyOtherCapitalizor = str => {
  const res = [];

  for (let i = 0; i < str.length; i++){
    const char = str[i]

    if (i % 2 === 0) {
      if (char === char.toLowerCase()){
        res.push(char.toUpperCase())
      } else {
        res.push(char.toLowerCase())
      }
    } else {
      res.push(char)
    }
  }
  return res.join("")
}




// 7. Hard: Rewrite the function above but have it replace every
// nth character with its opposite case, where n is a parameter
// to the function.
// e.g., For n=4, 'Hello World' --> 'HelLo WOrld'

const nthCapitalizor = (str, n) => {
  const res = [];

  for (let i = 0; i < str.length; i++){
    const char = str[i];

    if (i % n === 0){
      if (char === char.toLowerCase()){
        res.push(char.toUpperCase())
      } else {
        res.push(char.toLowerCase())
      }
    } else {
      res.push(char)
    }
  }
  return res.join("")
}



const run = string => {
  console.log("Running run...")

}

run(str)
