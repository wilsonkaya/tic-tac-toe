'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .then((response)=>{
    $("#warning1").text("");
    if(response !== ""){
      $('#myModal').modal('hide');
    }
  })
  .then(ui.success)
  .catch($("#warning1").text("Account already exist !"))
  .catch(ui.failure);
};


const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.signIn(data)
    .then((response)=>{
      $("#warning2").text("");
      store.user = response.user;
      if(response !== ""){
        $('#myModal2').modal('hide');
        $(".visible-signin").show();
      }
      return store.user;
    })
    .then(ui.success)
    .catch($("#warning2").text("Account already exist !"))
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);

};


module.exports = {
  addHandlers,
};
