/* Remove vowels from a string

* Write a function that when given a string, returns a new string with all vowels removed.
* Preserve given capitalization.

e.g.
"Hello, world" => "Hll, wrld"
"BANANAS OF THE WORLD, UNITE!" => "BNNS F TH WRLD, NT!"
"This Function is Powered by A Great Language Called JavaScript" => "Ths Fnctn s Pwrd b  Grt Lngg Clld JvScrpt"

*/

function vowelRemover(str) {
  const dict = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    y: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    Y: 1,
  };
  const res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] in dict === false) {
      res.push(str[i]);
    }
  }
  return res.join("");
}

/* How long is the last word in a sentence?

* Write a function that when given a sentence, returns the number of characters found in its last word.
* Bonus: exclude the punctuation marks ".", "!", and "?" from your character count, when applicable.

e.g.
"Hello, world" => 5
"This Function is Powered by A Great Language Called JavaScript" => 10
Acceptable: "BANANAS OF THE WORLD, UNITE!" => 6
Bonus: "BANANAS OF THE WORLD, UNITE!" => 5
*/

// const lastWordLength = str => {
//   const sentence = str.trim()
//   let count = 0;
//   for (let i = sentence.length - 1; i >= 0; i--){
//     const char = sentence[i];
//     if (char === " "){
//       return count;
//     } else {
//       count++
//     }
//   }
// }
const lastWordLength = (str) => {
  const sentence = str.trim();
  const symbols = { "!": true, ".": true, "?": true };
  let count = 0;
  for (let i = sentence.length - 1; i >= 0; i--) {
    const char = sentence[i];
    if (char === " ") {
      return count;
    } else if (char in symbols) {
      continue;
    } else {
      count++;
    }
  }
};

/* How long is the longest word in a sentence?

* Write a function that when given a sentence, returns the number of characters found in its longest word.

e.g.
"Hello, world" => 5
"This Function is Powered by A Great Language Called JavaScript" => 10
"BANANAS OF THE WORLD, UNITE!" => 7
*/

function longestWordFinder(sentence) {
  let max = -Infinity;

  for (let i = 0; i < sentence.length; i++) {
    const word = sentence[i];

    if (word.length > max) {
      max = word.length;
    }
  }
  return max;
}



/* How long is the longest sentence?

* Write a function that when given an array of sentences, returns the number of words found in the longest sentence.

e.g.
const sentences = [
  "Hello, world",
  "BANANAS OF THE WORLD, UNITE!",
  "This Function is Powered by A Great Language Called JavaScript"
] => 10

*/

function longestSentenceFinder(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const sentence = arr[i];

    if (sentence.split(" ").length > max) {
      max = sentence.split(" ").length;
    }
  }
  return max;
}

/*  Email domains

* Write a function that when given an array of email addresses, returns a new array of unique domain names.

e.g.
[
  "taylorb.hogan@gmail.com",
  "kalamazoo@yahoo.org"
] => [
  "gmail",
  "yahoo"
]
 */


const domainFinder = arr => {
  const res = [];
  const visited = {};

  arr.forEach(email => {
    const backSlice = email.slice(email.indexOf("@") + 1)
    const domain = backSlice.slice(0, backSlice.indexOf("."))


    if (domain in visited === false){
      res.push(domain)
      visited[domain] = true;
    }
  })
  return res;
}

// console.log(domainFinder(emails))

/* Valid Anagram

* Write a function that, given two strings s and t, returns true if t is an anagram of s, and false otherwise.
* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

e.g.
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
 */

const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const dict = {}

  for (let i = 0; i < s.length; i++){
    const char = s[i]

    if (dict[char] === undefined){
      dict[char] = 1
    } else {
      dict[char]++
    }
  }

  for (let i = 0; i < t.length; i++){
    const char = t[i]

    if (dict[char] === undefined){
      return false;
    } else if (dict[char] === 1){
      delete dict[char]
    } else {
      dict[char]--
    }
  }

  return Object.keys(dict).length === 0;
};


/* Valid Palindrome

* Write a function that, given a string s, returns true if s is a palindrome, and false otherwise.
* A palindrome is a word or phrase that reads the same forwards and backwards, typically ignoring all punctuation.

e.g.
Input: s = "panama"
Output: false

Input: s = "racecar"
Output: true
 */

const isPalindrome = s => {
  const sReverse = s.split("").reverse().join("")

  return s === sReverse;
}

