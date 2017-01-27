'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const eventsGame = require('./gamelogic');
const authEvents = require('./auth/events.js');
const gameEvents = require('./gameact/events.js');

$(() => {
  $("#game-board").on("click", function(event) {
    event.preventDefault();
    eventsGame.gamePlay(event.target);
    eventsGame.sendMove(event.target.id);
  });
//this is for second button
  $("#reset").on("click",eventsGame.resetTheBoard);
});


//This is for api
$(() => {
  authEvents.addHandlers();
  gameEvents.addGameHandlers();
});
