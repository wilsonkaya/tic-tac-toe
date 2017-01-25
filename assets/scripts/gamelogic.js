"use strict";
let finalResult = ['','','','','','','','',''];
let currentPlayer = "x";

let resettingArray = ['','','','','','','','',''];

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



 const horizontalResult = function( ){
   if (finalResult[0] === finalResult[1] && finalResult[1] === finalResult[2] ) {
     console.log("x wins");
     return finalResult[0] + " wins";
   }else if(finalResult[3] === finalResult[4] && finalResult[4] === finalResult[5]) {
     return finalResult[3] + "wins";
   }else if(finalResult[6] === finalResult[7] && finalResult[7] === finalResult[8]) {
     return finalResult[6] + " wins";
   }
  //  return false;
 };


 const verticalResult = function( ){
   if (finalResult[0] === finalResult[3] && finalResult[3] === finalResult[6] ) {
     return finalResult[0] + "wins";
   }else if(finalResult[1] === finalResult[4] && finalResult[4] === finalResult[7]) {
     return finalResult[1] + "wins";
   }else if(finalResult[2] === finalResult[5] && finalResult[5] === finalResult[8]) {
     return finalResult[2] + " wins";
   }
  //  return false;
 };

 const diagonalResult = function( ){
   if (finalResult[0] === finalResult[4] && finalResult[4] === finalResult[8] ) {
     return finalResult[0] + " wins";
   }else if(finalResult[2] === finalResult[4] && finalResult[4] === finalResult[6]) {
     return finalResult[2] + " wins";
   }
  //  return false;
 };


 const allFunctions = function() {
   horizontalResult();
   verticalResult();
   diagonalResult();


 };

 //function to player
 const gamePlay = function(number){
   finalResult[number] = currentPlayer;
  console.log(finalResult);
  decidePlayer();
  //  decidePlayer();
   return allFunctions(finalResult);
 };

module.export = {
 gamePlay,
};
