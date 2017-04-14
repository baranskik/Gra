var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);
var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');
pickRock.addEventListener('click', function() { playerPick('rock'), endOfGame() });
pickPaper.addEventListener('click', function() { playerPick('paper'), endOfGame() });
pickScissors.addEventListener('click', function() { playerPick('scissors'), endOfGame() });
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
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
function newGame() {
  player.name = prompt('Graczu, wpisz swoje imi�', 'imi� gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
}
var whoWinsText = '';
function endOfGame(whoWinsText) {
  if ((player.score > 9) || (computer.score > 9)) {
    gameState = 'ended';
    whoWins(computer.score, player.score);
    alert("Oto rezultat:" + whoWinsText);
    setGameElements();
    /*player.score = computer.score = 0;*/
    /*setTimeout(setGameElements(), 3000);*/
    console.log(gameState);
    console.log(whoWinsText);
  }
}
function whoWins () {
     if (player.score === 10) {
         var whoWinsText = 'Koniec gry wygra�e�!';
         }
     else if (computer.score === 10) {
       var whoWinsText = 'Koniec gry, wygra� Komputer!';
       }
return whoWinsText;
console.log(whoWinsText);
}
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
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
setGamePoints()
}
function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}
/*console.log(playerPick*/
console.log(gameState);
console.log(winnerIs);