const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


let words = ['Banana'];
let word = [];
//total letters
let tl = 0;
let answer = [];


function newGame(){

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
  const insert = document.getElementById('playingArea')
  letterDisplay.setAttribute('name','displayChar')
  letterDisplay.setAttribute('id','block-'+i)
  letterDisplay.setAttribute('class','character')
  letterDisplay.innerText = answer[i]
  insert.appendChild(letterDisplay)

  
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
  let inputCaps = input.toUpperCase()
  for (i = 0; i < word.length; i++){
    if (inputCaps == word[i]){
    //log correct guess into array
    answer[i] = inputCaps;
    tl -= 1;
    console.log(answer)
    if(tl == 0){
      //Do something when we win
      console.log('Winner')
    }
    
    
} else{
  //decreases lives
  //logs incorrect guess into array
  //Check if out of lives
}
}
}

newGame()
check('a')
//resets board back to blank and chooses a new word
function reset (){

}



