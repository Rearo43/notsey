const NotesModel = require('./schema.js');

class NotesCollection {

  create(info) {

    let note = new NotesModel(info);

    return note.save();
  }

  get(category) {
    if (category) {
      return NotesModel.find({ category });
      
    } else {
      return NotesModel.find({});
    }


  }
  delete(_id) {
    return NotesModel.findByIdAndDelete(_id);
  }
}

module.exports = NotesCollection;
