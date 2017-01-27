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




// this is for get
const addGameHandlers = () => {
  $('').on('click', onCreateNewGame);

};


module.exports = {
  addGameHandlers,
};
