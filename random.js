var generateButton = document.getElementById('generate');
generateButton.addEventListener("click",generateRandomNumber);

function generateRandomNumber(){
for(i=0; i<3;i++){
// Create text node of the random number
let randomNumber = document.createTextNode(parseInt(Math.random()*100));
// Get the screen displays
let screenDisplay = document.getElementById('screen'+i);
// Cleares the textbox of old text
screenDisplay.innerText = "";
// Append the random number to the screen displays
screenDisplay.appendChild(randomNumber);
}
}