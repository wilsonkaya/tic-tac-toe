"use strict";

const config = require("../config");
const store = require("../store");

const createNewGAme = function(){
return $.ajax({
  url: config.apiOrigin + '/games',
  method: 'POST',
  headers: {
    Authorization:`Token token=${store.user.token}`
  }

});
};

// const index = function(){
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method:'GET',
//     headers:{
//       Authorization: 'Token token=<token>',
//     }
//
//   });
// };

// const show = function(id){
//   $.ajax({
//     url: config.apiOrigin + '/games' + id,
//     method: 'POST',
//     headers:{
//       Authorization: 'Token token=<token>',
//     }
//   });
// };
//
// const patch = function(id){
//   $.ajax({
//     url: config.apiOrigin + '/games' + id,
//     method: 'PATCH',
//     headers:{
//       Authorization: 'Token token=<token>',
//     }
//   });
// };
//
//











module.exports = {
  createNewGAme,
};
