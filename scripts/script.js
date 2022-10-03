const showVerb  = document.getElementById("showverb");
const showImage = document.getElementById("showImage");
const showAudio = document.getElementById("showAudio");

const first     = document.getElementById("first-verb");
const second    = document.getElementById("second-verb");
const third     = document.getElementById("third-verb");
const fourth    = document.getElementById("fourth-verb");

const next              = document.getElementById('next');
const verbContent       = document.getElementById('verbs-counter');
const allRightCounter   = document.getElementById('all-right-answer'); 
const verbsContainer    = document.getElementById('verbs-container');

const numberOfVerbs = verbs.length;

let answerRoulette      = [0,1,1,1];
let everyNumberOfVerbs  = [];
let rightAnswer;
let allRightAnswer;

next.addEventListener('click',function(){
    ponerVerbo();
    next.style.display='none';
})

function ponerVerbo(){
    showVerb.innerHTML = "Deposita 200 bitcoins para jugar"
}