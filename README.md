# Homework_3
Homework 3  hangman game

by Rich Budek 02/02/2018

Project location for viewing   [richbu.github.io](http://richbu.github.io/Homework_2/)

Description:
This is a hangman game with graphics and word dictionaries.  Words are pulled from multiple dictionaries based on subject matter.  Currently, the dictionaries are limits and no way to add words. It uses graphics to make the game more realistic. Title and border made with same border and style as on-line professional.

Startup Screen:
The top row returns the user back to the portfolio
![Start up Screen](/screen_caps/Hangman_01.png)

When the user starts taking guesses then the hangman builds on the screen. Correct letter guesses appear in green  and bad guesses are in red.

![Typical game](/screen_caps/Hangman_02.png)


If too many guess are taken, the man is hung and a modal window comes to the front announcing what happened:

![Out of guesses](/screen_caps/Hangman_03.png)


The modal window can be cleared using either the close button or by hitting a blank area on the screen:

!["hung" man](/screen_caps/Hangman_04.png)


Technolgies used:
1. HTML for general page layout.  Handcoded to match porfolio pages
2. Responsive design
3. BootStrap for nice buttons and menu
4. Javascript for program functions
5. Using Javascript to manipulate images on the screen to make simple animations
6. Using Javascript to change text colors for red and green letters
7. Modal windows to give clean pop ups

Internal design
1. Javascript manupulates the HTML elements directly using Document.QuerySelect.()
2. Most of code re-written as object and methods to make it clearer and easier to handle
3. Words are stored in an array of arrays ... called dictionaries and separated by subject
4. All elements are linked using getElementID

Left to do:
1. Loading the next word works and method does, just need to add a button to do it.
2. Game settings to be toggles and buttons
3. High score recording

Some bugs:
1. If the word has more than one of the same letter, in display, it put booth letters in the letters used space.

