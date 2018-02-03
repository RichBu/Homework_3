# Homework_3
Homework 3  hangman game

by Rich Budek 02/02/2018

Description:
This is a hangman game with graphics and word dictionaries.  Words are pulled from multiple dictionaries based on subject matter.  Currently, the dictionaries are limits and no way to add words. It uses graphics to make the game more realistic. Title and border made with same border and style as on-line professional.

Startup Screen:
![Start up Screen](/screen_caps/Hangman_01.png)


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

