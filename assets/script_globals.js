
/*  Global variables  for Hangman Game  */

/* These are al of the scripts to control the 

    These are all the global variables used 
    throughout the game.  Placed in separate 
    file so that can find them there.

    Will probably only work with Hangman game
    the routines are all element id driven 

    */


const constWordLenMax = 20;

var wordListCurr = [];
var wordListStatus = [];        //0=normal unused   1=being used in game   -1=used already
var wordListDictNmes = ["General", "Computer", "Technical", "Religious"];
var wordListDict = [];

var wordListDictToUse = 0;  //dictionary to use
var wordDictWordNumInUse = 0; //word number from the dictionary in use
var wordListUsed = [];
var wordCurrAnswerStr = "";  //current answer in string form
var wordCurrAnswerChar = [];

var isWordListRandomPick = false;  //will we be using random picks from list ?
var isWordListClearAcive = false;  //are we clearing the word list now ?


// structure to hold the answer along with methods
var answer = {
    wordCurrAnswerStr: "",
    wordCurrAnswerCapsStr: "",
    wordCurrAnswerChar: [],

    clear: function () {
        this.wordCurrAnswerStr = "";
        this.wordCurrAnswerCapsStr = "";
        var stopVal = this.wordCurrAnswerChar.length;
        for (var i = 0; i < stopVal; i++) {
            this.wordCurrAnswerChar.pop();
        }
    },

    loadFromDict: function (dictArrayIn, iDictNum, iWordNum) {
        this.clear();
        this.wordCurrAnswerStr = dictArrayIn[iDictNum][iWordNum];
        this.wordCurrAnswerCapsStr = this.wordCurrAnswerStr.toUpperCase();
        var stopVal = this.wordCurrAnswerStr.length;
        for (i = 0; i < stopVal; i++) {
            this.wordCurrAnswerChar[i] = this.wordCurrAnswerCapsStr.charAt(i);
        }
    }
};

var gameGuess = {
    resultsChr: [], //char array
    resultsDispStr: "",  //result display string
    lettersPicked: [],
    state: 0,
    numGuesses: 0,
    numWrong: 0,
    numCorrect: 0,
    numCharRight: 0,
    timeStart: "",
    timeElapsedDT: "",
    timeElapsedSec: 0,
    timeAllowed: 0,

    clearDisp: function () {
        //clear out the disp strings
        //clear results array
        var stopVal = this.resultsChr.length;
        for (i = 0; i < stopVal; i++) {
            this.resultsChr.pop();
        }
        resultsDispStr = "";
    },

    init: function () {
        this.clearDisp();
        //clear letters picked array
        var stopVal = this.lettersPicked.length;
        for (i = 0; i < stopVal; i++) {
            this.lettersPicked.pop();
        }
        this.state = 0;
        numGuesses = 0;
        numWrong = 0;
        numCorrect = 0;
        numCharRight = 0;
        timeStart = "";
        timeElapsedDT = ""
        timeElapsedSec = 0;
        timeAllowed: 0;
    },

    redrawResultsStr: function ( answerIn ) {
        //redraw (refill) the results str
        this.clearDisp();
        //from the string coming in, setup the results array and string
        var stopVal = answerIn.length;
        for ( i=0; i<stopVal; i++ )  {
            this.resultsChr.push("_");  //push _ as a default
        }
        this.numCorrect = 0;

        //load the results string from the char array
        
    }

};

//all the settings for a gamw
var gameSettings = {

};



