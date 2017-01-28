'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const game = require('../gamelogic');
const api = require('./api');
const ui = require('./ui');
const save = require("../store.js")
// // const store = require('../store');
// const onGetFinished = function(event){
//   event.preventDefault();
//   api.index();
//   .then(ui.success)
//   .catch(ui.failure);
//
// };


const onCreateNewGame = function (event) {
  event.preventDefault();
  // I need to add board show jquery
  api.createNewGAme()
  .then((response) => {
    save.game = response.game;
    console.log(response);
  })
  .then(game.resetTheBoard())
  .then(ui.success)
  .catch(ui.failure);
};

const onGetGame = function(event) {
  event.preventDefault();
  let form = getFormFields(event.target);

  if (form.game.id.length === 0) {
    //important need to define index
    api.index()
    .then(ui.onSuccess)
    .catch(ui.onError);
  } else {
    api.showUserGame(form.game.id)
    .then(ui.onSuccess)
    .catch(ui.onError);
  }
};

const onUpDateGame = function(event){
    event.preventDefault();
    const passmove = game.singleUpdate;
    // console.log(passmove);
    api.updateUserGame(passmove)
    .then(ui.onSuccess)
    .catch(ui.onError);
};



// this is for get
const addGameHandlers = () => {
  $('#create-NewGame').on('click', onCreateNewGame);
  $('#show-game').on('submit', onGetGame);
  $("#game-board").on("click", onUpDateGame);

};


module.exports = {
  addGameHandlers,
};
