onload = alert(
  "Welcome to CAF Guessing Game \nLet's see if you can be correct on your first guess!"
);

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };
  //  WHEN THERE IS NO NUMBER
  if (!guess) {
    document.querySelector(".message").classList.add("wrong");
    displayMessage("No Number!");
    // document.querySelector(".message").textContent = "No Number!";

    // WHEN PLAYER WINS
  } else if (guess === number) {
    document.querySelector(".message").classList.remove("wrong");
    displayMessage("Correct!");
    // document.querySelector(".message").textContent = "Correct!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".secretNumber").style.width = "4.5rem";
    document.querySelector(".secretNumber").textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // WHEN NUMBER IS GREATER
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector(".message").classList.remove("wrong");
      displayMessage(guess > number ? "Too High" : "Too Low");
      // document.querySelector(".message").textContent = guess > number ?
      // 'Too High' : 'Too Low';
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start quessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".secretNumber").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".secretNumber").style.width = "4rem";
});
