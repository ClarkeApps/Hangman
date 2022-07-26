const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']



let words = ['Banana'];
let word = [];
//total letters
let tl = 0;
let answer = [];
let lives = 0;


let buttonA //= document.getElementById('button-A');


function newGame(){
  //generate
  for (let i = 0; i< alphabet.length; i++){
  const newButton = document.createElement('button')
  const insert = document.getElementById('alphabetArea')
  newButton.setAttribute('id','button-'+alphabet[i])
  newButton.setAttribute('class','alphabetButtons')
  newButton.innerText=alphabet[i]
  insert.appendChild(newButton)  

  //adjust this to change the buttonA each time
    buttonA = document.getElementById('button-A');
  }
  //randomly pick a word from words array
  word = words[Math.floor(Math.random() * words.length)]
  word = word.toUpperCase().split('');
  tl = word.length;  
  
 for (i = 0; i<tl; i++){
  //generate answer array to length of word with '_'
  answer.push('_');
    
  //create front end for each array element at this stage 
  // use name to identify this will create elementsbyName[n]
  const letterDisplay = document.createElement('p')
  const insert = document.getElementById('guessDisplay')
  letterDisplay.setAttribute('name','displayChar')
  letterDisplay.setAttribute('id','block-'+i)
  letterDisplay.setAttribute('class','character')
  letterDisplay.innerText = answer[i]
  insert.appendChild(letterDisplay)

  lives = 5;
 }
 
 console.log(answer);
}




// Take input letter 
// check against word string 
// if letter present display on front end, decrease tl to work towards win, prevent letter being used again, assign to iTH position in display
// if not present decrease lives, display part of gallows prevent being used again 
// if lives hits 0 lose
//if tl = 0 win
function check (input){
  let j = 0;
  console.log(input)
  //call a function to check if already used this letter.
  let inputCaps = input.toUpperCase()
  for (i = 0; i < word.length; i++){
    if (inputCaps == word[i]){
    //log correct guess into array
    answer[i] = inputCaps;
    //adjust text of block-i

      let updatedCharacter = document.getElementById('block-'+i)
      updatedCharacter.innerText = inputCaps;
    
    tl -= 1;
    j++;
    console.log(answer)
    if(tl == 0){
      //Do something when we win
      console.log('Winner')
    }
    
    
} 
}if(j == 0){
  lives--;
  if (lives == 0){
    console.log('You lose')
  }
}
}

newGame()
// check('a')
// check('b')
// check('z')
// check('n')


buttonA.addEventListener('click',clickedA)
function clickedA(){check('a')}