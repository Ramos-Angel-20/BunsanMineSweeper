# This is a Minesweeper based assignmet for Bunsan interns

There's a function called "readTxtMatrix" inside the mineSweeper.js file,
inside that function we have a constant called data that uses a the
readFileSync method from the fileSystem node module, readFileSync recieves 
two parameter, `readFileSync(<file path>, <codification>)` , since we need
a string based result and readFileSync returns a binary we need to use utf-8
codification.