// Create By Visham(TrySoTv)

//Fetch The Id From The HTML
let gtn = document.getElementById("gtn");
let check = document.getElementById("check");
let main = document.getElementById("main");
let last = document.getElementById("last");
let retry = document.getElementById("retry");
let hint = document.getElementById("hint");
let gameName = document.getElementById("gameName");
let Hyn = document.getElementById("Hyn");
let head = document.getElementById("head");
let enterop = document.getElementById("enterop");

//Define User Value Named As op
//Define Chance Value Named As ch
let op = null;
let ch = 5;

//This Is Main Functinon
function PlayGame() {
  Retry();
  ch = 5;
}

//This Function Brings Back Main Loading Screen
function Retry() {
  hint.innerText = "";
  last.innerText = "";
  head.innerHTML = "Hide Your Number<br>Between 0 To 100";
  Hyn.className = "";
  check.className = "none";
  retry.innerText = "Retry";
  main.style.backgroundImage =
    "radial-gradient(circle, rgb(0 0 0) 0%, rgb(0 0 0) 31%, rgb(0 0 0) 100%)";
  hint.style.color = "#fff";
  last.style.color = "#fff";
  gtn.value = "";
  check.disabled = false;
  check.style.borderColor = "rgb(0, 218, 116)";
  gtn.disabled = false;
  op = null;
}

//Click To Hide Your Number
Hyn.addEventListener("click", () => {
  if (
    Number(gtn.value) >= 0 &&
    Number(gtn.value) <= 100 &&
    gtn.value.length >= 1
  ) {
    op = Number(gtn.value);
    Hyn.className = "none";
    check.className = "";
    gtn.value = "";
    head.innerHTML = "Guess The Number<br>Between 0 To 100";
    hint.innerHTML = "";
  } else {
    hint.innerText = "Enter The Number Between 0 To 100";
    gtn.value = "";
  }
});

//Click To Check Number
check.addEventListener("click", () => {
  if (op == Number(gtn.value)) {
    main.style.backgroundImage =
      "radial-gradient(circle, rgba(251,63,161,1) 0%, rgba(243,178,64,1) 31%, rgba(70,252,204,1) 100%)";
    last.innerText = "(: You Win The Game :)";
    gtn.disabled = true;
    last.style.color = "#000";
    check.disabled = true;
    retry.innerText = "Play Again?";
    hint.innerText = "";
    check.className = "none";
  } else {
    ch = ch - 1;
    last.innerText = `Wrong Guess ${ch} Chance Left`;
    if (ch == 0) {
      last.innerText = "You Lose The Game";
      check.disabled = true;
      check.style.borderColor = "red";
      hint.innerText = "";
      gtn.value = "";
    }
  }
  if (ch == 0 && Number(gtn.value) != op) {
    hint.innerText = `${op} Is Right Number`;
  } else if (op == Number(gtn.value)) {
    hint.innerText = "";
  } else if (Number(gtn.value) > op) {
    hint.innerText = "Enter The Smaller Number";
    gtn.value = "";
  } else {
    hint.innerText = "Enter The Bigger Number";
    gtn.value = "";
  }
});

//Press enter to check your number
gtn.addEventListener("keyup", (event) => {
  if (ch != 0) {
    if (event.key === "Enter") {
      if (op === null) {
        if (
          Number(gtn.value) >= 0 &&
          Number(gtn.value) <= 100 &&
          gtn.value.length >= 1
        ) {
          op = Number(gtn.value);
          Hyn.className = "none";
          check.className = "";
          gtn.value = "";
          head.innerHTML = "Guess The Number<br>Between 0 To 100";
          hint.innerHTML = "";
        } else {
          hint.innerText = "Enter The Number Between 0 To 100";
          gtn.value = "";
        }
      } else {
        if (op == Number(gtn.value)) {
          main.style.backgroundImage =
            "radial-gradient(circle, rgba(251,63,161,1) 0%, rgba(243,178,64,1) 31%, rgba(70,252,204,1) 100%)";
          last.innerText = "(: You Win The Game :)";
          gtn.disabled = true;
          last.style.color = "#000";
          check.disabled = true;
          retry.innerText = "Play Again?";
          hint.innerText = "";
          check.className = "none";
        } else {
          ch = ch - 1;
          last.innerText = `Wrong Guess ${ch} Chance Left`;
          if (ch == 0) {
            last.innerText = "You Lose The Game";
            check.disabled = true;
            check.style.borderColor = "red";
            hint.innerText = "";
            gtn.value = "";
          }
        }
        if (ch == 0 && Number(gtn.value) != op) {
          hint.innerText = `${op} Is Right Number`;
        } else if (op == Number(gtn.value)) {
          hint.innerText = "";
        } else if (Number(gtn.value) > op) {
          hint.innerText = "Enter The Smaller Number";
          gtn.value = "";
        } else {
          hint.innerText = "Enter The Bigger Number";
          gtn.value = "";
        }
      }
    }
  } else {
    PlayGame();
  }
});

//retry button call playgame and playgame function call retry function
retry.addEventListener("click", () => {
  PlayGame();
});

//Input value reset
gtn.value = "";

//Call playgame function to run the game
PlayGame();
