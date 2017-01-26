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

$(() => {
  $(".square").on("click", function(event) {
    event.preventDefault();
    // let location = $(this).data("position") teh  I can use  location as attribute
    let location = $(this);
    eventsGame.gamePlay(location);

  });
});
