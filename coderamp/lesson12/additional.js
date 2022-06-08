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
