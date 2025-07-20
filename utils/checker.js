import * as update from './update.js';
import * as moneyGame from './money.js';
export function checkWin(storeScore, statsBoard){
  const overlayPlayAgain = document.createElement('div');
  overlayPlayAgain.className = 'overlayResult';
  document.body.appendChild(overlayPlayAgain);
  if(storeScore.win === 10){
    overlayPlayAgain.innerHTML = `
    <div class="overlayContent">
      <p>You Win!</p>
      <button id="playAgainBtn">Play Again</button>
    </div>
    `;
    moneyGame.money.count += moneyGame.money.yourBet * 2;
    moneyGame.money.yourBet = 0;
    moneyGame.moneyBet.innerHTML = `$${moneyGame.money.yourBet}`; 
    moneyGame.wallet.innerHTML = `Money: $${moneyGame.money.count}`; 
    localStorage.setItem('money', JSON.stringify(moneyGame.money));

    //play again function
    overlayPlayAgain.style.display = 'flex';
      document.getElementById('playAgainBtn').addEventListener('click', ()=>{
      overlayPlayAgain.remove();
      resetScore(storeScore, statsBoard);
      })
  }else if(storeScore.lose === 10){
    overlayPlayAgain.innerHTML = `
    <div class="overlayContent">
      <p>You Lose!</p>
      <button id="playAgainBtn">Play Again</button>
    </div>
    `;
    moneyGame.money.yourBet = 0;
    moneyGame.moneyBet.innerHTML = `$${moneyGame.money.yourBet}`; 

    overlayPlayAgain.style.display = 'flex';
    //play again function
      document.getElementById('playAgainBtn').addEventListener('click', ()=>{
      overlayPlayAgain.remove();
      resetScore(storeScore, statsBoard);
      
      })
  }
}
//rest score after play again
function resetScore(storeScore, statsBoard){
  update.updateStatsBoard(storeScore, statsBoard)
  storeScore.win = 0;
  storeScore.lose = 0;
  localStorage.setItem('storeScore', JSON.stringify(storeScore));
  update.updateScore(storeScore);
}