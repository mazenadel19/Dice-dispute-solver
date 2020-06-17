let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);


let p1DiceImg = document.getElementsByClassName("img1")[0];
let p2DiceImg = document.getElementsByClassName("img2")[0];

let h1 = document.getElementsByTagName("h1")[0];


// switch (randomNumber1) {
//     case 2:
//         return p1DiceImg.setAttribute("src", "images/dice1.png");
//         break;
//     case 2:
//         return p1DiceImg.setAttribute("src", "images/dice2.png");
//         break;
//     case 3:
//         return p1DiceImg.setAttribute("src", "images/dice3.png");
//         break;
//     case 4:
//         return p1DiceImg.setAttribute("src", "images/dice4.png");
//         break;
//     case 5:
//         return p1DiceImg.setAttribute("src", "images/dice5.png");
//         break;
//     default:
//         return p1DiceImg.setAttribute("src", "images/dice6.png");
// }

if (randomNumber1 === 1) {
    p1DiceImg.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
    p1DiceImg.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
    p1DiceImg.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
    p1DiceImg.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
    p1DiceImg.setAttribute("src", "images/dice5.png");
} else {
    p1DiceImg.setAttribute("src", "images/dice6.png");
}

if (randomNumber2 === 1) {
    p2DiceImg.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
    p2DiceImg.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
    p2DiceImg.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
    p2DiceImg.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
    p2DiceImg.setAttribute("src", "images/dice5.png");
} else {
    p2DiceImg.setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
    h1.textContent = "🚩Player One Wins";
    
} else if (randomNumber2 > randomNumber1) {
    h1.textContent = "Player Two Wins🚩";
} else {
    h1.textContent = "It's a draw";
}