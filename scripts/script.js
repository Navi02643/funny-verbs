const showVerb = document.getElementById("showVerb");
const showImage = document.getElementById("showImage");
const showAudio = document.getElementById("showAudio");

const first = document.getElementById("first-verb");
const second = document.getElementById("second-verb");
const third = document.getElementById("third-verb");
const fourth = document.getElementById("fourth-verb");

const next = document.getElementById("next");
const verbCounter = document.getElementById("verbs-counter");
const allRightCounter = document.getElementById("all-right-answers");
const score = document.getElementById("score");
const verbsContainer = document.getElementById("verbs-container");

const numberOfVerbs = verbs.length;

const buttonRefresh = document.getElementById("refresh");

let answerRoulette = [0, 1, 1, 1];
let everyNumberOfVerbs = [];
let rightAnswer;
let rightAnswersCounter = 0;
let scoreStreak = 0;

next.addEventListener("click", function () {
  ponerVerbo();
  next.style.display = "none";
});

buttonRefresh.addEventListener("click", function () {
  window.location.reload();
});

makeRandomList();

let lastPosition = everyNumberOfVerbs.length - 1;

function makeRandomList() {
  for (var i = 0; i < numberOfVerbs; i++) {
    everyNumberOfVerbs.push(i);
  }
  everyNumberOfVerbs = everyNumberOfVerbs.sort(() => Math.random() - 0.5);
}

function buttonEffect(isRight, button) {
  if (isRight) {
    button.classList.add("rightAnswer");
    setTimeout(() => {
      button.classList.remove("rightAnswer");
    }, 300);
    rightAnswersCounter++;
    scoreStreak++;
  } else {
    button.classList.add("wrongAnswer");
    setTimeout(() => {
      button.classList.remove("wrongAnswer");
    }, 300);
    scoreStreak = 0;
  }
  setTimeout(() => {
    ponerVerbo();
  }, 300);
}

first.addEventListener("click", function () {
  buttonEffect(isItRigth_(first.innerHTML), this);
});

second.addEventListener("click", function () {
  buttonEffect(isItRigth_(second.innerHTML), this);
});

third.addEventListener("click", function () {
  buttonEffect(isItRigth_(third.innerHTML), this);
});

fourth.addEventListener("click", function () {
  buttonEffect(isItRigth_(fourth.innerHTML), this);
});

function shuffleAnswers(verbs) {
  let numberOfAnswerButtons = verbs.length;
  let randomIndex;
  while (numberOfAnswerButtons != 0) {
    randomIndex = Math.floor(Math.random() * numberOfAnswerButtons);
    numberOfAnswerButtons--;
    [verbs[numberOfAnswerButtons], verbs[randomIndex]] = [
      verbs[randomIndex],
      verbs[numberOfAnswerButtons],
    ];
  }
  return verbs;
}

function isItRigth_(answer) {
  return answer == rightAnswer ? true : false;
}

function randomVerbo(notThisOne) {
  theOne = Math.floor(Math.random() * verbos.length);
  return theOne == notThisOne ? randomVerbo(notThisOne) : theOne;
}

function ponerVerbo() {
  answerRoulette = shuffleAnswers(answerRoulette);
  let randomPosition = everyNumberOfVerbs[lastPosition];
  let imgText = "<img src='./assets/img/" + verbs[randomPosition] + ".jpg'";
  imgText += "height='140px' width='100px'/>";
  first.classList.add("btn", "btn-outline-primary", "btn-md");
  second.classList.add("btn", "btn-outline-primary", "btn-md");
  third.classList.add("btn", "btn-outline-primary", "btn-md");
  fourth.classList.add("btn", "btn-outline-primary", "btn-md");
  if (lastPosition >= 0) {
    var just_position = lastPosition + 1;
    verbCounter.innerHTML = "" + just_position + "/" + numberOfVerbs;
    allRightCounter.innerHTML = "Right answers: " + rightAnswersCounter;
    score.innerHTML =
      "Right answers without making mistakes: " + scoreStreak;
    showVerb.innerHTML = verbs[randomPosition];
    showImage.innerHTML = imgText;
    showAudio.src = "./assets/audio/" + verbs[randomPosition] + ".mp3";
    showAudio.play();
    first.innerHTML = !answerRoulette[0]
      ? verbos[randomPosition]
      : verbos[randomVerbo(randomPosition)];
    second.innerHTML = !answerRoulette[1]
      ? verbos[randomPosition]
      : verbos[randomVerbo(randomPosition)];
    third.innerHTML = !answerRoulette[2]
      ? verbos[randomPosition]
      : verbos[randomVerbo(randomPosition)];
    fourth.innerHTML = !answerRoulette[3]
      ? verbos[randomPosition]
      : verbos[randomVerbo(randomPosition)];

    rightAnswer = verbos[randomPosition];
    lastPosition--;
  } else {
    verbCounter.innerHTML = "0 / " + numberOfVerbs;
    allRightCounter.innerHTML = "Right answers: " + rightAnswersCounter;
    score.innerHTML =
      "Right answers without making mistakes: " + scoreStreak;
    showVerb.innerHTML = "Thank you!";
    verbsContainer.innerHTML = "";
  }
}
