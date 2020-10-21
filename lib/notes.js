#!/usr/bin / env node;
'use strict';

// Require the schema to model what the notes will look like in the database
const notesModel = require('../model/notes-schema.js');


// Link CRUD functionality
const NotesCollection = require('../model/notes-collection.js');

let note = new NotesCollection();

class Notes {
  constructor() {
    // this.action = opts.command.action;
    // this.payload = opts.command.payload;
    
  }
  // Create a prototype method called execute that executes the correct operation

  // switch statement that puts action and payload
  async execute(command) {
    switch (command.action) {
    case 'add':
      // add note and category
      return this.add(command.payload, command.category);
    case 'list':
      // add list name (category)
      return this.list(command.category);
    case 'delete':
      //deletes note
      return this.delete(command.payload);
    default:
      return Promise.resolve();
    }
  }
  //Create a prototype method called add that will create an object representing a note and console.log of the text of the note to be added when the add command s executed
  // add
  // Signature of the add function: The number and types of the arguments and the type of return value
  // body = the ability to use strings
  async add(text, category) {


    // const newNote = ({ text, category});
    let newNote = new NotesCollection({ text: text, category: category });
    let saved = await note.create(newNote);
    // ^^^ SAME AS BELOW^^^
    // const saved = await this.nc.create({ text: text, category: category });
    console.log('Note Saved', note.text);
    return saved;

  }
  async list(category) {
    let query = category ? { category } : {};
    let notes = await NotesCollection.find(query);
    notes.forEach(note => {
      console.log(note.text);
      console.log(` Category: ${note.category} ID: ${note.id}}`);
      console.log('*******************************************');
    });
    return;
  }

  async delete(id) {
    await NotesCollection.findByIdAndDelete(id);
    return console.log('Deleted ID: ', id);
    
  }
}

module.exports = Notes;