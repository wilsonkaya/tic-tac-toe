"use strict";

"use strict";
let finalResult = ['','','','','','','','',''];
let currentPlayer = "";
let playerOne = "x";
let playerTwo = "o";

let a = finalResult[0];
let b = finalResult[1];
let c = finalResult[2];
let d = finalResult[3];
let e = finalResult[4];
let f = finalResult[5];
let g = finalResult[6];
let h = finalResult[7];
let i = finalResult[8];
let countOfClick = 0;




const refresh = function(){
   a = [];
   b = [];
   c = [];
   d = [];
   e = [];
   f = [];
   g = [];
   h = [];
   i = [];
   countOfClick = 0;
};

const decidePlayer = function(){
  if(finalResult.length % 2 === 0){
    currentPlayer = playerOne
  }
}


 const horizontalResult = function(){
   if (finalResult[0] === finalResult[1] && finalResult[1] === finalResult[2] ) {
     return finalResult[0] + " wins";
   }else if(finalResult[3] === finalResult[4] && finalResult[4] === finalResult[5]) {
     return finalResult[3] + "wins";
   }else if(finalResult[6] === finalResult[7] && finalResult[7] === finalResult[8]) {
     return d[0] + " wins";
   }
  //  return false;
 };


 const verticalResult = function(){
   if (finalResult[0] === finalResult[3] && finalResult[3] === finalResult[6] ) {
     return finalResult[0] + "wins";
   }else if(finalResult[1] === finalResult[4] && finalResult[4] === finalResult[7]) {
     return finalResult[1] + "wins";
   }else if(finalResult[2] === f[0] && f[0] === i[0]) {
     return finalResult[2] + " wins";
   }
  //  return false;
 };

 const diagonalResult = function(){
   if (finalResult[0] === finalResult[4] && finalResult[4] === finalResult[8] ) {
     return finalResult[0] + " wins";
   }else if(finalResult[2] === finalResult[4] && finalResult[4] === finalResult[6]) {
     return finalResult[2] + " wins";
   }
  //  return false;
 };






//
//  const finalResult = function(){
//    horizontalResult();
//    verticalResult();
//    diagonalResult()
// };

finalResult();
module.export = {
  horizontalResult,
  verticalResult,
  diagonalResult
};
