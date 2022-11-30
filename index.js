const lettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",                        "T","U","V","W","X","Y","Z",
                      "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
                    
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolsArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let charactersArray = []

let pwLength
let pw1El = document.getElementById("pw1-el")
let pw2El = document.getElementById("pw2-el")
let pwLengthEl = document.getElementById("pw-length-el")
let pw1 = "";
let pw2 = "";
let symbolsBool = false
let numbersBool = false

function generatePW(){
    pw1 = "";
    pw2 = "";
    pwLength = pwLengthEl.value
    charactersArray = [];
    //check which character arrays to combine
    if (symbolsBool && numbersBool){
        charactersArray = lettersArray.concat(numbersArray)
        charactersArray = charactersArray.concat(symbolsArray)
    }
    else if (symbolsBool)
        charactersArray = lettersArray.concat(symbolsArray)
    else if (numbersBool)
        charactersArray = lettersArray.concat(numbersArray)
    else
        charactersArray = lettersArray
    //randomly create passwords    
    for (let i = 0; i < pwLength; i++){
        pw1 += charactersArray[Math.floor( Math.random() * charactersArray.length)]    
    }
    for (let i = 0; i < pwLength; i++){
        pw2 += charactersArray[Math.floor( Math.random() * charactersArray.length)]    
    }
    //display passwords
    pw1El.textContent = pw1
    pw2El.textContent = pw2
}

function checkSymbols()
{
  let symbolsCheckBox = document.getElementById("symbols-el");
  if (symbolsCheckBox.checked === true)
    symbolsBool = true
  else
    symbolsBool = false
}

function checkNumbers()
{
  let numbersCheckBox = document.getElementById("numbers-el");
  if (numbersCheckBox.checked === true)
      numbersBool = true
  else
      numbersBool = false
}

function copyToClipboard() {
    //navigator.clipboard.writeText(copyText.value);

    navigator.clipboard.writeText(pw1.value);
    alert("Copied the text: " + pw1);
}
