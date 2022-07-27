const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let words = ['It\'s Worked'];   //word bank to play with
let word = [];    //split up word to check through
let totalletters = 0; 
let answer = [];  //array to place correct guesses in
let lives = 0;  //this is assigned a more useful value later, done later so can try different difficulties (harder = less lives)


function newGame(){
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

  //randomly pick a word from words array - currently pointless as only one in array but will expand when up and running
  //Assigns the number of letters to be found based on the array length
  word = words[Math.floor(Math.random() * words.length)]
  word = word.toUpperCase().split('');
  //totalletters = word.length;  
  
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
  lives = 5;
 }
}

// Take input letter 
// check against word string 
// if letter present display on front end, decrease totalletters to work towards win, prevent letter being used again, assign to iTH position in display
// if not present decrease lives, display part of gallows prevent being used again 
// if lives hits 0 lose
//if totalletters = 0 win
function check (input){
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
      console.log('Winner')
    }
} 
}if(j == 0){
  lives--;
  if (lives == 0){
    console.log('You lose')
   //insert code to end game
  }
}

}


newGame()
// check('a')
// check('b')
// check('z')
// check('n')


