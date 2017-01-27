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

const showUserGame = function(id){
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization:`Token token=${store.user.token}`
    }
  });
};












module.exports = {
  createNewGAme,
  showUserGame,
};
