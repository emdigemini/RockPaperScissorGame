export function updateScore(storeScore){
  document.getElementById('playerScore').textContent = storeScore.win;
  document.getElementById('computerScore').textContent = storeScore.lose;
  localStorage.setItem('storeScore', JSON.stringify(storeScore));
}

export function updateStatsBoard(storeScore, statsBoard){
  if(storeScore.win === 10){
    statsBoard.winStreak += 1;
    statsBoard.loseStreak = 0;
    statsBoard.wins += 1;
      document.querySelector('.streak').innerHTML = `Win streak: ${statsBoard.winStreak}`;
      document.querySelector('.stats').innerHTML = `Wins: ${statsBoard.wins} | Loses: ${statsBoard.loses}`;
  }else if(storeScore.lose === 10){
    statsBoard.loseStreak += 1;
    statsBoard.winStreak = 0;
    statsBoard.loses += 1;
      document.querySelector('.streak').innerHTML = `Lose streak: ${statsBoard.loseStreak}`;
      document.querySelector('.stats').innerHTML = `Wins: ${statsBoard.wins} | Loses: ${statsBoard.loses}`;
  }

        statsBoard.winStreak === 0 ? document.querySelector('.streak').innerHTML = `Lose streak: ${statsBoard.loseStreak}` : document.querySelector('.streak').innerHTML = `Win streak: ${statsBoard.winStreak}`;
        document.querySelector('.stats').innerHTML = `Wins: ${statsBoard.wins} | Lose: ${statsBoard.loses}`;

  localStorage.setItem('statsBoard', JSON.stringify(statsBoard));
  localStorage.setItem('storeScore', JSON.stringify(storeScore));
}
