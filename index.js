#!/usr/bin/env node
// ^^ Bash command that looks inside of the user's environment and runs node.

'use strict';
// makes JS "less loose"

const mongoose = require('mongoose');


// declaring name (notesy) will create a database if it doesn't already exist.
mongoose.connect('mongodb://localhost:27017/notesy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Input = require('./lib/input.js');
// This communicates that you want require to look in this file path for the input library file.
const Notes = require('./lib/notes.js');
// Requires to look in the filepath for the notes library file


// const options = 
const input = new Input();
const notes = new Notes();



// // creates new object from the Input constructor function
// if input is valid, execute command and then disconnect from mongoose. 
if (input.valid()) {
  notes.execute(input.command)
    .then(mongoose.disconnect)
    .catch(error => console.error(error));
// else exit out with help function.    
} else {
  help();
}

// Help functions puts up a console error and exits out.
function help() {
  console.log('Error!');
  process.exit();
}