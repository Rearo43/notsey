'use strict';

const NotesCollection = require('./models/collection.js');

class Notes {

  constructor() {
    this.collection = new NotesCollection();
  }

  async execute(opts) {
    switch (opts.action) {

    case 'add':
      return this.add(opts.payload, opts.category);

    case 'list':
      return this.list(opts.payload);

    case 'delete':
      return await this.delete(opts.payload);

    default:
      return Promise.resolve();
    }
  }

  async add(text, category) {
    console.log('Note saved', text);

    return this.collection.create({ text, category });
  }

  async list(category) {
    let query = category ? { category } : {};
    const notes = await this.collection.get(query);

    notes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(`  Category: ${note.category}\t ID: ${note.id}`);
      console.log('--------------------------------------------------\n');
    });
  }

  async delete(id) {
    await this.collection.delete(id);

    console.log('Deleted note', id.toString());
  }
}

module.exports = Notes;
