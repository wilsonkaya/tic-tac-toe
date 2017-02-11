<== LINK ==>
Link of the game is https://wilsonkaya.github.io/tic-tac-toe/

Link for github https://github.com/wilsonkaya/tic-tac-toe
<== Technologies == >

HTML, CSS, Bootstrap, jQuery

<== Deveopment story ==>
1- Engine of the game is created first,
  -The game board is represented as an array in the engine.
  -The engine could be divided in 4 main parts
	- “decidePlayer’ covers the logic for deciding the current player by iterating trough array, if the selected position of the array is empt or occupied.
	- ‘findWinner’ function iterates trough the board array and looks for the winning conditions.
	- ‘resetTheBoard’ resets the current player and the array.
	-‘sendMove’ updates the server according to selected number of the array.

  First attempt to create engine I have thought about creating a single object with prototypes needed to for a fully funcitonal game. However, after my first attempt I have realized that I didn't fully understand the necessary elements to createthe game. After playing the game couple of times. I took notes about the player, winner logic, reseting the board.  After creating the each part seperately I have managed to link these files.

2- - Click Events created in index.js for Dom manipulation and  to visualize the representation of the html.
  Dom manupulation was one of the most challanging part of the project. I couldn't fully understood how cloud i use the data that were being passed by the click event listeneres. After searching trough internet and learning the logic from coworkers, I were able to overcome the issues.

3- Api for the authorzation from api-token-auth https://github.com/wilsonkaya/api-token-auth implimented to the game.
  I have modified the auth doucmentation from previous project. There were minor changes needed to be done to make it fully funcitonal.

4- “gameact” api for the game interaction with the api server.
  - Game act is divided into three different main parts:
    -Api for ajax calls.
  	- Event for crating an order.
	  -Ui for user interface.

    I belive after DOM manupulation and Auth. api I improved my knowledge on ajax calls and events that need created. Accordingly, it was easier for me to code most of the game actions but updatting the everysingle action.

<== User Stories ==>
 As a <user>, I want to <Sign Up>, so that <Sign In >.
 As a <user>, I want to <Sign In>, so that <creat a new Games >.
 As a <user>, I want to <create a new game>, so that <play>.
 As a <user>, I want to <click show game>, so that <see a single played game>.
 As a <user>, I want to <show palyers game>, so that <see the number of the previous games>.
