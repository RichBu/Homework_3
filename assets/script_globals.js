
/*  Scripts for Hangman Game  */

/* These are al of the scripts to control the 

    Play Modal and all the routines for playing a gamse  

    Will probably only work with Hangman game
    the routines are all element id driven 

    */

var guessResults = [];

function guessResultEmpty() {
    //clear out the guessResultCreate

    var stopVal = guessResult.length;
    for (var i = 0; i < stopVal; i++) {
        wordListCurr.pop();
    }
}

function guessResultCreate( wordToUse ) {
    //first empties the array, to null it out, 
    //then loads "_" for every character of wordToUse
    guestResultEmpty();

    var stopVal = wordToUse.length;
    for (var i = 0; i < stopVal; i++) {
        wordListCurr.push("_");
    }
}