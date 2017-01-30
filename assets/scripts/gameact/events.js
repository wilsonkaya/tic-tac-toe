'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const game = require('../gamelogic');
const api = require('./api');
const ui = require('./ui');
const save = require("../store.js");



 const onGetFinished = function(event){
  event.preventDefault();
  api.index()
  .then((response) => {
    save.game = response.game;
    $("#game-results").text("Games " + response.games.length);
  })
  .then(ui.success)
  .catch(ui.failure);
};


const onCreateNewGame = function (event) {
  event.preventDefault();
  // I need to add board show jquery
  api.createNewGAme()
  .then((response) => {
    save.game = response.game;
    $("#game-board").show();
    $("#show-game").show();
  })
  .then(game.resetTheBoard())
  .then(ui.success)
  .catch(ui.failure);
};

const onGetGame = function(event) {
  event.preventDefault();
  let form = getFormFields(event.target);
  if (form.game.id.length === 0) {
    api.index()
    .then(ui.onSuccess)
    .catch(ui.onError);
  } else {
    api.showUserGame(form.game.id)
    .then((response) => {
      save.game = response.game;
      $("#game-results").text("Game " + response.game.cells);
    })
    .then(ui.onSuccess)
    .catch(ui.onError);
  }
};

const onUpDateGame = function(event){
    event.preventDefault();
    const passmove = game.singleUpdate;
    api.updateUserGame(passmove)
    .then(ui.onSuccess)
    .catch(ui.onError);
};



// this is for get
const addGameHandlers = () => {
  $('#create-NewGame').on('click', onCreateNewGame);
  $('#show-game').on('submit', onGetGame);
  $(".square").on("click", onUpDateGame);
  $("#show-FinishedGame").on("click", onGetFinished);

};

module.exports = {
  addGameHandlers,
};
