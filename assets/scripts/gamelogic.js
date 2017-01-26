"use strict";
let finalResult = ['','','','','','','','',''];
let currentPlayer = "x";
let resettingArray = ['','','','','','','','',''];
let resettingGame = false;


  //  decidePlayer
const decidePlayer = function(number){
  if(finalResult[number.id] !== "o" && finalResult[number.id] !== "x"){
    finalResult[number.id] = currentPlayer;
    console.log(finalResult);
  }

 let XnO = 0;
  for(let i = 0; i < finalResult.length; i++){
    if(finalResult[i] === 'x' || finalResult[i] === 'o'){
     XnO ++;
   }
  }
 if(XnO % 2 === 0){
   currentPlayer = 'x';
   console.log(currentPlayer)
 }else if (XnO % 2 === 1 ){
   currentPlayer = 'o';
   console.log(currentPlayer)
 }
 if(XnO === 9){
   console.log("game ends");
   finalResult = resettingArray;
   currentPlayer = 'x';
 }

};


 const findWinner = function( ){
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
        console.log("x wins");
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
         console.log("o wins");
         }

};

 //function to player // number is the div att of html
 const gamePlay = function(number){
   if (resettingGame === false){
     if($(number).text() !== "x" && $(number).text() !== "o"){
       $(number).text(currentPlayer);
       console.log(number.innerHtml);
     }
     decidePlayer(number);
     findWinner(number);
   }

 };

///reset button logic
const resetTheBoard = function(){
  $(".square").text("");
  finalResult = resettingArray;

};


 module.exports = {
  gamePlay,
  resetTheBoard
 };
