/**Clear Data System */
import * as update from './update.js';
import { money } from './money.js';
import { wallet } from './money.js';

export function clearData(storeScore, statsBoard, resultMessage, youChose, cpuChose){
  //**Clear data confirmation */
  const overlayClearData = document.createElement('div'); //create element
  overlayClearData.className = 'overlayClear' //add class name

  overlayClearData.innerHTML = `
  <div class="overlayData">
    <p>Heads up! You're about to clear your game data. Proceed?</p>
    <button id="yesClear">Yes, clear it</button>
    <button id="noClear">Cancel</button>
  </div>
  ` //add a whole html code inside it

  document.body.appendChild(overlayClearData); //appending the element to the DOM

  const confirm = document.getElementById('yesClear');
  const cancel = document.getElementById('noClear');

  confirm.addEventListener('click', ()=> {
    overlayClearData.remove(); //removing the element to the DOM
    clearEverything(storeScore, statsBoard, resultMessage , youChose, cpuChose);
  })
  cancel.addEventListener('click', () => {
    overlayClearData.remove(); 
  })
}
export function clearEverything(storeScore, statsBoard, resultMessage , youChose, cpuChose){
  //**RESET SCORE, STATSBOARD, EVERYTHING INTO ITS DEFAULT VALUE */
  storeScore.win = 0;
  storeScore.lose = 0;
  statsBoard.winStreak = 0;
  statsBoard.loseStreak = 0;
  statsBoard.wins = 0;
  statsBoard.loses = 0;
    localStorage.setItem('storeScore', JSON.stringify(storeScore));
    localStorage.setItem('statsBoard', JSON.stringify(statsBoard));

  youChose.innerHTML = `
  <p><strong>You:</strong> <span id="playerChoice"></span></p>
  `
  cpuChose.innerHTML = `
  <p><span id="computerChoice"><strong> :CPU</strong></span></p>
  `
  resultMessage.textContent = 'Result will appear here'
 
  document.querySelector('.streak').textContent = `Win streak: ${statsBoard.winStreak}`;
  document.querySelector('.stats').textContent = `Wins: ${statsBoard.wins} | Loses: ${statsBoard.loses}`;

  update.updateScore(storeScore);

  //**RESET MONEY BACK TO DEFAULT VALUE*/
  money.count = 50;
  wallet.innerHTML = `Money: $${money.count}`
  localStorage.setItem('money', JSON.stringify(money));

}