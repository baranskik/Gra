var newGameBtn = document.getElementById('js-newGameButton');
var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function() { playerPick('rock')});
pickPaper.addEventListener('click', function() { playerPick('paper')});
pickScissors.addEventListener('click', function() { playerPick('scissors')});
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
      newGameElem.style.display = 'block';
      pickElem.style.display = 'none';
      resultsElem.style.display = 'none';
      newGameBtn.innerText = 'Jeszcze raz';
      break;
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
function newGame() {
  player.name = prompt('Graczu, wpisz swoje imiê', 'imiê gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
}
function endOfGame() {
  if (player.score > 9) {
    gameState = 'ended';
    alert("Wygra³ gracz " + player.name);
    setGameElements();
    /*player.score = computer.score = 0;*/
    /*setTimeout(setGameElements(), 3000);*/
    console.log(gameState);
    console.log(whoWinsText);
} else if (computer.score > 9) {
   gameState = 'ended';
    alert("Wygra³ komputer");
    setGameElements();
    console.log(gameState);
    console.log(whoWinsText);
  }
}
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  var winnerIs = 'player';
    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        winnerIs = 'computer';
    }
    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    }
console.log(computer.score);
console.log(player.score);
setGamePoints();
endOfGame();
}
function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}
console.log(gameState);
console.log(winnerIs);