'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
// const store = require('../store');



const onCreateNewGame = function (event) {
  event.preventDefault();
  api.createNewGAme()
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



// this is for get
const addGameHandlers = () => {
  $('#create-NewGame').on('click', onCreateNewGame);
  $('#show-game').on('submit', onGetGame);

};


module.exports = {
  addGameHandlers,
};
