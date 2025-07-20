export let money = JSON.parse(localStorage.getItem('money')) || {count: 50, yourBet: 0}

const betBtn = document.querySelector('.bet');
const addBet = document.querySelectorAll('.add-bet');
export const wallet = document.querySelector('.moneyBoard');
export const moneyBet = document.getElementById('moneyBet');

wallet.innerHTML = `Money: $${money.count}`
moneyBet.innerHTML = `$${money.yourBet}`
addBet.forEach((betVal)=>{
  betVal.addEventListener('click', ()=>{
    const moneyVal = Number(betVal.dataset.value);
    if(money.count < moneyVal){
      console.log('not enough money');
      return
    }
    console.log(typeof money.yourBet);
    money.yourBet += moneyVal;
    money.count -= moneyVal;
      //connect to the DOM
      moneyBet.innerHTML = `$${money.yourBet}`
      wallet.innerHTML = `Money: $${money.count}`;
    localStorage.setItem('money', JSON.stringify(money));
  })
})

//toggle overlay
betBtn.addEventListener('click', function (e) {
  this.classList.toggle('open');
  e.stopPropagation();
});

document.querySelector('.bet-options').addEventListener('click', function (e) {
  e.stopPropagation(); // stop click from closing overlay
});

//close overlay
document.addEventListener('click', function () {
  betBtn.classList.remove('open');
});
