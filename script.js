import * as clearData from './utils/clearData.js'
import * as update from './utils/update.js'
import * as check from './utils/checker.js'
import * as money from "./utils/money.js";

let storeScore = JSON.parse(localStorage.getItem('storeScore')) || {win: 0, lose: 0};

let statsBoard = JSON.parse(localStorage.getItem('statsBoard')) || {winStreak: 0, loseStreak:0, wins: 0, loses: 0};

const play = document.querySelectorAll('.play');
const youChose = document.getElementById('output1');
const cpuChose = document.getElementById('output2');
const resultMessage  = document.getElementById('resultMessage');
const sb = document.querySelector('.scoreBoard');

let playerMove = '';

play.forEach((player)=>{
  player.addEventListener('click', ()=>{
    playerMove = player.textContent;
    start();
  })
})

function start(){
  const randomMove = Math.floor(Math.random() * 100) + 1
  let cpu = '';
  let result = '';
  if(randomMove >= 0 && randomMove <= 33){
    cpu = 'Rock';
          if(playerMove === 'Rock'){
            result = 'Tie'
          }else if(playerMove === 'Paper'){ 
            result = 'Win'
          }else if(playerMove === 'Scissor'){
            result = 'Lose'
          }
  }
  else if(randomMove > 33 && randomMove <= 66){
    cpu = 'Paper';
          if(playerMove === 'Rock'){
            result = 'Lose'
          }else if(playerMove === 'Paper'){ 
            result = 'Tie'
          }else if(playerMove === 'Scissor'){
            result = 'Win'
          }
  }

  else{
    cpu = 'Scissor';
          if(playerMove === 'Rock'){
            result = 'Win'
          }else if(playerMove === 'Paper'){ 
            result = 'Lose'
          }else if(playerMove === 'Scissor'){
            result = 'Tie'
          }
  }

  youChose.innerHTML = `
  <p><strong>You:</strong> <span id="playerChoice"><img src="imgs/${playerMove}-emoji.png" class="casino-icon" alt="Rock Emoji"></span></p>
  `
  cpuChose.innerHTML = `
  <p><img src="imgs/${cpu}-emoji.png" class="casino-icon" alt="Rock Emoji"><span id="playerChoice"><strong> :CPU</strong></span></p>
  `

  resultMessage .innerHTML = result === 'Tie' ? `<p>It's a ${result}</p>` : `<p>You ${result}</p>` ;

  if(result === 'Win'){
    storeScore.win += 1
  }else if(result === 'Lose'){
    storeScore.lose += 1
  }

  localStorage.setItem('storeScore', JSON.stringify(storeScore));

  check.checkWin(storeScore, statsBoard);

  update.updateScore(storeScore);
}

//clearData line
document.getElementById('reset').addEventListener('click', () => {
  clearData.clearData(storeScore, statsBoard, resultMessage , youChose, cpuChose);
});

//update stats board line
update.updateStatsBoard(storeScore, statsBoard)
if(statsBoard.winStreak === 0 && statsBoard.loseStreak === 0) document.querySelector('.streak').innerHTML = `Win streak: 0`

/**update score function*/update.updateScore(storeScore);
