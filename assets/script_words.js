
/* script_words.js  by Rich Budek 01/30/2018  */
/*            for Hangman   */

/* routines to handle all the scripts associated with the words modal  */

for (var i = 0; i < 4; i++) {
    wordListDict[i] = [];
}
wordListDict[0] = ["House", "ladder", "Boat", "Turtle", "Train", "Lake"];
wordListDict[1] = ["Computer", "Tablet", "Memory", "Battery", "HTML", "Javascript", "Android"];  //computer
wordListDict[2] = ["Atom", "Thermal Dynamics", "Carbon", "Conduction"];   //technical
wordListDict[3] = ["Jesus", "Moses", "Noah", "Adam", "Pharoah", "Exodus", "Genesis", "Romans"]; //religious

function wordListClearClicked() {
    //clear out the wordListCurr

    var stopVal = wordListCurr.length;
    for (var i = 0; i < stopVal; i++) {
        wordListCurr.pop();
    }
}

function wordListUsedClear() {
    //clear out the wordListCurr

    var stopVal = wordListUsed.length;
    for (var i = 0; i < stopVal; i++) {
        wordListUsed.pop();
    }
}

function wordListReuseClicked() {
    //function reloads the current dictionary into the word list
    wordListClearClicked();  //clear out word list
    // *RPB NOTFIN  need to put routine to load from wordListUsed
    // like this but from wordListUsed and then clear out wordListUsed wordListLoadFromDict( wordListDictInUse ); 
    //ONLY clear out the used word list AFTER copying ovef
    wordListUsedClear();
}

function wordListLoadFromDict(numDictToUse) {
    //will load the curr word list using the dictionary specified
    //no check is made on incoming parameter
    var stopVal = wordListDict[ numDictToUse ].length;
    for (var i = 0; i < stopVal; i++) {
        wordListCurr.push( wordListDict[ numDictToUse ][i] );
    }

}

function wordListReloadClicked() {
    //reloads the current word list from the dictionary
    wordListClearClicked();  //clear out word list
    wordListLoadFromDict( wordListDictInUse );    
    wordListUsedClear();
}

function btnDispAnswer() {
    //user clicked and wants to see the answer
    
}

// clear out the initial list
wordListClearClicked();
wordListDictToUse = 0;  //which of the dictionaries to load data from
wordDictWordNumInUse = 0;
wordListLoadFromDict( wordListDictToUse );
wordListUsedClear();  //clear out the wordList Used  array


// *RPB test purposes only
answer.clear();
answer.loadFromDict( wordListDict, wordListDictToUse, wordDictWordNumInUse );


