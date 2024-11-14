let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorBtn = document.getElementById("scissorBtn");

let choiceUser = document.getElementById("chooseUser");
let choicePc = document.getElementById("choosePc");
let resultDisplay = document.getElementById("result");
let playAgainBtn = document.getElementById("again");

function getRandomChoice() {
  let randomNum = Math.ceil(Math.random() * 3);
  return randomNum === 1 ? "✊" : randomNum === 2 ? "✋" : "✌️";
}

function playGame(userChoice) {
  choiceUser.textContent = userChoice;
  let pcChoice = getRandomChoice();
  choicePc.textContent = pcChoice;

  if (userChoice === pcChoice) {
    resultDisplay.textContent = "Draw!!!";
  } else if (
    (userChoice === "✊" && pcChoice === "✌️") ||
    (userChoice === "✋" && pcChoice === "✊") ||
    (userChoice === "✌️" && pcChoice === "✋")
  ) {
    resultDisplay.textContent = "You win!";
  } else {
    resultDisplay.textContent = "Computer wins!";
  }
}

rockBtn.addEventListener("click", () => playGame("✊"));
paperBtn.addEventListener("click", () => playGame("✋"));
scissorBtn.addEventListener("click", () => playGame("✌️"));

playAgainBtn.addEventListener("click", () => {
  choiceUser.textContent = "-";
  choicePc.textContent = "-";
  resultDisplay.textContent = "Let's play";
});