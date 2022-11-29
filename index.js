const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwLength
let pw1El = document.getElementById("pw1-el")
let pw2El = document.getElementById("pw2-el")
let pwLengthEl = document.getElementById("pw-length-el")
let pw1 = "";
let pw2 = "";

function generatePW(){
    pw1 = "";
    pw2 = "";
    pwLength = pwLengthEl.value
    for (let i = 0; i < pwLength; i++){
        pw1 += characters[Math.floor( Math.random() * characters.length)]    
    }
    for (let i = 0; i < pwLength; i++){
        pw2 += characters[Math.floor( Math.random() * characters.length)]    
    }
    pw1El.textContent = pw1
    pw2El.textContent = pw2
}

function copyToClipboard() {
    navigator.clipboard.writeText(pw1);
    //alert("Copied the text: " + pw1);
}



