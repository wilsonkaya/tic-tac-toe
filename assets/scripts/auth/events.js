'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

//Events
const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .then((response) => {
      $("#warning1").text("");
      if (response !== "") {
        $("#warning1").text("Succesfull !");
        setTimeout(function() {$('#myModal').modal('hide');}, 1300)
        // $('#myModal').modal('hide');
        setTimeout(function() {$('.clean-signup').val("");}, 1300)
        // $('.clean-signup').val("");
        setTimeout(function() {$('#warning1').text("");}, 1300)
      }
    })
    .then(ui.success)
    .catch((error) => {
      $("#warning1").text("Existing username or wrong password !")
    })
    .catch(ui.failure);
};


const onSignIn = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.signIn(data)
    .then((response) => {
      $("#warning2").text("");
      store.user = response.user;
      if (response !== "") {
        $('#myModal2').modal('hide');
        $(".visible-signin").show();
        $('.clean-signin').val("");
        $('.signin-hide').hide();

      }
      return store.user;
    })
    .then(ui.success)
    .catch((error) => {
      $("#warning2").text("Unexisting username or wrong password !")
    })
    .catch(ui.failure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .then((response) => {
      $("#warning3").text("Succesfull! Please close this box!")
    })
    .then(ui.success)
    .catch((error) => {
      $("#warning3").text("Wrong password !")
    })
    .catch(ui.failure);
};

const onSignOut = function(event) {
  event.preventDefault();
  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(() => {
      $(".visible-signin").hide();
      $(".buttons-forGame").hide();
      $('.signin-hide').show();
      $("#show-FinishedGame").hide();
      $(".clean-changepassword").val("");
      $("#warning3").text("");

    })
    .then(ui.success)
    .catch(ui.failure);
};

const closeChagngePasword = function() {
  $("#warning1").text("");
  $("#warning2").text("");
  $("#warning3").text("");
  $(".clean-changepassword").val("");
  $(".clean-signup").val("");
  $(".clean-signin").val("");
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('.close-button').on('click', closeChagngePasword);
};


module.exports = {
  addHandlers,
};
