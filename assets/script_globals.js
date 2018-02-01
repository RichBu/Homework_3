
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
    lettersGoodChr: [],
    lettersGoodStr: "",
    lettersBadChr: [],
    lettersBadStr: "",
    state: 0,
    numGuesses: 0,
    numWrong: 0,
    numCorrect: 0,
    numCharRight: 0,
    timeStart: "",
    timeElapsedDT: "",
    timeElapsedSec: 0,
    timeAllowed: 0,
    isGameOverMatch: false;     //game is over because a match
    isGameOverLost: false;      //game is over because ran out of guesses
    isGameOverTimeOut: false;  //game is over, timed out


    clearDisp: function () {
        //clear out the disp strings
        //clear results array
        var stopVal = this.resultsChr.length;
        for (i = 0; i < stopVal; i++) {
            this.resultsChr.pop();
        }
        this.resultsDispStr = "";

        stopVal = this.lettersBadChr.length;
        for (i = 0; i < stopVal; i++) {
            this.lettersBadChr.pop();
        }
        this.lettersBadStr = "";

        stopVal = this.lettersGoodChr.length;
        for (i = 0; i < stopVal; i++) {
            this.lettersGoodChr.pop();
        }
        this.lettersGoodStr = "";
    },

    init: function () {
        this.clearDisp();
        //clear letters picked array
        var stopVal = this.lettersPicked.length;
        for (var i = 0; i < stopVal; i++) {
            this.lettersPicked.pop();
        }
        this.state = -1;
        this.numGuesses = 0;
        this.numWrong = 0;
        this.numCorrect = 0;
        this.numCharRight = 0;
        this.timeStart = "";
        this.timeElapsedDT = ""
        this.timeElapsedSec = 0;
        this.timeAllowed: 0;
    },

    compPicksToAnswer: function (answerIn) {
        //compare the letters picked to the answer and puts into results
        //loop thru every letter picked, then loop thru answer
        var stopVal1 = this.lettersPicked.length;
        var stopVal2 = answerIn.length;
        for (var i = 0; i < stopVal1; i++) {
            var noLetterFound = true;
            for (var j = 0; j < stopVal2; j++) {
                if (this.lettersPicked[i] === answerIn.charAt(j)) {
                    //there is a match so index of results is same pos as answerIn
                    this.resultsChr[j] = answerIn.charAt(j);
                    this.lettersGoodChr.push(answerIn.charAt(j));
                    this.lettersGoodStr = this.lettersGoodStr + answerIn.charAt(j);
                    noLetterFound = false;
                }
            }
            if (noLetterFound === true) {
                //there was not a match
                //this.resultsChr.push("_");  //push _ as a default
                this.lettersBadChr.push(answerIn.charAt(j));
                this.lettersBadStr = this.lettersBadStr + this.lettersPicked[i]; 
            }
        }
    },

    redrawResultsStr: function (answerIn) {
        //redraw (refill) the results str
        this.clearDisp();
        //from the string coming in, setup the results array and string
        var stopVal = answerIn.length;
        for (i = 0; i < stopVal; i++) {
            this.resultsChr.push("_");  //push _ as a default
        }
        this.numCorrect = 0;

        this.compPicksToAnswer(answerIn);
        //load the results string from the char array
        stopVal = this.resultsChr.length;
        for (i = 0; i < stopVal; i++) {
            this.resultsDispStr = this.resultsDispStr + this.resultsChr[i] + " ";  //will have extra space at end when done
        }

        //put strings out to display
        document.querySelector("#Disp-Results").textContent = this.resultsDispStr;
        document.querySelector("#Disp-PicksGood").textContent = this.lettersGoodStr;
        document.querySelector("#Disp-PicksBad").textContent = this.lettersBadStr;
    },


    pushLetterPicked: function (chrIn, answerStrIn) {
        //takes inoming letter and pushes to the picked letters then redraws
        //need incoming letter and answer string
        this.lettersPicked.push(chrIn);
        this.redrawResultsStr(answerStrIn);
    }

};

//all the settings for a gamw
var gameSettings = {

};



