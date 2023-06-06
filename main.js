const dé = document.getElementById("dé");
const roll = document.querySelector(".roll");
const scoreProvisional = document.querySelector(".score1");
const scoreDef = document.querySelector(".scoreBoard1");
const hold = document.querySelector(".hold");

class Player {
  constructor(scoreP, score) {
    this.scoreP = scoreP;
    this.score = score;
  }
}

const player1 = new Player();
const player2 = new Player();
let score = "";
let aki = true;

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

/************Lancement du dé***************** */
roll.addEventListener("click", () => {
  score = throwdé();
  displayScore(aki);
});

/**************Validation score************/
hold.addEventListener("click", () => {
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

//affichages des scores
displayScore = (aki) => {
  console.log("aki =  " + aki);
  if (aki == true) {
    player1.scoreP = score;
    player1.score = score;
    console.log(player1.score);
    scoreProvisional.innerHTML = score;
  } else {
    player2.scoreP = score;
    player2.score = score;
    scoreProvisional.innerHTML = score;
  }
};

//enregistrement score
registerScore = (aki) => {
  if (aki == true) {
    player1.scoreP = score;
    player1.score = score;
    scoreDef.innerHTML = player1.scorP;
  } else {
    player2.scoreP = score;
    player2.score = score;
    scoreDef.innerHTML = player1.scorP;
  }
};
