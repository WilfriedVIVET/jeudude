const round1 = document.querySelector(".score1");
const round2 = document.querySelector(".score2");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const dé = document.getElementById("dé");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const global1 = document.querySelector(".scoreBoard1");
const global2 = document.querySelector(".scoreBoard2");
const newGame = document.querySelector(".newGame");
const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");
const redCircle1 = document.getElementById("rond1");
const redCircle2 = document.getElementById("rond2");

/*****************variable******************** */
let limit = 10;
let score = "";
let aki = true;

if (aki == true) {
  valeur = "1";
} else {
  valeur = "2";
}

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

/****************RAZ*********************/
raz = () => {
  global1.innerText = "0";
  global2.innerText = "0";
  round1.innerHTML = "0";
  round2.innerHTML = "0";
  redCircle2.style.opacity = "0";
  player1.style.color = "grey";
  player2.style.color = "grey";
  aki == true;
};
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
      round1.innerHTML = score;
    } else {
      round2.innerHTML = score;
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
    global1.innerHTML = validScore(global1.textContent);
    score = 0;
    round1.innerHTML = 0;
    redCircle2.style.opacity = "100";
    redCircle1.style.opacity = "0";
  } else {
    global2.innerHTML = validScore(global2.textContent);
    score = 0;
    round2.innerHTML = 0;
    redCircle2.style.opacity = "0";
    redCircle1.style.opacity = "100";
  }
};

finTour = (aki) => {
  if (aki == true) {
    round1.innerHTML = 0;
  } else {
    round2.innerHTML = 0;
  }
};

verifScore = (aki) => {
  if (aki == true) {
    if (global1.textContent >= limit) {
      console.log("player 1 gagne");
      player1.style.color = "green";
    } else {
      return;
    }
  } else {
    if (global2.textContent >= limit) {
      console.log("player 2 gagne");
      player2.style.color = "green";
    }
  }
  return;
};
