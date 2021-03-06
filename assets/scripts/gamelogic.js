"use strict";
let finalResult = ['','','','','','','','',''];
let currentPlayer = "x";
let resettingArray = ['','','','','','','','',''];
let resettingGame = false;

  //  decidePlayer
const decidePlayer = function(number){
  if(finalResult[number.id] !== "o" && finalResult[number.id] !== "x"){
    finalResult[number.id] = currentPlayer;
  }

 let XnO = 0;
  for(let i = 0; i < finalResult.length; i++){
    if(finalResult[i] === 'x' || finalResult[i] === 'o'){
     XnO ++;
   }
  }
 if(XnO % 2 === 0){
   currentPlayer = 'x';
 }else if (XnO % 2 === 1 ){
   currentPlayer = 'o';
 }
 findWinner(number);
 sendMove(number);
 if(resettingGame === false && XnO === 9){
    $('#show-winner').text("Draw");
   finalResult = resettingArray;
   currentPlayer = 'x';
 }

};

//find winner
 const findWinner = function(){
   if ((finalResult[0] === "x" && finalResult[1] === "x" && finalResult[2] === "x") ||
      (finalResult[3] === "x" && finalResult[4] === "x" && finalResult[5] === "x") ||
      (finalResult[6] === "x" && finalResult[7] === "x" && finalResult[8] === "x") ||
      (finalResult[0] === "x" && finalResult[3] === "x" && finalResult[6] === "x") ||
      (finalResult[1] === "x" && finalResult[4] === "x" && finalResult[7] === "x") ||
      (finalResult[2] === "x" && finalResult[5] === "x" && finalResult[8] === "x") ||
      (finalResult[0] === "x" && finalResult[4] === "x" && finalResult[8] === "x") ||
      (finalResult[2] === "x" && finalResult[4] === "x" && finalResult[6] === "x")) {
        finalResult = resettingArray;
        resettingGame = true;
      $('#show-winner').text("X wins");


      } else if ((finalResult[0] === "o" && finalResult[1] === "o" && finalResult[2] === "o") ||
         (finalResult[3] === "o" && finalResult[4] === "o" && finalResult[5] === "o") ||
         (finalResult[6] === "o" && finalResult[7] === "o" && finalResult[8] === "o") ||
         (finalResult[0] === "o" && finalResult[3] === "o" && finalResult[6] === "o") ||
         (finalResult[1] === "o" && finalResult[4] === "o" && finalResult[7] === "o") ||
         (finalResult[2] === "o" && finalResult[5] === "o" && finalResult[8] === "o") ||
         (finalResult[0] === "o" && finalResult[4] === "o" && finalResult[8] === "o") ||
         (finalResult[2] === "o" && finalResult[4] === "o" && finalResult[6] === "o")){
         finalResult = resettingArray;
         resettingGame = true;
         $('#show-winner').text("O wins");
       }
};
//data for api
let singleUpdate = {
   "game": {
     "cell": {
       "index": 0,
       "value": "x"
     },
     "over": false
   }
 };


let sendMove = function (number){
  if(currentPlayer === "x"){
    singleUpdate['game']['cell']['value'] = "o";
  } else{
    singleUpdate['game']['cell']['value'] = "x";
  }
  singleUpdate['game']['cell']['index'] = parseInt(number.id);
  singleUpdate['game']['over'] = resettingGame;
};

 //function to player // number is the div att of html
 const gamePlay = function(number){
   if (resettingGame === false){
     if($(number).text() !== "x" && $(number).text() !== "o"){
       $(number).text(currentPlayer);
     }
    // sendMove(number);
    decidePlayer(number);
   }
 };

// /reset button logic
const resetTheBoard = function(){
$(".square").text("");
currentPlayer = "x";
finalResult = ['','','','','','','','',''];
resettingGame = false;
$('#show-winner').text("");
$('#clean-showgame').val("");
$(".buttons-forGame").show();
};


 module.exports = {
  gamePlay,
  resetTheBoard,
  singleUpdate,

 };
