/* Remove vowels from a string

* Write a function that when given a string, returns a new string with all vowels removed.
* Preserve given capitalization.

e.g.
"Hello, world" => "Hll, wrld"
"BANANAS OF THE WORLD, UNITE!" => "BNNS F TH WRLD, NT!"
"This Function is Powered by A Great Language Called JavaScript" => "Ths Fnctn s Pwrd b  Grt Lngg Clld JvScrpt"

*/

function vowelRemover (str) {
  const dict = {a: 1, e: 1, i: 1, o: 1, u: 1, y: 1, A: 1, E: 1, I: 1, O: 1, U: 1, Y: 1}
  const res = []
  for (let i = 0; i < str.length; i++){
    if (str[i] in dict === false){
      res.push(str[i])
    }
  }
  return res.join("")
}
