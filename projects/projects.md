# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1



```javascript
const button=document.querySelectorAll('.button')
const body=document.querySelector('body')

button.forEach( (button) => {

  button.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id
    }

    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id
    }

    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id
    }

    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id
    }

  })

})


```

## project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {

  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if (height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a real height`
  }

  else if (weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a real weight`
  }

  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
  }

})


```



## project 3 solution code

```javascript

const date=document.getElementById(clock);

console.log(date)

setInterval(()=>{
  let date=new Date();

  clock.innerHTML=date.toLocaleTimeString();

},1000);



```
## project 4 solution

```javascript
let randomNumber= parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p')



let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault();

    const guess=parseInt(userInput.value)
    console.log(guess)
    Validateguess(guess);

  });
}

function Validateguess(guess){
  if(isNaN(guess)){
    alert('PLease enter a valid number');
  }

  else if(guess<1){
    alert('PLease enter a number more than 1');
  }
  else if(guess>100){
    alert('PLease enter a number less than 100');
  }

  else{
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }

}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}


function displayGuess(guess){

  userInput.value=''
  guessSlot.innerHTML+= `${guess}, `;

  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;

}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame=false
  newgame()


}

function newgame(){
  const newgamebutton=document.querySelector('#newGame')
  newgamebutton.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;

  })
}

```
