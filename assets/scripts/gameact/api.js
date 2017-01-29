"use strict";

const config = require("../config");
const store = require("../store");

const index = function(){
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization:`Token token=${store.user.token}`
    }
  });
};


const createNewGAme = function(){
return $.ajax({
  url: config.apiOrigin + '/games',
  method: 'POST',
  headers: {
    Authorization:`Token token=${store.user.token}`
  }

});
};

const showUserGame = function(id){
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization:`Token token=${store.user.token}`
    }
  });
};

const updateUserGame = function(data){
  console.log("updateUserGame Data: ", data);
  return $.ajax({
    url: config.apiOrigin + '/games/' + `${store.game.id}`,
    method: "PATCH",
    headers:{
      Authorization:`Token token=${store.user.token}`
    },
    data
  });
};










module.exports = {
  createNewGAme,
  showUserGame,
  updateUserGame,
  index
};
