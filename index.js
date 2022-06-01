changeImg();

function changeImg() {
  var num1 = getRandomInt(0,5);
  var num2 = getRandomInt(0,5);

  var img1Element = document.getElementsByClassName('img1')[0];
  var img2Element = document.getElementsByClassName('img2')[0];

  if (num1 === 0) {
    img1Element.src = "./images/dice1.png";
  } else if (num1 == 1){
    img1Element.src = "./images/dice2.png";
  } else if (num1 == 2){
    img1Element.src = "./images/dice3.png";
  } else if (num1 == 3){
    img1Element.src = "./images/dice4.png";
  } else if (num1 == 4){
    img1Element.src = "./images/dice5.png";
  } else if (num1 == 5){
    img1Element.src = "./images/dice6.png";
  }

  if (num2 === 0) {
    img2Element.src = "./images/dice1.png";
  } else if (num2 == 1){
    img2Element.src = "./images/dice2.png";
  } else if (num2 == 2){
    img2Element.src = "./images/dice3.png";
  } else if (num2 == 3){
    img2Element.src = "./images/dice4.png";
  } else if (num2 == 4){
    img2Element.src = "./images/dice5.png";
  } else if (num2 == 5){
    img2Element.src = "./images/dice6.png";
  }

  var winnerHeading = document.getElementById('heading');
  if (num1 > num2) {
    winnerHeading.innerHTML = "Player 1 Wins!";
  } else if (num1 < num2){
    winnerHeading.innerHTML = "Player 2 Wins!";
  } else {
    winnerHeading.innerHTML = "Draw!";
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
