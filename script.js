const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const dé = document.getElementById("dé");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const scoreBoard1 = document.querySelector(".scoreBoard1");
const scoreBoard2 = document.querySelector(".scoreBoard2");
const newGame = document.querySelector(".newGame");
const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");

/*****************variable******************** */
let limit = 100;
let score = "";
let aki = true;

if (aki == true) {
  valeur = "1";
} else {
  valeur = "2";
}

/****************RAZ*********************/
raz = () => {
  scoreBoard1.innerText = "0";
  scoreBoard2.innerText = "0";
  score1.innerHTML = "0";
  score2.innerHTML = "0";
  player2.style.border = "hidden";
  player1.style.border = "solid";
  player1.style.color = "grey";
  player2.style.color = "grey";
  aki == true;
};

/*****************dé************************** */
//création du tableau des faces du dé
const tDé = [
  "./asset/oneDé.png",
  "./asset/twoDé.png",
  "./asset/threeDé.png",
  "./asset/fourDé.png",
  "./asset/fiveDé.png",
  "./asset/sixDé.png",
];
/*****************newGame**********************/
newGame.addEventListener("click", () => {
  raz();
});

/************Remise à zero******************** */
raz();

/************Lancement du dé***************** */
roll.addEventListener("click", () => {
  score = throwdé();
  if (score == 1) {
    score = 0;
    finTour(aki);
    changePlayer(aki);
    aki = !aki;
  } else {
    if (aki == true) {
      score1.innerHTML = score;
    } else {
      score2.innerHTML = score;
    }
  }
});

/************Affichage score et currentScore****/
hold.addEventListener("click", () => {
  changePlayer(aki);
  score = 0;
  verifScore(aki);
  aki = !aki;
});

/****************function****************/

//lancement du dé + affichage score provisoire
throwdé = () => {
  let rmd = Math.floor(Math.random() * (6 - 0));
  let image = tDé[rmd];
  dé.style.backgroundSize = "cover";
  dé.style.backgroundImage = `url(${image})`;
  return (score = rmd + 1);
};

//validation du score
validScore = (scoreBoard) => {
  let result = parseInt(score) + parseInt(scoreBoard);
  return result;
};

changePlayer = (aki) => {
  if (aki == true) {
    player1.style.border = "hidden";
    player2.style.border = "solid";
    scoreBoard1.innerHTML = validScore(scoreBoard1.textContent);
    score = 0;
    score1.innerHTML = 0;
  } else {
    player1.style.border = "solid";
    player2.style.border = "hidden";
    scoreBoard2.innerHTML = validScore(scoreBoard2.textContent);
    score = 0;
    score2.innerHtml = 0;
  }
};

finTour = (aki) => {
  if (aki == true) {
    score1.innerHTML = 0;
  } else {
    score2.innerHTML = 0;
  }
};

verifScore = (aki) => {
  if (aki == true) {
    if (scoreBoard1.textContent >= limit) {
      console.log("player 1 gagne");
      player1.style.color = "red";
    } else {
      return;
    }
  } else {
    if (scoreBoard2.textContent >= limit) {
      console.log("player 2 gagne");
      player2.style.color = "red";
    }
  }
  return;
};
