 
//JSON.parse(localStorage. getItem('key'));
const score = JSON.parse(localStorage. getItem('score')) || {  //creation of object
  wins: 0,
  losses : 0, 
  ties : 0
};

   updateScoreElement();

//getting auto play button into js
document.querySelector('.js-auto-play-button')
 .addEventListener('click', () => {
     autoPlay();
 });

 let isAutoPlaying = false;
 let intervalID;

 function autoPlay(){
     if(!isAutoPlaying){
      intervalID= setInterval= (( ) => {
         const playerMove = playComputerMove();
         playPlayerMove(playerMove);
      }, 1000);
      isAutoPlaying = true;

      document.querySelector('.js-auto-play-button')
       .innerHTML = 'Stop Playing!';
     }else{
      clearInterval(intervalID);
      isAutoPlaying = false;

      document.querySelector('.js-auto-play-button')
       .innerHTML = 'Auto Play';
     }
 };
 
//getting rock button into js
document. querySelector('.js-rock-button')
 .addEventListener('click', () => {
    playPlayerMove('rock');
 });

 //getting paper button into js
document. querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playPlayerMove('paper');
  });

  //getting scissors button into js
document. querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playPlayerMove('scissors');
  });

//function to play the game
function playPlayerMove(playerMove){
  const computerMove = playComputerMove();

  let result = ' ';

  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'tie';
    }else if(computerMove === 'paper'){
      result = 'you lost';
    }else if(computerMove === 'scissors'){
      result = 'you won';
    }
  }else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'you won';
    }else if(computerMove === 'paper'){
      result = 'tie';
    }else if(computerMove === 'scissors'){
      result = 'you lost';
    }
  }else if(playerMove === 'scissors'){
    if(computerMove === 'rock'){
      result = 'you lost';
    }else if(computerMove === 'paper'){
      result = 'you won';
    }else if(computerMove === 'scissors'){
      result = 'tie';
    }
  }

  if(result === 'you won'){
      score.wins += 1;
  }else if(result === 'you lost'){
    score.losses += 1;
  }else if(result === 'tie'){
    score.ties += 1;
  }
//localStorage. setItem(key, value); it is to store the value more permanently
  localStorage.setItem('score', JSON.stringify(score));

 updateResult(result);
 updateMoves(playerMove, computerMove);
 updateScoreElement();
}

//function to update the result
const updateResult = (result) => {
  document. querySelector('.js-result')
   .innerHTML = result;
}

//function to store the moves
const updateMoves = (playerMove, computerMove) => {
  document. querySelector('.js-moves')
   .innerHTML = `you picked <img src="images/${playerMove}-emoji.png" class="move-image" >  and computer picked <img class="move-image" src="images/${computerMove}-emoji.png">`
}
   
// function to update score
function updateScoreElement() {
   document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

//getting reset button into js
   document.querySelector('.js-reset-button')
    .addEventListener('click', () => {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      //localStorage.removeItem(key);
      localStorage.removeItem(score);
      updateScoreElement();
    })


//function to play computer move
function playComputerMove(){
  const randomNumber = Math.random(1);

  let computerMove=' ';

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  }else if(randomNumber >=1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }else if(randomNumber >=2/3 && randomNumber <= 1){
    computerMove = 'scissors';
  }
   return computerMove;
}