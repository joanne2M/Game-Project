let card1 = ''; // The former
let card2 = ''; // The latter
let card1Parent = '';
let card2Parent = '';
let ready = true;
let stopTimer = false;
let cardCounter = 0;

// Unlocking clicked cards and comparing them

function cardOpen(evt) {
  if (evt.target.className == "card" && cardCounter != 2) {
	    evt.target.className += " open show";

    // Determines which card comes first in a unlocked pair of cards

    if (card1 == false) {
      card1 = evt.target.firstElementChild.className;
      card1Parent = evt.target;
      cardCounter = 1;
    } else {

      // Increasing the amount of moves

      document.querySelector(".moves").innerText = +document.querySelector(".moves").innerText + 1;

      // Rating system. Stars decrease depending on how many moves you've made

      if (document.querySelector(".moves").innerText == '16' || document.querySelector(".moves").innerText == '22') {
        document.querySelector(".fa-star").parentNode.removeChild(document.querySelector(".fa-star"));
