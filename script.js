//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var adventureScore = 0;
var fantasyScore = 0;
var mysteryScore = 0;
var sciFiScore = 0;
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", adventure);
q1a2.addEventListener("click", mystery);
q1a3.addEventListener("click", fantasy);
q1a4.addEventListener("click", sciFi);

q2a1.addEventListener("click", sciFi);
q2a2.addEventListener("click", mystery);
q2a3.addEventListener("click", fantasy);
q2a4.addEventListener("click", adventure);

q3a1.addEventListener("click", fantasy);
q3a2.addEventListener("click", sciFi);
q3a3.addEventListener("click", adventure);
q3a4.addEventListener("click", mystery);

q4a1.addEventListener("click", mystery);
q4a2.addEventListener("click", sciFi);
q4a3.addEventListener("click", adventure);
q4a4.addEventListener("click", fantasy);

q5a1.addEventListener("click", sciFi);
q5a2.addEventListener("click", mystery);
q5a3.addEventListener("click", fantasy);
q5a4.addEventListener("click", adventure);

//#TODO: Define quiz functions here
function adventure() {
  questionCount++;
  adventureScore++;
  console.log(adventureScore);
  if (questionCount >= 5) {
    updateResult();
  }
}
function mystery() {
  questionCount++;
  mysteryScore++;
  console.log(mysteryScore);
  if (questionCount >= 5) {
    updateResult();
  }
}
function sciFi() {
  questionCount++;
  sciFiScore++;
  console.log(sciFiScore);
  if (questionCount >= 5) {
    updateResult();
  }
}
function fantasy() {
  questionCount++;
  fantasyScore++;
  console.log(fantasyScore);
  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult() {
  // if (adventureScore > mysteryScore && sciFiScore && fantasyScore}
  //   if (adventureScore >= 2) {
  //     document.getElementById("result").innerHTML =
  //       "You are an ADVENTURE novel \n\n You love to experience new things";
  //   } else if (sciFiScore >= 2) {
  //     result.innerHTML = "You are a SCI-FI novel";
  //   } else if (mysteryScore >= 2) {
  //     result.innerHTML = "you are a MYSTERY novel";
  //   } else if (fantasyScore >= 2) {
  //     result.innerHTML = "you are a FANTASY novel";
  //   } else {
  //     result.innerHTML = "You are a mix of genres";
  //   }
  // }

  //problem with above code is when you have more than three questions

  if (
    adventureScore > mysteryScore &&
    adventureScore > sciFiScore &&
    adventureScore > fantasyScore
  ) {
    document.getElementById("result").innerHTML = "You are an ADVENTURE novel";
  } else if (
    sciFiScore > adventureScore &&
    sciFiScore > mysteryScore &&
    sciFiScore > fantasyScore
  ) {
    result.innerHTML = "You are a SCI-FI novel";
  } else if (
    mysteryScore > adventureScore &&
    mysteryScore > sciFiScore &&
    mysteryScore > fantasyScore
  ) {
    result.innerHTML = "you are a MYSTERY novel";
  } else if (
    fantasyScore > adventureScore &&
    fantasyScore > adventureScore &&
    fantasyScore > sciFiScore
  ) {
    result.innerHTML = "you are a FANTASY novel";
  } else {
    result.innerHTML = "You are a mix of genres";
  }
}
