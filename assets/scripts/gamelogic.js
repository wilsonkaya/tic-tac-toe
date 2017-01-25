"use strict";
let finalResult = ['','','','','','','','',''];
let currentPlayer = "x";

let resettingArray = ['','','','','','','','',''];



  //  decidePlayer
const decidePlayer = function(){
 let XnO = 0;
  for(let i = 0; i < finalResult.length; i++){
    if(finalResult[i] === 'x' || finalResult[i] === 'o'){
     XnO ++;
   }
  }
 if(XnO % 2 === 0){
   currentPlayer = 'x';
 }else if (XnO % 2 ){
   currentPlayer = 'o';
 }
 if(XnO === 9){
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
         finalResult = resettingArray;
         }

};


//
 //function to player
 const gamePlay = function(number){
   if(finalResult[number] !== 'x' &&finalResult[number] !== 'x'){
     finalResult[number] = currentPlayer;
    console.log(finalResult);
    decidePlayer();
     return findWinner();
   }

 };

module.export = {
 gamePlay,
};
