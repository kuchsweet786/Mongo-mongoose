
var mongoose = require("mongoose");



var NoteSchema = new Schema({

    article_id: {
        type: Schema.Types.ObjectId
    },
    body: {
        type: String
    }
        });



var Note = mongoose.model("Note", NoteSchema);


module.exports = Note;