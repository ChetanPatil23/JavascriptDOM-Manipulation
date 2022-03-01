function findOut() {
  var year = prompt("Please Enter your year of birth");

  if (year) {
    var ageInYears = new Date().getFullYear() - year;
    var ageInDays = ageInYears * 365;
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "age");
    var textNode = document.createTextNode(
      "You are " + ageInDays + " days old"
    );
    h1.appendChild(textNode);
    // console.log(h1);
    var div = document.getElementById("flexcont");
    div.appendChild(h1);
  }
}

function reset() {
  var confirmed = confirm("Do you wanna reset ?");
  if (confirmed) {
    document.getElementById("age").remove();
  } else {
    alert("Please Enter your age first by clicking on FindOut button");
  }
}

function generate() {
  var input = document.createElement("input");
  input.type = "text";
  input.setAttribute("id", "inp-label");
  var div = document.getElementById("flex-container");
  div.appendChild(input);
}

function clearAll() {
  document.getElementById("flex-container").innerHTML = "";
}

//Counter

let count = 0;
let number = document.getElementById("number");
let btns = document.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    const target = e.currentTarget.classList;
    if (target.contains("increase")) {
      count++;
    } else if (target.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    number.textContent = count;
    if (count > 0) {
      number.style.color = "green";
      number.parentElement.style.backgroundColor = "lightgreen";
    } else if (count < 0) {
      number.style.color = "maroon";
      number.parentElement.style.backgroundColor = "tomato";
    } else {
      number.style.color = "black";
      number.parentElement.style.backgroundColor = "lightgray";
    }
  });
}

function rpsgame(selectedOption) {
  var yourChoice, botChoice;
  yourChoice = selectedOption.id;
  console.log("Your Choice", yourChoice);
  //Find out botChoice
  botChoice = findBotChoice(Math.floor(Math.random() * 3));
  console.log("Bot Choice", botChoice);
  // Decide Winner
  var decideWhoWon = decideWinner(yourChoice, botChoice);
  console.log(decideWhoWon);
  // Show Final Message
  var message = finalMessage(decideWhoWon);
  console.log(message);
  //Final display of DOM elements
  finaldisplay(yourChoice, botChoice, message);
}

function findBotChoice(index) {
  return ["rock", "paper", "scissors"][index];
}

function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    rock: { rock: [0.5, 0.5], paper: [0, 1], scissors: [1, 0] },
    paper: { rock: [1, 0], paper: [0.5, 0.5], scissors: [0, 1] },
    scissors: { rock: [0, 1], paper: [1, 0], scissors: [0.5, 0.5] }
  };
  return rpsDatabase[yourChoice][botChoice];
}

function finalMessage(arr) {
  if (arr[0] === 0) {
    return { text: "Oops !! You Lost ..", color: "red" };
  } else if (arr[0] === 0.5) {
    return { text: "Match Tied ..", color: "yellow" };
  } else {
    return { text: "Yayy.. You won !!", color: "green" };
  }
}

function finaldisplay(yourChoice, botChoice, message) {
  var rpsImages = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src
  };
  console.log(rpsImages);
  //Remove all Images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  //Create & Display in each divs
  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    rpsImages[yourChoice] +
    "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'/>";
  botDiv.innerHTML =
    "<img src='" +
    rpsImages[botChoice] +
    "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'/>";
  console.log(
    (messageDiv.innerHTML =
      "<h1 style='color:" +
      message["color"] +
      "; padding:30px; font-size:40px; '>" +
      message["text"] +
      "</h1>")
  );
  document.getElementById("flexcontainer2").appendChild(humanDiv);
  document.getElementById("flexcontainer2").appendChild(messageDiv);
  document.getElementById("flexcontainer2").appendChild(botDiv);
}

//Challenge 4
function changeButtonColor(btncolor) {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  // console.log(btncolor.value);
  let btnArray = [btn1, btn2, btn3];
  // console.log(btnArray);
  // let allButtons=document.getElementsByTagName('button');
  // allButtons[0].classList.remove("red")
  // allButtons[0].classList.add("green")
  // console.log(allButtons[0].classList);
  // let copyButtonColors=[];
  // for(let i=0;i<allButtons.length;i++){
  //   copyButtonColors.push(allButtons[i]);
  // }

  if (btncolor.value === "green") {
    setGreen(btnArray);
  } else if (btncolor.value === "red") {
    setRed(btnArray);
  } else {
    setBack(btnArray);
  }
}

function setGreen(btnArray) {
  for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].classList.remove("red");
    btnArray[i].classList.add("green");
  }
}
function setRed(btnArray) {
  for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].classList.remove("green");
    btnArray[i].classList.add("red");
  }
}

function setBack(btnArray) {
  for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].classList.remove("green");
    btnArray[i].classList.remove("red");
  }
}

//Change Bg color

let bgbtn = document.getElementById("changeBgBtn");
let color = document.querySelector(".color");

const colorsList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

bgbtn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colorsList[getRandomValue()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

const getRandomValue = () => {
  return Math.floor(Math.random() * colorsList.length);
};
