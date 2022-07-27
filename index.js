const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let isRunning = true;
let words = ["apple","orange","pear","Mango","dragonfruit"];   //word bank to play with
let word = [];    //split up word to check through
let totalletters = 0; 
let answer = [];  //array to place correct guesses in
let lives = 0;  //this is assigned a more useful value later, done later so can try different difficulties (harder = less lives)
const canvas = document.getElementById('gallows');
const ctx = canvas.getContext('2d');
let b = document.getElementById("wholescreen"); //making var for body
b.addEventListener("keypress", (evt) => {//when this happens
	check(evt.key); //log keycode
});

function reset(){
//reset the buttons
isRunning = true;
totalletters = 0;
lives = 9;
word.length = 0;
answer.length = 0;
let element = document.getElementById("guessDisplay");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
for (i=0;i<26;i++){
  document.getElementById('button-'+alphabet[i]).disabled = false;
}
//clear the canvas
const context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
//remove chars


//pick new word  
word = words[Math.floor(Math.random() * words.length)]
  word = word.toUpperCase().split('');
  
//push to array
for (i = 0; i<word.length; i++){
  //generate answer array to length of word with '_'
  if(/^[A-Za-z]*$/.test(word[i])){
  answer.push('_');
totalletters++;
console.log(totalletters)}
  else if (word[i] === ' '){
    answer.push('/');
  }
  else {
    answer.push(word[i]);
  }
//Create a <p> for each letter of the word chosen, 
  const letterDisplay = document.createElement('p')
  const insert = document.getElementById('guessDisplay')
  letterDisplay.setAttribute('name','displayChar')
  letterDisplay.setAttribute('id','block-'+i)
  letterDisplay.setAttribute('class','character')
  letterDisplay.innerText = answer[i]
  insert.appendChild(letterDisplay)
  //set lives based on difficulty
  lives = 9;
 }
}


function firstSetup(){
  //generate buttons for inputting
  for (let i = 0; i< alphabet.length; i++){
  const newButton = document.createElement('button')
  const insert = document.getElementById('alphabetArea')
  newButton.setAttribute('id','button-'+alphabet[i])
  newButton.setAttribute('class','alphabetButtons')
  newButton.innerText=alphabet[i]
  newButton.addEventListener('click', (e) => {
    check(e.target.innerText);
  });
  insert.appendChild(newButton);
  }
  const resetButton = document.createElement('button')
  const insert = document.getElementById('utilityButtons')
  resetButton.setAttribute('id','reset')
  resetButton.innerText='New Game'
  resetButton.addEventListener('click',(e)=>{
    reset()});
    insert.appendChild(resetButton)
  

  //randomly pick a word from words array - currently pointless as only one in array but will expand when up and running
  //Assigns the number of letters to be found based on the array length
  word = words[Math.floor(Math.random() * words.length)]
  word = word.toUpperCase().split('');
    
  
  //setup display of word
 for (i = 0; i<word.length; i++){
  //generate answer array to length of word with '_'
  if(/^[A-Za-z]*$/.test(word[i])){
  answer.push('_');
totalletters++;}
  else if (word[i] === ' '){
    answer.push('/');
  }
  else {
    answer.push(word[i]);
  }
//Create a <p> for each letter of the word chosen, 
  const letterDisplay = document.createElement('p')
  const insert = document.getElementById('guessDisplay')
  letterDisplay.setAttribute('name','displayChar')
  letterDisplay.setAttribute('id','block-'+i)
  letterDisplay.setAttribute('class','character')
  letterDisplay.innerText = answer[i]
  insert.appendChild(letterDisplay)
  //set lives based on difficulty
  lives = 9;
 }
}

// Take input letter 
// check against word string 
// if letter present display on front end, decrease totalletters to work towards win, prevent letter being used again, assign to iTH position in display
// if not present decrease lives, display part of gallows prevent being used again 
// if lives hits 0 lose
//if totalletters = 0 win
function check (input){
  if(isRunning == false){

  }else{
  input = input.toUpperCase()
  document.getElementById('button-'+input).disabled = true;//disable button to avoid repeated clicks - needs to be reset via loop after game

  let j = 0;
  //call a function to check if already used this letter - TO DO
  let inputCaps = input.toUpperCase()  //transfer input to caps this would be better served by checking input against the array in matching case
  for (i = 0; i < word.length; i++){
    if (inputCaps == word[i]){
    //log correct guess into array
    answer[i] = inputCaps;
    //adjust text of block-i to match guessed letter
      let updatedCharacter = document.getElementById('block-'+i)
      updatedCharacter.innerText = inputCaps;
    
      totalletters -= 1; //reduce characters needing to be found to win
     j++; //confirm that we've found something this loop, otherwise will trigger a loss condition
    if(totalletters == 0){
      //Do something when we win
      ctx.font = "25px Verdana";
let gradient = ctx.createLinearGradient(0,0,canvas.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","green");
gradient.addColorStop("1","yellow");
ctx.fillStyle = gradient;
ctx.fillText("You Win!",160,90)
isRunning = false;
    }
} 
}if(j == 0){
  lives--;
  drawShape(lives)//adds part of the gallows
  if (lives == 0){  //if lost display full word
    for (i = 0; i<word.length; i++){
      if(answer[i] === "_"){
      let tempCharacter = word[i];
    let correctedCharacter = document.getElementById('block-'+i)
    document.getElementById('block-'+i).style.color = 'red';
    correctedCharacter.innerText = tempCharacter;

  }

      }
 
  }
}
  }
}
function drawShape(livesLeft){
  
  ctx.lineWidth = 4;
  ctx.strokeStyle ='rgb(0,0,200,0.5)'
  switch(livesLeft){
case 8:
//Part 1
ctx.beginPath();
ctx.moveTo (140,140);
ctx.lineTo(50,140);
ctx.stroke();
break;
case 7:
ctx.lineTo(50,10)
ctx.stroke();
break;
case 6:
ctx.lineTo(70,10)
ctx.lineTo(50,30)
ctx.stroke()
ctx.lineTo(50,10)
break;
case 5:
ctx.lineTo(140,10)
ctx.stroke();
break;
case 4:
ctx.lineTo(140,30)
ctx.stroke()
break;
case 3:
ctx.arc(140,40,10,-1,2*Math.PI);
ctx.stroke(); 
break;
case 2:
ctx.moveTo(140,50);
ctx.lineTo(140,90);
ctx.stroke();
break;
case 1:
ctx.lineTo(130,110)
ctx.stroke()
ctx.moveTo(140,90)
ctx.lineTo(150,110)
ctx.stroke()
break;
case 0:
ctx.moveTo(120,65)
ctx.lineTo(160,65)
ctx.stroke()
ctx.font = "2rem Calibri";
let gradient = ctx.createLinearGradient(0,0,canvas.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","red");
gradient.addColorStop("1","yellow");
ctx.fillStyle = gradient;
ctx.fillText("You Lose!",160,90)
isRunning = false;
break;
}
}


