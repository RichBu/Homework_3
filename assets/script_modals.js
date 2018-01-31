
/*  Scripts for Hangman Game  */

/* These are al of the scripts to control the 

    modal pop-up windows withing the game  

    Will probably only work with Hangman game
    the routines are all element id driven 

    */

// prepare the modals
var modalHelp = document.getElementById('modHelp');
var modalSettings = document.getElementById('modSettings');
var modalHiScores = document.getElementById('modHiScores');
var modalPlay = document.getElementById('modPlay');
var modalWords = document.getElementById('modWords');

// Get the button that opens the modal
var btnHelp = document.getElementById("btnHelp");
btnHelp.onclick = function () {
    modalHelp.style.display = "block";
}
var btnSettings = document.getElementById("btnSettings");
btnSettings.onclick = function () {
    modalSettings.style.display = "block";
}
var btnHiScores = document.getElementById("btnHiScores");
btnHiScores.onclick = function () {
    modalHiScores.style.display = "block";
}
var btnPlay = document.getElementById("btnPlay");
btnPlay.onclick = function () {
    modalPlay.style.display = "block";
}
var btnWords = document.getElementById("btnWords");
btnWords.onclick = function () {
    modalWords.style.display = "block";
}

// Get the <span> element that closes the modal
//var closeModHelp = document.getElementsByClassName("close")[0];
var closeModHelp = document.getElementById("closeModHelp");
var closeModSettings = document.getElementById("closeModSettings");
var closeModHiScores = document.getElementById("closeModHiScores");
var closeModPlay = document.getElementById("closeModPlay");
var closeModWords = document.getElementById("closeModWords");

// When the user clicks on <span> (x), close the modal
closeModHelp.onclick = function () {
    modalHelp.style.display = "none";
}
closeModSettings.onclick = function () {
    modalSettings.style.display = "none";
}
closeModHiScores.onclick = function () {
    modalHiScores.style.display = "none";
}
closeModPlay.onclick = function () {
    modalPlay.style.display = "none";
}
closeModWords.onclick = function () {
    modalWords.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalHelp) {
        modalHelp.style.display = "none";
    }
    if (event.target == modalSettings) {
        modalSettings.style.display = "none";
    }
    if (event.target == modalHiScores) {
        modalHiScores.style.display = "none";
    }
    if (event.target == modalPlay) {
        modalPlay.style.display = "none";
    }
    if (event.target == modalWords) {
        modalWords.style.display = "none";
    }
}

